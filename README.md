# F1 Mode v0-concept.0.0

## I. Setup
* **Grid:** 10–20 players in teams of 2 playing separately
* **Format:** 1 annual season @ 20 rounds (races) @ 51-70 songs (laps) @ 20 seconds ≈ 60-75 minutes
* **Difficulty:** Applied if rolled as the first Roll 2
    * **Dry:** 60-100 Random
    * 🟢 **Intermediate (I):** 50-80 Random
    * 🔵 **Wet (W):** 40-60 Random

## II. Time
Your goal is to have the lowest **Tally** at the end of the race to accumulate the most **Points**
1.  **Raw Time:**
    * **Correct Answer:** Actual time taken to answer
    * **Wrong/No Answer:** Clean Time of 25s
2.  **Clean Time:**
    * Raw Time - Bonuses + Penalties for a Correct Answer or 25s for a Wrong Answer/No Answer/Pitstop
    * **Bounds:** Cannot be lower than **1s** or higher than **25s**
    * **Tally:** The clamped Clean Time is then added to your cumulative **Tally** each lap
    * **Safety Cars:** Virtual/Full Safety Car is then applied against the **Tally**

## III. Pitstops and Tyres
Pitting can be done manually during Dry weather or automatically during weather changes
1. **Pitstops:**
    * **How To:** Type `/f1 pit soft`, `/f1 pit medium`, or `/f1 pit hard` as your answer
    * **Penalty:** Pitting counts as a Clean Time of **25s**
    * **Limit:** 3 uses per race. While you may pit for the 4th time and/or more, doing so causes **Excess Pits** that treats your next Correct Answer as a Wrong/No Answer. Automatic pits during weather changes still count towards the Limit
    * **Double Stack:** If teammates pit on the same lap and the trailing driver is less than 5s behind their teammate, they suffer a 5s penalty on their next Correct Answer
2. **Tyres:** Once `Age > Life`, `Penalty = Age - Life` for each lap thereafter
    * 🟠 **Neutral (N)**
        * **Role:** Default starting compound
        * **Life:** 10 laps
        * **Bonus:** None
    * 🔴 **Soft (S)**
        * **Role:** Speed
        * **Life:** 20 laps
        * **Bonus:** **2s** on **Laps 1-10** of stint
    * 🟡 **Medium (M)**
        * **Role:** Balance
        * **Life:** 30 laps
        * **Bonus:** **2s** on **Laps 1-5**, **1s** on **Laps 6-15** of stint
    * ⚪ **Hard (H)**
        * **Role:** Endurance
        * **Life:** 40 laps
        * **Bonus:** **1s** on **Laps 1-20** of stint

## IV. Weather
Before each race, the Script will roll a D20 four times to determine conditions. Rolls 2-4 will be repeated as long as Roll 3 does not go to the end of the race, but the first Roll 2 determines the difficulty for the entire race. When the weather changes, everyone is automatically pitted for the correct tyres (🟠 Neutral (N) for Dry). Tyre bonus/penalty mechanics are disabled during 🟢 Intermediate (I) or 🔵 Wet (W) weather, while FSC is triggered if the weather changed for the worse (from Dry or 🟢 Intermediate (I) to 🔵 Wet (W), or from Dry to 🟢 Intermediate (I)).
1. **Roll 1 (Race Length):** Add roll value to base value of 50 laps, visible to players
1. **Roll 2 (Weather Type):** Visible to players:
    * If done before the start of the race and/or if the current weather is Dry:
        * **1-17:** Dry (60-100 Random if done before the start of the race)
        * **18-19:** 🟢 Intermediate (I: 50-80 Random)
        * **20:** 🔵 Wet (W: 40-60 Random)
    * If the current weather is 🟢 Intermediate (I):
        * **1-10:** Dry
        * **11-18:** 🟢 Intermediate (I)
        * **19-20:** 🔵 Wet (W)
    * If the current weather is 🔵 Wet (W):
        * **1-10:** 🟢 Intermediate (I)
        * **11-20:** 🔵 Wet (W)
2. **Roll 3 (Actual Duration):** Clamped between 10 and remaining laps, hidden from players
3. **Roll 4 (Forecasted Duration):** Clamped between 10 and actual duration, visible to players

## V. Events
* **Drag Reduction System (DRS):** Except on Lap 1 or under Virtual/Full Safety Car, gain a **1s bonus** for **each** of the following conditions:
    * Less than 1s behind anyone (Proximity DRS)
    * More than 25s behind the leader (Perennial DRS)
    * Directly behind the teammate (Teammate DRS)
