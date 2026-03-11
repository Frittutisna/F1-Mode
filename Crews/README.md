# F1 Mode for Crews v0-alpha-1.0

## I. Setup
1. **Grid:** 8 players in teams of 4 playing separately
2. **Format:** 1 round @ 30 songs @ 5 seconds ≈ ~15 minutes
3. **Difficulty:** 40-100 Random

## II. Time
Your goal is to have the lowest **Tally** at the end of the race to accumulate the most **Points**
1. **Raw Time:** Actual time taken for a **Correct Answer**, 6 seconds otherwise
2. **Clean Time:** Raw Time - DRS Bonus. This is then added to your **Tally** after each non-VSC lap
3. **Tally:** If an FSC occurs, reset it so that P2 is 0.5s behind P1, P3 is 0.5s behind P2, etc

## III. Events
* **Drag Reduction System (DRS):** Except on Lap 1 or under VSC/FSC, gain a **1s bonus** for **each** of the following conditions:
    * Less than 1s behind anyone (Proximity DRS)
    * More than 20s behind the leader (Perennial DRS)
    * Directly behind a teammate (Teammate DRS)
* **Virtual Safety Car (VSC):** Triggered if **everyone** is correct
* **Full Safety Car (FSC):** Triggered if **no one** is correct. The first occurrence in a race awards **Sprint Points** based on the **Tally** on the **last Green Flag lap** where applicable
* **Green Flag:** Normal racing

## IV. Points and Victory
1. **Points:** Race, Sprint, and **Fastest Lap** point to be awarded to the driver with the fastest **Raw Time**

    <table>
        <thead>
            <tr>
                <th rowspan="2" style="text-align: center;">Points</th>
                <th colspan="10" style="text-align: center;">Position</th>
            </tr>
            <tr>
                <th style="text-align: center;">1</th>
                <th style="text-align: center;">2</th>
                <th style="text-align: center;">3</th>
                <th style="text-align: center;">4</th>
                <th style="text-align: center;">5</th>
                <th style="text-align: center;">6</th>
                <th style="text-align: center;">7</th>
                <th style="text-align: center;">8</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align: center;"><b>Race</b></td>
                <td style="text-align: center;">12</td>
                <td style="text-align: center;">10</td>
                <td style="text-align: center;">8</td>
                <td style="text-align: center;">6</td>
                <td style="text-align: center;">4</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;"></td>
            </tr>
            <tr>
                <td style="text-align: center;"><b>Sprint</b></td>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
                <td colspan="5" style="text-align: center;"></td>
            </tr>
        </tbody>
    </table>

2. **Victory:** The team with the most total points at the end of the race is the winner. If tied, the team with the race winner wins the round

## V. Dashboard
After each lap, a [Dashboard](https://github.com/Frittutisna/F1-Mode/blob/main/Crews/Dashboard.png) link will be posted in the lobby chat to show the race situation for the next lap. You are strongly recommended to install the [AMQ Chat Plus](https://github.com/kempanator/amq-scripts/blob/main/amqChatPlus.user.js) script through TamperMonkey, then enable `Load Media in Chat` and set `Auto Load Media` to `All` in `Settings > Graphics` to view the Dashboard
1. **Race Table:** Ordered from the lowest current Tally. Thick white line(s) indicate Perennial DRS bonus
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Team Identifier Column:** Merged for Teammate DRS bonus
    * **Driver Name Column**: Purple for the driver currently holding the Fastest Lap point
    * **Tally Column:** Shows gap to the car ahead. Underlined for Proximity DRS, Gold/Silver/Bronze for the current Top 3
    * **DRS Bonus (DB) Column**
2. **Drivers Table:** Ordered from the highest current Total Points
    * **Position Column**
    * **Team Identifier Column**
    * **Driver Name Column**
    * **Sprint Point (SP) Column** 
    * **Projected Point (PP) Column:** Sums Race and Fastest Lap Points
    * **Total Point (TP) Column:** Sums SP and PP
3. **Teams Table:** Ordered from the highest TP sum from both drivers
    * **Position Column**
    * **Team Identifier Column**
    * **Team Name Column**
    * **Sprint Point (SP) Column**
    * **Projected Point (PP) Column**
    * **Total Point (TP) Column**