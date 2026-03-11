# F1 Mode v0-alpha-1.0

## I. Setup
1. **Grid:** 8-22 players in teams of 2 playing separately
2. **Format:** 1 annual season @ 20 weekly rounds @ 60 songs @ 5 seconds ≈ ~30 minutes
3. **Difficulty:** 40-100 Random

## II. Time
Your goal is to have the lowest **Tally** at the end of the race to accumulate the most **Points**
1. **Raw Time:** Actual time taken for a **Correct Answer**, 6 seconds otherwise
2. **Clean Time:** Raw Time - DRS Bonus. This is then added to your **Tally** after each non-VSC lap
3. **Tally:** If an FSC occurs, reset it so that P2 is 0.5s behind P1, P3 is 0.5s behind P2, etc

## III. Events
* **Drag Reduction System (DRS):** Except on Lap 1 or under VSC/FSC, gain a **1s bonus** for **each** of the following conditions:
    * Less than 1s behind anyone (Proximity DRS)
    * More than multiples of 20s behind the leader (Perennial DRS; up to more than 60s behind the leader for a 3s bonus)
    * Directly behind the teammate (Teammate DRS)
* **Virtual Safety Car (VSC):** Triggered if **everyone** is correct
* **Full Safety Car (FSC):** Triggered if **no one** is correct. The first occurrence in a race awards **Sprint Points** based on the **Tally** on the **last Green Flag lap** where applicable
* **Green Flag:** Normal racing
* **Did Not Finish (DNF):** Triggered if a **non-Lobby Host disconnected** and could not return within **5 minutes**. They are out of the race, though they keep their Sprint Points and/or Fastest Lap points where applicable
* **Red Flag:** Triggered if the **Lobby Host disconnected**. This awards the following Race Points based on **laps elapsed before the Red Flag**. Fastest Lap Points (and Sprint Points where applicable) remain **unaffected** by the Red Flag

    <table>
        <thead>
            <tr>
                <th rowspan="2" style="text-align: center;">Laps Elapsed</th>
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
                <th style="text-align: center;">9</th>
                <th style="text-align: center;">10</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align: center;"><b>1-10</b></td>
                <td colspan="10" style="text-align: center;">Restart the race</td>
            </tr>
            <tr>
                <td style="text-align: center;"><b>11-20</b></td>
                <td style="text-align: center;">6</td>
                <td style="text-align: center;">4</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
                <td colspan="6" style="text-align: center;"></td>
            </tr>
            <tr>
                <td style="text-align: center;"><b>21-30</b></td>
                <td style="text-align: center;">12</td>
                <td style="text-align: center;">10</td>
                <td style="text-align: center;">8</td>
                <td style="text-align: center;">6</td>
                <td style="text-align: center;">4</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
                <td colspan="3" style="text-align: center;"></td>
            </tr>
            <tr>
                <td style="text-align: center;"><b>31-40</b></td>
                <td style="text-align: center;">18</td>
                <td style="text-align: center;">15</td>
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
                <td style="text-align: center;"><b>41+</b></td>
                <td colspan="10" style="text-align: center;">Full points awarded</td>
            </tr>
        </tbody>
    </table>

## IV. Points and Titles
1. **Points:** Race, Sprint, and **Fastest Lap** points to be awarded to 3 unique drivers with the fastest **Raw Time**

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
                <th style="text-align: center;">9</th>
                <th style="text-align: center;">10</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align: center;"><b>Race</b></td>
                <td style="text-align: center;">25</td>
                <td style="text-align: center;">18</td>
                <td style="text-align: center;">15</td>
                <td style="text-align: center;">12</td>
                <td style="text-align: center;">10</td>
                <td style="text-align: center;">8</td>
                <td style="text-align: center;">6</td>
                <td style="text-align: center;">4</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
            </tr>
            <tr>
                <td style="text-align: center;"><b>Sprint</b></td>
                <td style="text-align: center;">8</td>
                <td style="text-align: center;">7</td>
                <td style="text-align: center;">6</td>
                <td style="text-align: center;">5</td>
                <td style="text-align: center;">4</td>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
                <td colspan="2" style="text-align: center;"></td>
            </tr>
            <tr>
                <td style="text-align: center;"><b>Fastest Lap</b></td>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">1</td>
                <td colspan="7" style="text-align: center;"></td>
            </tr>
        </tbody>
    </table>

2. **Titles:** Only the best 10 (point-wise) results from each player/team count towards the **Titles** to be awarded at the end of the year
    * **World Driver's Champion (WDC):** Player with the most points at the end of the season
    * **World Team's Champion (WTC):** Team with the most combined points at the end of the season

## V. Dashboard
After each lap, a [Dashboard](https://github.com/Frittutisna/F1-Mode/blob/main/Dashboard.png) link will be posted in the lobby chat to show the race situation for the next lap. You are strongly recommended to install the [AMQ Chat Plus](https://github.com/kempanator/amq-scripts/blob/main/amqChatPlus.user.js) script through TamperMonkey, then enable `Load Media in Chat` and set `Auto Load Media` to `All` in `Settings > Graphics` to view the Dashboard
1. **Race Table:** Ordered from the lowest current Tally. Thick white line(s) indicate Perennial DRS bonus
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Team Identifier Column:** Two-letter abbreviation with team color, merged for Teammate DRS bonus
    * **Driver Name Column**
    * **Tally Column:** Shows gap to the car ahead. Underlined for Proximity DRS, Gold/Silver/Bronze for the current Top 3
    * **DRS Bonus (DB) Column**
    * **Fastest Lap (FL) Column**
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