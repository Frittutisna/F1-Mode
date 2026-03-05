// ==UserScript==
// @name         AMQ F1 Mode
// @namespace    https://github.com/Frittutisna
// @version      0-alpha.0.0
// @description  Script to track F1 Mode on AMQ
// @author       Frittutisna
// @match        https://*.animemusicquiz.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let playersCache    = [];
    let playerTimes     = {};
    let songStartTime   = 0;

    let config = {
        delay           : 500,
        hostId          : -1,
        isTest          : false,
        mode            : 'normal',                         // normal, crews
        race            : 1,
        laps            : 60,
        profile         : 0,
        teamNames       : {crew1: "Red", crew2: "Blue"},    // Add normal teams: McLaren, Mercedes, Red Bull, Ferrari, Williams, VCARB, Aston Martin, Haas, Sauber, Alpine
        links           : {
            guide       : "https://github.com/Frittutisna/F1-Mode/blob/main/README.md",
            flowchart   : "https://github.com/Frittutisna/F1-Mode/blob/main/Flowchart/Flowchart.pdf",
            powerpoint  : "https://github.com/Frittutisna/F1-Mode/blob/main/PowerPoint/PowerPoint.pdf",
            playercard  : "https://github.com/Frittutisna/F1-Mode/blob/main/PowerPoint/Player.png",
            examplecard : "https://github.com/Frittutisna/F1-Mode/blob/main/PowerPoint/Example.png",
            dashboard   : "https://github.com/Frittutisna/F1-Mode/blob/main/Dashboard.png"
        }
    };

    const match = {
        isActive        : false,
        lap             : 0,
        safetyCar       : 'Green',  // 'Green', 'VSC', 'FSC'
        weather         : 'Dry',    // 'Dry', 'Intermediate', 'Wet'
        players         : {},       // Tracks Tally, Tyre (Type, Age, Life), Pits, Penalties
        dnf             : []
    };

    const TERMS = {
        "tally"         : "Cumulative Clean Time to determine standings",
        "raw time"      : "Actual time taken to answer",
        "clean time"    : "Raw Time - Bonuses + Penalties for a Correct Answer, 25s for a Wrong Answer/No Answer/Normal Pitstop, or 10s for a Pitstop under Virtual/Full Safety Car",
        // Clean from here
        "vsc"           : "Virtual Safety Car. Triggered if everyone is correct. Ignore song, track tyre age/pits.",
        "fsc"           : "Full Safety Car. Resets the Tally gaps to 0.5s between all cars.",
        "excess pits"   : "Pitting over the limit treats your next correct answer as wrong.",
        "double stack"  : "Pitting on the same lap as a teammate right ahead of you adds a time penalty."
    };

    const COMMAND_DESCRIPTIONS = {
        "whatis": "Explain a term (/f1 whatis [Term])",
        "flowchart": "Show link to the flowchart",
        "guide": "Show link to the guide",
        "powerpoint": "Show link to the PowerPoint",
        "playercard": "Show link to the Player Card",
        "examplecard": "Show link to the Example Card",
        "start": "Start the race tracker",
        "export": "Download the HTML scoresheet",
        "end": "End the race tracker",
        "sethost": "Set the script host (/f1 sethost [0-8])",
        "settest": "Enable/disable loose lobby validation (/f1 settest [true/false])",
        "howto": "Show setup tutorial",
        "setrace": "Set the race parameters (/f1 setrace [1-20] [30-80] [0-2])",
        "setcrews": "Set the race to Crews mode with team colors (/f1 setcrews [color1] [color2])",
        "setdnf": "Mark a player as DNF (/f1 setdnf [slot 1-20])",
        "pit": "Manually pit for tyres. Overrules your answer. (/f1 pit [soft/medium/hard])",
        "situation": "Text readout of current telemetry for those who can't see Dashboard images."
    };

    // Message Queue to prevent rate-limiting
    const messageQueue = {
        queue: [],
        isProcessing: false,
        add: function(msg, isSystem = false) {
            this.queue.push({msg, isSystem});
            this.process();
        },
        process: function() {
            if (this.isProcessing || this.queue.length === 0) return;
            this.isProcessing = true;
            const item = this.queue.shift();

            if (typeof gameChat !== 'undefined' && item.isSystem) {
                gameChat.systemMessage(item.msg);
            } else if (typeof socket !== 'undefined') {
                socket.sendCommand({
                    type: "lobby",
                    command: "game chat message",
                    data: {msg: item.msg, teamMessage: false}
                });
            }

            setTimeout(() => {
                this.isProcessing = false;
                this.process();
            }, config.delay);
        }
    };

    const systemMessage = (msg) => messageQueue.add(msg, true);
    const chatMessage = (msg) => messageQueue.add(msg, false);

    const getTyreStats = (type, mode) => {
        if (mode === 'crews') {
            if (type === 'soft') return { life: 10 };
            if (type === 'medium') return { life: 15 };
            if (type === 'hard') return { life: 20 };
            return { life: 5 }; // Neutral
        } else {
            if (type === 'soft') return { life: 20 };
            if (type === 'medium') return { life: 30 };
            if (type === 'hard') return { life: 40 };
            return { life: 10 }; // Neutral
        }
    };

    // Calculate Clean Time for a player
    const calculateCleanTime = (playerId, isCorrect, rawTimeSecs) => {
        let pState = match.players[playerId];
        let cleanTime = rawTimeSecs;

        // Overrule if pitting
        if (pState.pittedThisLap) {
            cleanTime = (match.safetyCar !== 'Green') ? 10 : 25;
            pState.pittedThisLap = false; // Reset for next lap
            return cleanTime;
        }

        // Overrule if wrong/no answer
        if (!isCorrect) {
            return (match.safetyCar !== 'Green') ? 10 : 25;
        }

        // Apply Tyre Penalties/Bonuses
        let tyreBonus = 0;
        let tyrePenalty = 0;

        if (pState.tyre.age > pState.tyre.life) {
            tyrePenalty = pState.tyre.age - pState.tyre.life;
        } else {
            // Calculate Bonus based on tyre type and age
            if (pState.tyre.type === 'soft' && pState.tyre.age <= (config.mode === 'crews' ? 10 : 10)) tyreBonus = 2;
            if (pState.tyre.type === 'medium') {
                if (pState.tyre.age <= 5) tyreBonus = 2;
                else if (pState.tyre.age <= 15) tyreBonus = 1;
            }
            if (pState.tyre.type === 'hard' && pState.tyre.age <= 20) tyreBonus = 1;
        }

        // Excess Pits / Double Stack Penalties
        if (pState.excessPitFlag) {
            pState.excessPitFlag = false;
            return 25; // Treats next correct answer as wrong
        }

        cleanTime = rawTimeSecs - tyreBonus + tyrePenalty + pState.pendingPenalty;
        pState.pendingPenalty = 0; // Consumed

        // Clamp between 1s and 25s
        if (cleanTime < 1) cleanTime = 1;
        if (cleanTime > 25) cleanTime = 25;

        return cleanTime;
    };

    const processLap = (payload) => {
        if (!match.isActive) return;
        match.lap++;
        
        const players = payload.players;
        let correctCount = 0;
        let wrongCount = 0;

        players.forEach(p => {
            if (match.dnf.includes(p.gamePlayerId)) return;
            
            // Get Answer Time from our internal tracker
            let rawTimeMs = playerTimes[p.gamePlayerId] || 25000;
            let rawTimeSecs = rawTimeMs / 1000;

            if (p.correct) correctCount++;
            else wrongCount++;

            // Ensure Player State exists
            if (!match.players[p.gamePlayerId]) {
                match.players[p.gamePlayerId] = {
                    tally: 0,
                    tyre: { type: 'neutral', age: 0, life: getTyreStats('neutral', config.mode).life },
                    pits: 0,
                    pittedThisLap: false,
                    pendingPenalty: 0,
                    excessPitFlag: false,
                    name: getPlayerName(p.gamePlayerId)
                };
            }

            let pState = match.players[p.gamePlayerId];
            pState.tyre.age++; // Increase tyre age every lap

            let cleanTime = calculateCleanTime(p.gamePlayerId, p.correct, rawTimeSecs);
            pState.tally += cleanTime;
        });

        // Evaluate Safety Cars
        if (config.mode === 'crews') {
            const activePlayersCount = players.length - match.dnf.length;
            if (correctCount === activePlayersCount && activePlayersCount > 0) {
                match.safetyCar = 'VSC';
                chatMessage(`Lap ${match.lap}: Virtual Safety Car deployed!`);
            } else if (wrongCount >= 4) {
                match.safetyCar = 'FSC';
                chatMessage(`Lap ${match.lap}: Full Safety Car deployed! Tallies will be reset.`);
                // Note: Actual tally reset logic goes here based on standings
            } else {
                match.safetyCar = 'Green';
            }
        }

        chatMessage(`Lap ${match.lap}/${config.laps} Completed. Dashboard updating...`);
    };

    const getPlayerName = (gamePlayerId) => {
        const p = Object.values(quiz.players).find(x => x.gamePlayerId === gamePlayerId);
        return p ? p.name : "Unknown";
    };

    const getSelfSlot = () => {
        if (typeof quiz !== 'undefined' && quiz.inQuiz) {
            const p = Object.values(quiz.players).find(p => p.name === selfName);
            if (p) return p.teamNumber || p.lobbySlot;
        }
        return 0;
    };

    const setup = () => {
        
        // --- Internal Time Tracking Listeners ---
        new Listener("play next song", () => {
            songStartTime = Date.now();
            playerTimes = {}; // Reset times for the new song
        }).bindListener();

        new Listener("player answered", (payload) => {
            let answerTime = Date.now() - songStartTime;
            payload.forEach(event => {
                event.gamePlayerIds.forEach(id => {
                    // This overwrites the previous time if they change their answer, 
                    // capturing the latest "Raw Time" just like AMQ does natively.
                    playerTimes[id] = answerTime;
                });
            });
        }).bindListener();
        // ----------------------------------------

        new Listener("game chat update", (payload) => {
            payload.messages.forEach(msg => {
                if (msg.message.startsWith("/f1")) {
                    const parts = msg.message.split(" ");
                    const cmd = parts[1] ? parts[1].toLowerCase() : "help";
                    const arg = parts.slice(2).join(" ").toLowerCase();
                    const isHost = (msg.sender === selfName);

                    // Public Commands
                    if (["whatis", "flowchart", "guide", "powerpoint", "playercard", "examplecard", "help", "pit", "situation"].includes(cmd)) {
                        setTimeout(() => {
                            if (cmd === "help") {
                                chatMessage("Commands: " + Object.keys(COMMAND_DESCRIPTIONS).join(", "));
                            } else if (cmd === "whatis") {
                                if (TERMS[arg]) chatMessage(`${arg}: ${TERMS[arg]}`);
                                else chatMessage(`Available terms: ${Object.keys(TERMS).join(", ")}`);
                            } else if (cmd === "pit") {
                                const allowedTyres = ['soft', 'medium', 'hard'];
                                if (allowedTyres.includes(arg)) {
                                    const pObj = Object.values(quiz.players).find(p => p.name === msg.sender);
                                    if (pObj && match.isActive) {
                                        let pState = match.players[pObj.gamePlayerId];
                                        if (pState) {
                                            pState.pittedThisLap = true;
                                            pState.pits++;
                                            pState.tyre = { type: arg, age: 0, life: getTyreStats(arg, config.mode).life };
                                            chatMessage(`${msg.sender} is pitting for ${arg.toUpperCase()} tyres!`);
                                            
                                            // Check Excess Pits
                                            const limit = config.mode === 'crews' ? 2 : 3;
                                            if (pState.pits > limit) pState.excessPitFlag = true;
                                        }
                                    }
                                }
                            } else if (cmd === "situation") {
                                chatMessage(`Situation Lap ${match.lap}: Track is ${match.safetyCar}. Please view dashboard image for full telemetry.`);
                            } else if (config.links[cmd]) {
                                chatMessage(`${cmd}: ${config.links[cmd]}`);
                            }
                        }, config.delay);
                        return;
                    }

                    // Host Commands
                    if (isHost) {
                        setTimeout(() => {
                            if (cmd === "start") {
                                match.isActive = true;
                                match.lap = 0;
                                chatMessage(`F1 Mode Started! Mode: ${config.mode.toUpperCase()}, Laps: ${config.laps}`);
                            } else if (cmd === "setrace") {
                                config.mode = 'normal';
                                config.race = parseInt(parts[2]) || 1;
                                config.laps = parseInt(parts[3]) || 50;
                                config.profile = parseInt(parts[4]) || 0;
                                systemMessage(`Race set: R${config.race}, ${config.laps} Laps, Profile ${config.profile}`);
                            } else if (cmd === "setcrews") {
                                config.mode = 'crews';
                                config.race = 1;
                                config.laps = 30;
                                config.profile = 0;
                                config.teamNames.crew1 = parts[2] || "Red";
                                config.teamNames.crew2 = parts[3] || "Blue";
                                systemMessage(`Crews Mode set! Teams: ${config.teamNames.crew1} vs ${config.teamNames.crew2}`);
                            } else if (cmd === "setdnf") {
                                const slot = parseInt(parts[2]);
                                const pObj = Object.values(quiz.players).find(p => p.lobbySlot === slot || p.teamNumber === slot);
                                if (pObj) {
                                    if (!match.dnf.includes(pObj.gamePlayerId)) match.dnf.push(pObj.gamePlayerId);
                                    systemMessage(`Marked ${pObj.name} (Slot ${slot}) as DNF.`);
                                } else {
                                    systemMessage(`Could not find player in slot ${slot}.`);
                                }
                            } else if (cmd === "end") {
                                match.isActive = false;
                                systemMessage("F1 Tracker Stopped");
                            } else if (cmd === "sethost") {
                                config.hostId = parseInt(parts[2]);
                                systemMessage(`Host ID set to ${config.hostId}`);
                            } else if (cmd === "settest") {
                                config.isTest = parts[2] === "true";
                                systemMessage(`Test mode set to ${config.isTest}`);
                            } else if (cmd === "howto") {
                                systemMessage("1. /f1 sethost [slot]");
                                systemMessage("2. /f1 setrace [race] [laps] [profile] OR /f1 setcrews [color1] [color2]");
                                systemMessage("3. /f1 start");
                            }
                        }, config.delay);
                    }
                }
            });
        }).bindListener();

        // Hook into Answer Results to process the lap
        new Listener("answer results", (payload) => {
            if (match.isActive) setTimeout(() => processLap(payload), config.delay);
        }).bindListener();
    };

    function init() {
        if (typeof quiz !== 'undefined' && typeof Listener !== 'undefined') {
            setup();
        } else {
            setTimeout(init, config.delay);
        }
    }

    init();
})();