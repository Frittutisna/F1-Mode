# F1 Mode for Crews v0-concept.0.0

## I. Setup
1. **Grid:** 8 players in 2 teams of 4
2. **Format:** 1 round (race) @ 30 songs (laps) @ 20 seconds ≈ ~20 minutes
3. **Difficulty:** 60-100 Random

## II. Time
Your goal is to have the lowest **Tally** at the end of the race to accumulate the most **Points**
1.  **Raw Time:**
    * **Correct Answer:** Actual time taken to answer
    * **Wrong Answer/No Answer/Pitstop:** See **Clean Time**
2.  **Clean Time:**
    * Raw Time - Bonuses + Penalties for a Correct Answer, 25s for a Wrong Answer/No Answer/Normal Pitstop, or 10s for a Pitstop under Full Safety Car
    * **Bounds:** Cannot be lower than **1s** or higher than **25s**
    * **Tally:** The clamped Clean Time is then added to your cumulative **Tally** each lap
    * **Safety Cars:** Virtual/Full Safety Car is then applied against the **Tally**

## III. Pitstops and Tyres
1. **Pitstops:**
    * **How To:** Enter `/f1 pit soft`, `/f1 pit medium`, or `/f1 pit hard` in the chat box. This overrules any answer you entered for that lap
    * **Penalty:** Pitting counts as a Clean Time of **25s** normally, or **10s** under Full Safety Car
    * **Limit:** 2 uses per race. While you may pit for the 3rd time and/or more, doing so causes **Excess Pits** that treats your next Correct Answer as a Wrong/No Answer
    * **Double Stack:** If teammates pit on the same lap and the trailing driver(s) is/are right behind (e.g., P3-P4-P5-P6), they suffer a compounding 5s penalty on their next Correct Answer for each teammate directly ahead of them in the pit lane (e.g., 5s for P4, 10s for P5, 15s for P6)
2. **Tyres:** Once `Age > Life`, `Penalty = Age - Life` for each lap thereafter
    * 🟠 **Neutral (N)**
        * **Role:** Default starting compound
        * **Life:** 5 laps
        * **Bonus:** None
    * 🔴 **Soft (S)**
        * **Role:** Speed
        * **Life:** 10 laps
        * **Bonus:** **2s** on **Laps 1-10** of stint
    * 🟡 **Medium (M)**
        * **Role:** Balance
        * **Life:** 15 laps
        * **Bonus:** **2s** on **Laps 1-5**, **1s** on **Laps 6-15** of stint
    * ⚪ **Hard (H)**
        * **Role:** Endurance
        * **Life:** 20 laps
        * **Bonus:** **1s** on **Laps 1-20** of stint

## IV. Events
* **Drag Reduction System (DRS):** Except on Lap 1 or under Virtual/Full Safety Car, gain a **1s bonus** if you are less than 1s behind anyone
* **Virtual Safety Car (VSC):** Triggered if everyone is **correct**. **Ignore the song** for everything except Tyre Age and Pitstops
* **Full Safety Car (FSC):** Triggered if 4+ players are **wrong** (Wrong/No Answers). **Reset the Tally** so that P2 is 0.5s behind P1, P3 is 0.5s behind P2, etc. The first race occurrence awards **Sprint Points**

## V. Points and Victory
1. **Points:**
    * **Sprint Points:** 3, 2, and 1 point for the Top 3 at the last lap before the first FSC of the race
    * **Race Points:** 12, 10, 8, 6, 4, 2, and 1 point for the Top 10 at the end of the race
    * **Fastest Lap Point:** 1 point for the driver with the fastest single Correct Answer Raw Time
2. **Victory:** The team with the most total points at the end of the race is the winner. If tied, the team with the driver that wins the race is the winner

## VI. Dashboard
After each lap, a [Dashboard](https://github.com/Frittutisna/F1-Mode/blob/main/Crews/Dashboard.png) link will be posted in the lobby chat to show the race situation for the next lap. You are strongly recommended to install the [AMQ Chat Plus](https://github.com/kempanator/amq-scripts/blob/main/amqChatPlus.user.js) script through TamperMonkey, then enable `Load Media in Chat` and set `Auto Load Media` to `All` in `Settings > Graphics` to view the Dashboard
1. **Race Table:** Ordered from the lowest current Tally
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Constructor Banner Column:** Merged for Double Stack risk
    * **Driver Name Column:** Purple for the driver currently holding the Fastest Lap point
    * **Tyre Column:** Fill color if `Age ≤ Life`, outline and text color if `Age > Life`. Age next to Identifier (e.g., `S11` for 11-lap-old Softs)
        * 🟠 Neutral (N)
        * 🔴 Soft (S)
        * 🟡 Medium (M)
        * ⚪ Hard (H)
    * **Tally Column:** Shows gap to the car ahead, Gold/Silver/Bronze for the current Top 3
    * **Bonus/Penalty (BP) Column:** Summarizes all bonuses and penalties; green for positive BPs, vice versa for red
    * **Pitstop (PS) Column:** Red for 2+ pitstops indicating Excess Pits danger
2. **Drivers Table:** Ordered from the highest current Total Points
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Constructor Banner Column:** No merging
    * **Driver Name Column**
    * **Sprint Point (SP) Column:** Indicates Sprint Points to be allocated at the first FSC of the race
    * **Projected Point (PP) Column:** Indicates Race and Fastest Lap Points to be allocated at the end of the race
    * **Total Point (TP) Column:** Sums SP and PP columns, Gold/Silver/Bronze for the current Top 3
3. **Constructors Table:** Ordered from the highest sum of current Total Points from all drivers
    * **Position Column:** Green if your team gained position on the lap, vice versa for red
    * **Constructor Banner Column**
    * **Constructor Name Column**
    * **Sprint Point (SP) Column**
    * **Projected Point (PP) Column**
    * **Total Point (TP) Column:** Gold for the current leader