* **Virtual Safety Car (VSC):** Triggered if everyone is **correct**. **Ignore the song** for everything except Tyre Age
* **Full Safety Car (FSC):** Triggered if everyone is **wrong** (Wrong/No Answers), or if the weather changed for the **worse** (from Dry or 🟢 Intermediate (I) to 🔵 Wet (W), or from Dry to 🟢 Intermediate (I)). **Reset the Tally** so that P2 is 0.5s behind P1, P3 is 0.5s behind P2, etc. The first race occurrence awards **Sprint Points**
* **Did Not Finish (DNF):** Triggered if a non-Lobby Host disconnected and could not return within **5 minutes**. They are out of the race, though they keep their Sprint Points and/or Fastest Lap points, if any
* **Red Flag:** Triggered if the **Lobby Host disconnected**. They must keep track of the newest Dashboard link after each lap, then award the following Race Points based on laps elapsed before the Red Flag. Fastest Lap and Sprint (if applicable) Points are not affected by the Red Flag.
<table>
    <thead>
        <tr>
            <th rowspan="2" style="text-align: center;">Position</th>
            <th colspan="5" style="text-align: center;">Laps</th>
        </tr>
        <tr>
            <th style="text-align: center;">1-10</th>
            <th style="text-align: center;">11-20</th>
            <th style="text-align: center;">21-30</th>
            <th style="text-align: center;">31-40</th>
            <th style="text-align: center;">41+</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">1</td>
            <td rowspan="10" style="text-align: center;">Restart<br>the race<br>in full</td>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">13</td>
            <td style="text-align: center;">19</td>
            <td rowspan="10" style="text-align: center;">Full<br>points<br>awarded</td>
        </tr>
        <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;">14</td>
        </tr>
        <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">12</td>
        </tr>
        <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">10</td>
        </tr>
        <tr>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">8</td>
        </tr>
        <tr>
            <td style="text-align: center;">6</td>
            <td rowspan="5" style="text-align: center;"></td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">6</td>
        </tr>
        <tr>
            <td style="text-align: center;">7</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">4</td>
        </tr>
        <tr>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">3</td>
        </tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">2</td>
        </tr>
        <tr>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">1</td>
        </tr>
    </tbody>
</table>

## VI. Points and Titles
1. **Points:**
    * **Sprint Points:** 8, 7, 6, 5, 4, 3, 2, and 1 point for the Top 8 at the last lap before the first FSC of the race
    * **Race Points:** 25, 18, 15, 12, 10, 8, 6, 4, 2, and 1 point for the Top 10 at the end of the race
    * **Fastest Lap Points:** 3, 2, and 1 point for the 3 unique drivers with the fastest single Correct Answer Raw Time
2. **Titles:** Only the best 10 (point-wise) results from each player/team count towards the **Titles** to be awarded at the end of the year
    * **World Driver's Champion (WDC):** Player with the most points at the end of the season
    * **World Constructor's Champion (WCC):** Team with the most combined points at the end of the season

## VII. Dashboard
After each lap, a Dashboard link will be posted in the lobby chat to show the race situation for the next lap. You are strongly recommended to install the [AMQ Chat Plus](https://github.com/kempanator/amq-scripts/blob/main/amqChatPlus.user.js) script through TamperMonkey, then enable `Load Media in Chat` and set `Auto Load Media` to `All` in `Settings > Graphics` to view the Dashboard
1. **Race Table:** Ordered from the lowest current Tally
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Constructor Identifier Column:** Two-letter abbreviation with team color, merged if teammates are next to each other indicating Teammate DRS bonus
    * **Driver Name Column**
    * **Tyre Column:** Fill color if `Age ≤ Life`, outline and text color if `Age > Life`. Age next to Identifier (e.g., `S11` for 11-lap-old Softs), underlined text if `Age ≤ Bonus Window`
        * 🟠 Neutral (N)
        * 🔴 Soft (S)
        * 🟡 Medium (M)
        * ⚪ Hard (H)
        * 🟢 Intermediate (I)
        * 🔵 Wet (W)
    * **Tally Column:** Shows gap to the car ahead, Gold/Silver/Bronze for the current Top 3
    * **Bonus/Penalty (BP) Column:** Summarizes all bonuses and penalties; green for positive BPs, vice versa for red
    * **Pitstop (PS) Column:** Red for 3+ pitstops indicating Excess Pits danger
    * **Fastest Lap (FL) Column:** Indicates points to be allocated to the 3 drivers with the fastest single Correct Answer Raw Time
2. **Drivers Table:** Ordered from the highest current Total Points
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Constructor Identifier Column:** No merging
    * **Driver Name Column**
    * **Sprint Point (SP) Column:** Indicates Sprint Points to be allocated at the first FSC of the race
    * **Projected Point (PP) Column:** Indicates Race and Fastest Lap Points to be allocated at the end of the race
    * **Total Point (TP) Column:** Sums SP and PP columns, Gold/Silver/Bronze for the current Top 3
3. **Constructors Table:** Ordered from the highest sum of current Total Points from both drivers
    * **Position Column:** Green if your team gained position(s) on the lap, vice versa for red
    * **Constructor Identifier Column**
    * **Constructor Name Column:** Full constructor name
    * **Sprint Point (SP) Column**
    * **Projected Point (PP) Column**
    * **Total Point (TP) Column**