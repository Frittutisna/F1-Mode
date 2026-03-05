# F1 Mode v0-concept.0.4

## I. Setup
1. **Grid:** 10–20 players in teams of 2 playing separately
2. **Format:** 1 annual season @ 20 rounds (races) @ ~50-70 songs (laps) @ 20 seconds ≈ ~60-75 minutes
3. **Difficulty:** Applied if rolled as the first Roll 1
    * **Dry:** 60-100 Random
    * 🟢 **Intermediate (I):** 50-100 Random
    * 🔵 **Wet (W):** 40-100 Random

## II. Time
Your goal is to have the lowest **Tally** at the end of the race to accumulate the most **Points**
1.  **Raw Time:**
    * **Correct Answer:** Actual time taken to answer
    * **Wrong Answer/No Answer/Pitstop:** See **Clean Time**
2.  **Clean Time:**
    * Raw Time - Bonuses + Penalties for a Correct Answer, 25s for a Wrong Answer/No Answer/Normal Pitstop, or 10s for a Pitstop under Virtual/Full Safety Car
    * **Bounds:** Cannot be lower than **1s** or higher than **25s**
    * **Tally:** The clamped Clean Time is then added to your cumulative **Tally** each lap
    * **Safety Cars:** Virtual/Full Safety Car is then applied against the **Tally**

## III. Pitstops and Tyres
Pitting can be done manually during Dry weather or automatically during weather changes
1. **Pitstops:**
    * **How To:** Enter `/f1 pit soft`, `/f1 pit medium`, or `/f1 pit hard` in the chat box. This overrules any answer you entered for that lap
    * **Penalty:** Pitting counts as a Clean Time of **25s** normally, or **10s** under Virtual/Full Safety Car
    * **Limit:** 3 uses per race. While you may pit for the 4th time and/or more, doing so causes **Excess Pits** that treats your next Correct Answer as a Wrong/No Answer. Automatic pits during weather changes still count towards the Limit
    * **Double Stack:** If teammates pit on the same lap and the trailing driver is right behind (e.g., P3-P4), they suffer a 5s penalty on their next Correct Answer (e.g., 5s for P4)
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
Before each race, the Script will roll a set of three D20s to determine conditions. These will be repeated as long as Roll 2 does not go to the end of the race, but the first Roll 1 determines the difficulty for the entire race. When the weather changes, everyone is automatically pitted for the correct tyres (🟠 Neutral (N) for Dry). Tyre bonus/penalty mechanics are disabled during 🟢 Intermediate (I) or 🔵 Wet (W) weather, while FSC is triggered if the weather worsened (from Dry or 🟢 Intermediate (I) to 🔵 Wet (W), or from Dry to 🟢 Intermediate (I))
1. **Roll 1 (Weather Type):** Visible to players:
<table>
    <thead>
        <tr>
            <th rowspan="2" style="text-align: center;"></th>
            <th style="text-align: center;">Weather<br>Profile</th>
            <th colspan="3" style="text-align: center;">Stable (0)</th>
            <th colspan="3" style="text-align: center;">Standard (1)</th>
            <th colspan="3" style="text-align: center;">Inclement (2)</th>
        </tr>
        <tr>
            <th style="text-align: center;">Current<br>Weather</th>
            <th style="text-align: center;">None<br>or Dry</th>
            <th style="text-align: center;">Intermediate</th>
            <th style="text-align: center;">Wet</th>
            <th style="text-align: center;">None<br>or Dry</th>
            <th style="text-align: center;">Intermediate</th>
            <th style="text-align: center;">Wet</th>
            <th style="text-align: center;">None<br>or Dry</th>
            <th style="text-align: center;">Intermediate</th>
            <th style="text-align: center;">Wet</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="20" style="text-align: center;">Roll 1</td>
            <td style="text-align: center;">1</td>
            <td rowspan="19" style="text-align: center;">Dry</td>
            <td rowspan="12" style="text-align: center;">Dry</td>
            <td rowspan="18" style="text-align: center;">Intermediate</td>
            <td rowspan="18" style="text-align: center;">Dry</td>
            <td rowspan="10" style="text-align: center;">Dry</td>
            <td rowspan="15" style="text-align: center;">Intermediate</td>
            <td rowspan="17" style="text-align: center;">Dry</td>
            <td rowspan="8" style="text-align: center;">Dry</td>
            <td rowspan="12" style="text-align: center;">Intermediate</td>
        </tr>
        <tr><td style="text-align: center;">2</td></tr>
        <tr><td style="text-align: center;">3</td></tr>
        <tr><td style="text-align: center;">4</td></tr>
        <tr><td style="text-align: center;">5</td></tr>
        <tr><td style="text-align: center;">6</td></tr>
        <tr><td style="text-align: center;">7</td></tr>
        <tr><td style="text-align: center;">8</td></tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td rowspan="11" style="text-align: center;">Intermediate</td>
        </tr>
        <tr><td style="text-align: center;">10</td></tr>
        <tr>
            <td style="text-align: center;">11</td>
            <td rowspan="9" style="text-align: center;">Intermediate</td>
        </tr>
        <tr><td style="text-align: center;">12</td></tr>
        <tr>
            <td style="text-align: center;">13</td>
            <td rowspan="7" style="text-align: center;">Intermediate</td>
            <td rowspan="8" style="text-align: center;">Wet</td>
        </tr>
        <tr><td style="text-align: center;">14</td></tr>
        <tr><td style="text-align: center;">15</td></tr>
        <tr>
            <td style="text-align: center;">16</td>
            <td rowspan="5" style="text-align: center;">Wet</td>
        </tr>
        <tr><td style="text-align: center;">17</td></tr>
        <tr>
            <td style="text-align: center;">18</td>
            <td rowspan="2" style="text-align: center;">Intermediate</td>
        </tr>
        <tr>
            <td style="text-align: center;">19</td>
            <td rowspan="2" style="text-align: center;">Wet</td>
            <td style="text-align: center;">Intermediate</td>
        </tr>
        <tr>
            <td style="text-align: center;">20</td>
            <td style="text-align: center;">Intermediate</td>
            <td style="text-align: center;">Wet</td>
            <td style="text-align: center;">Wet</td>
            <td style="text-align: center;">Wet</td>
            <td style="text-align: center;">Wet</td>
            <td style="text-align: center;">Wet</td>
        </tr>
    </tbody>
</table>

2. **Roll 2 (Actual Duration):** Clamped between 10 and remaining laps, hidden from players
3. **Roll 3 (Forecasted Duration):** Clamped between 10 and actual duration, visible to players

## V. Events
* **Drag Reduction System (DRS):** Except on Lap 1 or under Virtual/Full Safety Car, gain a **1s bonus** for **each** of the following conditions:
    * Less than 1s behind anyone (Proximity DRS)
    * More than multiples of 25s behind the leader (Perennial DRS; 75-100s behind the leader counts as 3s, etc)
    * Directly behind the teammate (Teammate DRS)
* **Virtual Safety Car (VSC):** Triggered if everyone is **correct**. **Ignore the song** for everything except Tyre Age and Pitstops. Roll a D20 each lap to exit VSC within 5 laps: 1-10 ends it, 20 upgrades it to an FSC
* **Full Safety Car (FSC):** Triggered if everyone is **wrong** (Wrong/No Answers), or if the weather changed for the **worse** (from Dry or 🟢 Intermediate (I) to 🔵 Wet (W), or from Dry to 🟢 Intermediate (I)). **Reset the Tally** so that P2 is 0.5s behind P1, P3 is 0.5s behind P2, etc. The first race occurrence awards **Sprint Points**. Roll a D20 each lap after the first FSC lap to exit FSC within 5 laps (including potential preceding VSC): 1-5 ends it
* **Did Not Finish (DNF):** Triggered if a **non-Lobby Host disconnected** and could not return within **5 minutes**. They are out of the race, though they keep their Sprint Points and/or Fastest Lap points, if any
* **Red Flag:** Triggered if the **Lobby Host disconnected**. They must keep track of the newest Dashboard link after each lap, then award the following Race Points based on laps elapsed before the Red Flag. Fastest Lap and Sprint (if applicable) Points are unaffected by the Red Flag
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
            <td rowspan="10" style="text-align: center;">Restart<br>the race<br>with the<br>remaining<br>laps</td>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">12</td>
            <td style="text-align: center;">18</td>
            <td rowspan="10" style="text-align: center;">Full<br>points<br>awarded</td>
        </tr>
        <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;">15</td>
        </tr>
        <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">12</td>
        </tr>
        <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">10</td>
        </tr>
        <tr>
            <td style="text-align: center;">5</td>
            <td rowspan="6" style="text-align: center;"></td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">8</td>
        </tr>
        <tr>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">6</td>
        </tr>
        <tr>
            <td style="text-align: center;">7</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4</td>
        </tr>
        <tr>
            <td style="text-align: center;">8</td>
            <td rowspan="3" style="text-align: center;"></td>
            <td style="text-align: center;">2</td>
        </tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td style="text-align: center;">1</td>
        </tr>
        <tr>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;"></td>
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
After each lap, a [Dashboard](https://github.com/Frittutisna/F1-Mode/blob/main/Dashboard.png) link will be posted in the lobby chat to show the race situation for the next lap. You are strongly recommended to install the [AMQ Chat Plus](https://github.com/kempanator/amq-scripts/blob/main/amqChatPlus.user.js) script through TamperMonkey, then enable `Load Media in Chat` and set `Auto Load Media` to `All` in `Settings > Graphics` to view the Dashboard
1. **Race Table:** Ordered from the lowest current Tally
    * **Position Column:** Green if you gained position(s) on the lap, vice versa for red
    * **Constructor Identifier Column:** Two-letter abbreviation with team color, merged for Teammate DRS bonus and Double Stack danger
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

## VIII. Calendar
This table shows the provisional calendar for the inaugural 2026 season. Preseason (PR) races don't count towards the standings, while Double (D) races double the points on offer
1. **Expected Roll Count (eRC):** Expected amount of 3-roll sets (including one done before race start) for each race
2. **Steady Race State (SRS):** Expected share of laps in each weather for each race
3. **Expected Weather Change (eWC):** Expected amount of weather changes for each race
4. **Expected Worsening Weather Change (eWWC):** Expected amount of worsening weather changes for each race, triggering FSC
<table>
    <thead>
        <tr>
            <th rowspan="2" style="text-align: center;">Round</th>
            <th rowspan="2" style="text-align: center;">Circuit</th>
            <th rowspan="2" style="text-align: center;">Date</th>
            <th rowspan="2" style="text-align: center;">Laps</th>
            <th rowspan="2" style="text-align: center;">Profile</th>
            <th rowspan="2" style="text-align: center;">eRC</th>
            <th colspan="3" style="text-align: center;">Steady Race State</th>
            <th rowspan="2" style="text-align: center;">eWC</th>
            <th rowspan="2" style="text-align: center;">eWWC</th>
        </tr>
        <tr>
            <th style="text-align: center;">Dry</th>
            <th style="text-align: center;">Intermediate</th>
            <th style="text-align: center;">Wet</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">PR1</td>
            <td style="text-align: center;">Albert Park</td>
            <td style="text-align: center;">260607</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5.05</td>
            <td style="text-align: center;">76.36%</td>
            <td style="text-align: center;">16.46%</td>
            <td style="text-align: center;">7.18%</td>
            <td style="text-align: center;">0.90</td>
            <td style="text-align: center;">0.34</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR2</td>
            <td style="text-align: center;">Shanghai</td>
            <td style="text-align: center;">260614</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.89</td>
            <td style="text-align: center;">76.31%</td>
            <td style="text-align: center;">16.48%</td>
            <td style="text-align: center;">7.21%</td>
            <td style="text-align: center;">0.87</td>
            <td style="text-align: center;">0.33</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR3</td>
            <td style="text-align: center;">Suzuka</td>
            <td style="text-align: center;">260621</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">4.65</td>
            <td style="text-align: center;">62.88%</td>
            <td style="text-align: center;">27.03%</td>
            <td style="text-align: center;">10.09%</td>
            <td style="text-align: center;">1.02</td>
            <td style="text-align: center;">0.39</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR4</td>
            <td style="text-align: center;">Sakhir</td>
            <td style="text-align: center;">260628</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">92.99%</td>
            <td style="text-align: center;">6.73%</td>
            <td style="text-align: center;">0.28%</td>
            <td style="text-align: center;">0.36</td>
            <td style="text-align: center;">0.20</td>
        </tr>
        <tr>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">Jeddah</td>
            <td style="text-align: center;">260705</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.42</td>
            <td style="text-align: center;">93.11%</td>
            <td style="text-align: center;">6.63%</td>
            <td style="text-align: center;">0.26%</td>
            <td style="text-align: center;">0.31</td>
            <td style="text-align: center;">0.17</td>
        </tr>
        <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">Miami</td>
            <td style="text-align: center;">260712</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">76.34%</td>
            <td style="text-align: center;">16.47%</td>
            <td style="text-align: center;">7.19%</td>
            <td style="text-align: center;">0.89</td>
            <td style="text-align: center;">0.33</td>
        </tr>
        <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">Montreal</td>
            <td style="text-align: center;">260719</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5.99</td>
            <td style="text-align: center;">76.62%</td>
            <td style="text-align: center;">16.35%</td>
            <td style="text-align: center;">7.03%</td>
            <td style="text-align: center;">1.10</td>
            <td style="text-align: center;">0.42</td>
        </tr>
        <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">Monte Carlo</td>
            <td style="text-align: center;">260726</td>
            <td style="text-align: center;">78</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">6.61</td>
            <td style="text-align: center;">63.98%</td>
            <td style="text-align: center;">26.63%</td>
            <td style="text-align: center;">9.39%</td>
            <td style="text-align: center;">1.54</td>
            <td style="text-align: center;">0.61</td>
        </tr>
        <tr>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">Barcelona</td>
            <td style="text-align: center;">260802</td>
            <td style="text-align: center;">66</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">5.67</td>
            <td style="text-align: center;">92.86%</td>
            <td style="text-align: center;">6.84%</td>
            <td style="text-align: center;">0.30%</td>
            <td style="text-align: center;">0.43</td>
            <td style="text-align: center;">0.23</td>
        </tr>
        <tr>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">Red Bull Ring</td>
            <td style="text-align: center;">260809</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">6.07</td>
            <td style="text-align: center;">92.80%</td>
            <td style="text-align: center;">6.89%</td>
            <td style="text-align: center;">0.31%</td>
            <td style="text-align: center;">0.47</td>
            <td style="text-align: center;">0.25</td>
        </tr>
        <tr>
            <td style="text-align: center;">7</td>
            <td style="text-align: center;">Silverstone</td>
            <td style="text-align: center;">260816</td>
            <td style="text-align: center;">52</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">4.58</td>
            <td style="text-align: center;">62.83%</td>
            <td style="text-align: center;">27.05%</td>
            <td style="text-align: center;">10.12%</td>
            <td style="text-align: center;">1.00</td>
            <td style="text-align: center;">0.38</td>
        </tr>
        <tr>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">Spa</td>
            <td style="text-align: center;">260823</td>
            <td style="text-align: center;">44</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">3.95</td>
            <td style="text-align: center;">62.32%</td>
            <td style="text-align: center;">27.19%</td>
            <td style="text-align: center;">10.49%</td>
            <td style="text-align: center;">0.83</td>
            <td style="text-align: center;">0.31</td>
        </tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td style="text-align: center;">Hungaroring</td>
            <td style="text-align: center;">260906</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5.99</td>
            <td style="text-align: center;">76.62%</td>
            <td style="text-align: center;">16.35%</td>
            <td style="text-align: center;">7.03%</td>
            <td style="text-align: center;">1.10</td>
            <td style="text-align: center;">0.42</td>
        </tr>
        <tr>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;">Zandvoort</td>
            <td style="text-align: center;">260913</td>
            <td style="text-align: center;">72</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">6.14</td>
            <td style="text-align: center;">76.65%</td>
            <td style="text-align: center;">16.33%</td>
            <td style="text-align: center;">7.01%</td>
            <td style="text-align: center;">1.13</td>
            <td style="text-align: center;">0.43</td>
        </tr>
        <tr>
            <td style="text-align: center;">11</td>
            <td style="text-align: center;">Monza</td>
            <td style="text-align: center;">260920</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.65</td>
            <td style="text-align: center;">76.23%</td>
            <td style="text-align: center;">16.51%</td>
            <td style="text-align: center;">7.26%</td>
            <td style="text-align: center;">0.82</td>
            <td style="text-align: center;">0.31</td>
        </tr>
        <tr>
            <td style="text-align: center;">12</td>
            <td style="text-align: center;">Madring</td>
            <td style="text-align: center;">260927</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">92.99%</td>
            <td style="text-align: center;">6.73%</td>
            <td style="text-align: center;">0.28%</td>
            <td style="text-align: center;">0.36</td>
            <td style="text-align: center;">0.20</td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D13</td>
            <td style="text-align: center;">Mandalika</td>
            <td style="text-align: center;">261005</td>
            <td style="text-align: center;">60</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">5.20</td>
            <td style="text-align: center;">63.24%</td>
            <td style="text-align: center;">26.92%</td>
            <td style="text-align: center;">9.84%</td>
            <td style="text-align: center;">1.17</td>
            <td style="text-align: center;">0.45</td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D14</td>
            <td style="text-align: center;">Marina Bay</td>
            <td style="text-align: center;">261011</td>
            <td style="text-align: center;">62</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">5.36</td>
            <td style="text-align: center;">63.34%</td>
            <td style="text-align: center;">26.88%</td>
            <td style="text-align: center;">9.78%</td>
            <td style="text-align: center;">1.21</td>
            <td style="text-align: center;">0.47</td>
        </tr>
        <tr>
            <td style="text-align: center;">15</td>
            <td style="text-align: center;">COTA</td>
            <td style="text-align: center;">261018</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.89</td>
            <td style="text-align: center;">76.31%</td>
            <td style="text-align: center;">16.48%</td>
            <td style="text-align: center;">7.21%</td>
            <td style="text-align: center;">0.87</td>
            <td style="text-align: center;">0.33</td>
        </tr>
        <tr>
            <td style="text-align: center;">16</td>
            <td style="text-align: center;">Mexico City</td>
            <td style="text-align: center;">261025</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">6.07</td>
            <td style="text-align: center;">92.80%</td>
            <td style="text-align: center;">6.89%</td>
            <td style="text-align: center;">0.31%</td>
            <td style="text-align: center;">0.47</td>
            <td style="text-align: center;">0.25</td>
        </tr>
        <tr>
            <td style="text-align: center;">17</td>
            <td style="text-align: center;">Interlagos</td>
            <td style="text-align: center;">261101</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">6.07</td>
            <td style="text-align: center;">63.72%</td>
            <td style="text-align: center;">26.74%</td>
            <td style="text-align: center;">9.54%</td>
            <td style="text-align: center;">1.40</td>
            <td style="text-align: center;">0.55</td>
        </tr>
        <tr>
            <td style="text-align: center;">18</td>
            <td style="text-align: center;">Las Vegas</td>
            <td style="text-align: center;">261108</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.42</td>
            <td style="text-align: center;">93.11%</td>
            <td style="text-align: center;">6.63%</td>
            <td style="text-align: center;">0.26%</td>
            <td style="text-align: center;">0.31</td>
            <td style="text-align: center;">0.17</td>
        </tr>
        <tr>
            <td style="text-align: center;">19</td>
            <td style="text-align: center;">Lusail</td>
            <td style="text-align: center;">261115</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">92.99%</td>
            <td style="text-align: center;">6.73%</td>
            <td style="text-align: center;">0.28%</td>
            <td style="text-align: center;">0.36</td>
            <td style="text-align: center;">0.20</td>
        </tr>
        <tr>
            <td style="text-align: center;">20</td>
            <td style="text-align: center;">Yas Marina</td>
            <td style="text-align: center;">261122</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">5.05</td>
            <td style="text-align: center;">92.97%</td>
            <td style="text-align: center;">6.74%</td>
            <td style="text-align: center;">0.28%</td>
            <td style="text-align: center;">0.37</td>
            <td style="text-align: center;">0.20</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th rowspan="2" style="text-align: center;">Round</th>
            <th rowspan="2" style="text-align: center;">Circuit</th>
            <th rowspan="2" style="text-align: center;">Date</th>
            <th rowspan="2" style="text-align: center;">Laps</th>
            <th rowspan="2" style="text-align: center;">Profile</th>
            <th rowspan="2" style="text-align: center;">eRC</th>
            <th colspan="6" style="text-align: center;">RC Probability</th>
        </tr>
        <tr>
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
            <td style="text-align: center;">PR1</td>
            <td style="text-align: center;">Albert Park</td>
            <td style="text-align: center;">260607</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5.05</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">8.87%</td>
            <td style="text-align: center;">66.86%</td>
            <td style="text-align: center;">24.27%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">PR2</td>
            <td style="text-align: center;">Shanghai</td>
            <td style="text-align: center;">260614</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.89</td>
            <td style="text-align: center;">0.01%</td>
            <td style="text-align: center;">15.63%</td>
            <td style="text-align: center;">71.39%</td>
            <td style="text-align: center;">12.97%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">PR3</td>
            <td style="text-align: center;">Suzuka</td>
            <td style="text-align: center;">260621</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">4.65</td>
            <td style="text-align: center;">1.50%</td>
            <td style="text-align: center;">37.67%</td>
            <td style="text-align: center;">54.58%</td>
            <td style="text-align: center;">6.25%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">PR4</td>
            <td style="text-align: center;">Sakhir</td>
            <td style="text-align: center;">260628</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">11.91%</td>
            <td style="text-align: center;">69.57%</td>
            <td style="text-align: center;">18.52%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">Jeddah</td>
            <td style="text-align: center;">260705</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.42</td>
            <td style="text-align: center;">3.73%</td>
            <td style="text-align: center;">51.85%</td>
            <td style="text-align: center;">44.43%</td>
            <td colspan="3" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">Miami</td>
            <td style="text-align: center;">260712</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">11.91%</td>
            <td style="text-align: center;">69.57%</td>
            <td style="text-align: center;">18.52%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">Montreal</td>
            <td style="text-align: center;">260719</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5.99</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">15.01%</td>
            <td style="text-align: center;">71.07%</td>
            <td style="text-align: center;">13.92%</td>
            <td style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">Monte Carlo</td>
            <td style="text-align: center;">260726</td>
            <td style="text-align: center;">78</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">6.61</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">0.73%</td>
            <td style="text-align: center;">40.70%</td>
            <td style="text-align: center;">56.65%</td>
            <td style="text-align: center;">1.92%</td>
        </tr>
        <tr>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">Barcelona</td>
            <td style="text-align: center;">260802</td>
            <td style="text-align: center;">66</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">5.67</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.14%</td>
            <td style="text-align: center;">35.85%</td>
            <td style="text-align: center;">60.10%</td>
            <td style="text-align: center;">3.91%</td>
            <td style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">Red Bull Ring</td>
            <td style="text-align: center;">260809</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">6.07</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">10.97%</td>
            <td style="text-align: center;">72.03%</td>
            <td style="text-align: center;">17.00%</td>
            <td style="text-align: center;">0.00%</td>
        </tr>
        <tr>
            <td style="text-align: center;">7</td>
            <td style="text-align: center;">Silverstone</td>
            <td style="text-align: center;">260816</td>
            <td style="text-align: center;">52</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">4.58</td>
            <td style="text-align: center;">2.03%</td>
            <td style="text-align: center;">41.84%</td>
            <td style="text-align: center;">51.44%</td>
            <td style="text-align: center;">4.69%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">Spa</td>
            <td style="text-align: center;">260823</td>
            <td style="text-align: center;">44</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">3.95</td>
            <td style="text-align: center;">19.46%</td>
            <td style="text-align: center;">65.64%</td>
            <td style="text-align: center;">14.90%</td>
            <td colspan="3" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td style="text-align: center;">Hungaroring</td>
            <td style="text-align: center;">260906</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">5.99</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">15.01%</td>
            <td style="text-align: center;">71.07%</td>
            <td style="text-align: center;">13.92%</td>
            <td style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;">Zandvoort</td>
            <td style="text-align: center;">260913</td>
            <td style="text-align: center;">72</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">6.14</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">7.82%</td>
            <td style="text-align: center;">71.69%</td>
            <td style="text-align: center;">20.49%</td>
            <td style="text-align: center;">0.00%</td>
        </tr>
        <tr>
            <td style="text-align: center;">11</td>
            <td style="text-align: center;">Monza</td>
            <td style="text-align: center;">260920</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.65</td>
            <td style="text-align: center;">1.50%</td>
            <td style="text-align: center;">37.67%</td>
            <td style="text-align: center;">54.58%</td>
            <td style="text-align: center;">6.25%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">12</td>
            <td style="text-align: center;">Madring</td>
            <td style="text-align: center;">260927</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">11.91%</td>
            <td style="text-align: center;">69.57%</td>
            <td style="text-align: center;">18.52%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D13</td>
            <td style="text-align: center;">Mandalika</td>
            <td style="text-align: center;">261005</td>
            <td style="text-align: center;">60</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">5.20</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">4.61%</td>
            <td style="text-align: center;">60.20%</td>
            <td style="text-align: center;">35.19%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D14</td>
            <td style="text-align: center;">Marina Bay</td>
            <td style="text-align: center;">261011</td>
            <td style="text-align: center;">62</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">5.36</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">1.97%</td>
            <td style="text-align: center;">50.84%</td>
            <td style="text-align: center;">47.19%</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">15</td>
            <td style="text-align: center;">COTA</td>
            <td style="text-align: center;">261018</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">4.89</td>
            <td style="text-align: center;">0.01%</td>
            <td style="text-align: center;">15.63%</td>
            <td style="text-align: center;">71.39%</td>
            <td style="text-align: center;">12.97%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">16</td>
            <td style="text-align: center;">Mexico City</td>
            <td style="text-align: center;">261025</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">6.07</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">10.97%</td>
            <td style="text-align: center;">72.03%</td>
            <td style="text-align: center;">17.00%</td>
            <td style="text-align: center;">0.00%</td>
        </tr>
        <tr>
            <td style="text-align: center;">17</td>
            <td style="text-align: center;">Interlagos</td>
            <td style="text-align: center;">261101</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">6.07</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">10.97%</td>
            <td style="text-align: center;">72.03%</td>
            <td style="text-align: center;">17.00%</td>
            <td style="text-align: center;">0.00%</td>
        </tr>
        <tr>
            <td style="text-align: center;">18</td>
            <td style="text-align: center;">Las Vegas</td>
            <td style="text-align: center;">261108</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.42</td>
            <td style="text-align: center;">3.73%</td>
            <td style="text-align: center;">51.85%</td>
            <td style="text-align: center;">44.43%</td>
            <td colspan="3" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">19</td>
            <td style="text-align: center;">Lusail</td>
            <td style="text-align: center;">261115</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">4.97</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">11.91%</td>
            <td style="text-align: center;">69.57%</td>
            <td style="text-align: center;">18.52%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
        <tr>
            <td style="text-align: center;">20</td>
            <td style="text-align: center;">Yas Marina</td>
            <td style="text-align: center;">261122</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">5.05</td>
            <td style="text-align: center;">0.00%</td>
            <td style="text-align: center;">8.87%</td>
            <td style="text-align: center;">66.86%</td>
            <td style="text-align: center;">24.27%</td>
            <td colspan="2" style="text-align: center;"></td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th rowspan="2" style="text-align: center;">Round</th>
            <th rowspan="2" style="text-align: center;">Circuit</th>
            <th rowspan="2" style="text-align: center;">Date</th>
            <th rowspan="2" style="text-align: center;">Laps</th>
            <th rowspan="2" style="text-align: center;">Profile</th>
            <th rowspan="2" style="text-align: center;">eWC</th>
            <th colspan="3" style="text-align: center;">WC Probability</th>
        </tr>
        <tr>
            <th style="text-align: center;">0</th>
            <th style="text-align: center;">1</th>
            <th style="text-align: center;">2+</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">PR1</td>
            <td style="text-align: center;">Albert Park</td>
            <td style="text-align: center;">260607</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.90</td>
            <td style="text-align: center;">40.66%</td>
            <td style="text-align: center;">36.59%</td>
            <td style="text-align: center;">22.75%</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR2</td>
            <td style="text-align: center;">Shanghai</td>
            <td style="text-align: center;">260614</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.87</td>
            <td style="text-align: center;">41.90%</td>
            <td style="text-align: center;">36.45%</td>
            <td style="text-align: center;">21.65%</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR3</td>
            <td style="text-align: center;">Suzuka</td>
            <td style="text-align: center;">260621</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">1.02</td>
            <td style="text-align: center;">36.06%</td>
            <td style="text-align: center;">36.78%</td>
            <td style="text-align: center;">27.16%</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR4</td>
            <td style="text-align: center;">Sakhir</td>
            <td style="text-align: center;">260628</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.36</td>
            <td style="text-align: center;">69.77%</td>
            <td style="text-align: center;">25.12%</td>
            <td style="text-align: center;">5.11%</td>
        </tr>
        <tr>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">Jeddah</td>
            <td style="text-align: center;">260705</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.31</td>
            <td style="text-align: center;">73.34%</td>
            <td style="text-align: center;">22.74%</td>
            <td style="text-align: center;">3.92%</td>
        </tr>
        <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">Miami</td>
            <td style="text-align: center;">260712</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.89</td>
            <td style="text-align: center;">41.07%</td>
            <td style="text-align: center;">36.55%</td>
            <td style="text-align: center;">22.38%</td>
        </tr>
        <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">Montreal</td>
            <td style="text-align: center;">260719</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">1.10</td>
            <td style="text-align: center;">33.29%</td>
            <td style="text-align: center;">36.62%</td>
            <td style="text-align: center;">30.09%</td>
        </tr>
        <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">Monte Carlo</td>
            <td style="text-align: center;">260726</td>
            <td style="text-align: center;">78</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">1.54</td>
            <td style="text-align: center;">21.44%</td>
            <td style="text-align: center;">33.01%</td>
            <td style="text-align: center;">45.55%</td>
        </tr>
        <tr>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">Barcelona</td>
            <td style="text-align: center;">260802</td>
            <td style="text-align: center;">66</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.43</td>
            <td style="text-align: center;">65.05%</td>
            <td style="text-align: center;">27.97%</td>
            <td style="text-align: center;">6.98%</td>
        </tr>
        <tr>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">Red Bull Ring</td>
            <td style="text-align: center;">260809</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.47</td>
            <td style="text-align: center;">62.50%</td>
            <td style="text-align: center;">29.38%</td>
            <td style="text-align: center;">8.12%</td>
        </tr>
        <tr>
            <td style="text-align: center;">7</td>
            <td style="text-align: center;">Silverstone</td>
            <td style="text-align: center;">260816</td>
            <td style="text-align: center;">52</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">1.00</td>
            <td style="text-align: center;">36.79%</td>
            <td style="text-align: center;">36.79%</td>
            <td style="text-align: center;">26.42%</td>
        </tr>
        <tr>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">Spa</td>
            <td style="text-align: center;">260823</td>
            <td style="text-align: center;">44</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.83</td>
            <td style="text-align: center;">43.60%</td>
            <td style="text-align: center;">36.19%</td>
            <td style="text-align: center;">20.21%</td>
        </tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td style="text-align: center;">Hungaroring</td>
            <td style="text-align: center;">260906</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">1.10</td>
            <td style="text-align: center;">33.29%</td>
            <td style="text-align: center;">36.62%</td>
            <td style="text-align: center;">30.09%</td>
        </tr>
        <tr>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;">Zandvoort</td>
            <td style="text-align: center;">260913</td>
            <td style="text-align: center;">72</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">1.13</td>
            <td style="text-align: center;">32.30%</td>
            <td style="text-align: center;">36.50%</td>
            <td style="text-align: center;">31.20%</td>
        </tr>
        <tr>
            <td style="text-align: center;">11</td>
            <td style="text-align: center;">Monza</td>
            <td style="text-align: center;">260920</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.82</td>
            <td style="text-align: center;">44.04%</td>
            <td style="text-align: center;">36.11%</td>
            <td style="text-align: center;">19.85%</td>
        </tr>
        <tr>
            <td style="text-align: center;">12</td>
            <td style="text-align: center;">Madring</td>
            <td style="text-align: center;">260927</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.36</td>
            <td style="text-align: center;">69.77%</td>
            <td style="text-align: center;">25.12%</td>
            <td style="text-align: center;">5.11%</td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D13</td>
            <td style="text-align: center;">Mandalika</td>
            <td style="text-align: center;">261005</td>
            <td style="text-align: center;">60</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">1.17</td>
            <td style="text-align: center;">31.04%</td>
            <td style="text-align: center;">36.31%</td>
            <td style="text-align: center;">32.65%</td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D14</td>
            <td style="text-align: center;">Marina Bay</td>
            <td style="text-align: center;">261011</td>
            <td style="text-align: center;">62</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">1.21</td>
            <td style="text-align: center;">29.82%</td>
            <td style="text-align: center;">36.08%</td>
            <td style="text-align: center;">34.10%</td>
        </tr>
        <tr>
            <td style="text-align: center;">15</td>
            <td style="text-align: center;">COTA</td>
            <td style="text-align: center;">261018</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.87</td>
            <td style="text-align: center;">41.90%</td>
            <td style="text-align: center;">36.45%</td>
            <td style="text-align: center;">21.65%</td>
        </tr>
        <tr>
            <td style="text-align: center;">16</td>
            <td style="text-align: center;">Mexico City</td>
            <td style="text-align: center;">261025</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.47</td>
            <td style="text-align: center;">62.50%</td>
            <td style="text-align: center;">29.38%</td>
            <td style="text-align: center;">8.12%</td>
        </tr>
        <tr>
            <td style="text-align: center;">17</td>
            <td style="text-align: center;">Interlagos</td>
            <td style="text-align: center;">261101</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">1.40</td>
            <td style="text-align: center;">24.66%</td>
            <td style="text-align: center;">34.52%</td>
            <td style="text-align: center;">40.82%</td>
        </tr>
        <tr>
            <td style="text-align: center;">18</td>
            <td style="text-align: center;">Las Vegas</td>
            <td style="text-align: center;">261108</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.31</td>
            <td style="text-align: center;">73.34%</td>
            <td style="text-align: center;">22.74%</td>
            <td style="text-align: center;">3.92%</td>
        </tr>
        <tr>
            <td style="text-align: center;">19</td>
            <td style="text-align: center;">Lusail</td>
            <td style="text-align: center;">261115</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.36</td>
            <td style="text-align: center;">69.77%</td>
            <td style="text-align: center;">25.12%</td>
            <td style="text-align: center;">5.11%</td>
        </tr>
        <tr>
            <td style="text-align: center;">20</td>
            <td style="text-align: center;">Yas Marina</td>
            <td style="text-align: center;">261122</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.37</td>
            <td style="text-align: center;">69.07%</td>
            <td style="text-align: center;">25.56%</td>
            <td style="text-align: center;">5.37%</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th rowspan="2" style="text-align: center;">Round</th>
            <th rowspan="2" style="text-align: center;">Circuit</th>
            <th rowspan="2" style="text-align: center;">Date</th>
            <th rowspan="2" style="text-align: center;">Laps</th>
            <th rowspan="2" style="text-align: center;">Profile</th>
            <th rowspan="2" style="text-align: center;">eWWC</th>
            <th colspan="3" style="text-align: center;">WWC Probability</th>
        </tr>
        <tr>
            <th style="text-align: center;">0</th>
            <th style="text-align: center;">1</th>
            <th style="text-align: center;">2+</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">PR1</td>
            <td style="text-align: center;">Albert Park</td>
            <td style="text-align: center;">260607</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.34</td>
            <td style="text-align: center;">71.18%</td>
            <td style="text-align: center;">24.20%</td>
            <td style="text-align: center;">4.62%</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR2</td>
            <td style="text-align: center;">Shanghai</td>
            <td style="text-align: center;">260614</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.33</td>
            <td style="text-align: center;">71.89%</td>
            <td style="text-align: center;">23.72%</td>
            <td style="text-align: center;">4.39%</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR3</td>
            <td style="text-align: center;">Suzuka</td>
            <td style="text-align: center;">260621</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.39</td>
            <td style="text-align: center;">67.71%</td>
            <td style="text-align: center;">26.41%</td>
            <td style="text-align: center;">5.88%</td>
        </tr>
        <tr>
            <td style="text-align: center;">PR4</td>
            <td style="text-align: center;">Sakhir</td>
            <td style="text-align: center;">260628</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.20</td>
            <td style="text-align: center;">81.87%</td>
            <td style="text-align: center;">16.37%</td>
            <td style="text-align: center;">1.76%</td>
        </tr>
        <tr>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">Jeddah</td>
            <td style="text-align: center;">260705</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.17</td>
            <td style="text-align: center;">84.37%</td>
            <td style="text-align: center;">14.34%</td>
            <td style="text-align: center;">1.29%</td>
        </tr>
        <tr>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">Miami</td>
            <td style="text-align: center;">260712</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.33</td>
            <td style="text-align: center;">71.89%</td>
            <td style="text-align: center;">23.72%</td>
            <td style="text-align: center;">4.39%</td>
        </tr>
        <tr>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">Montreal</td>
            <td style="text-align: center;">260719</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.42</td>
            <td style="text-align: center;">65.70%</td>
            <td style="text-align: center;">27.60%</td>
            <td style="text-align: center;">6.70%</td>
        </tr>
        <tr>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">Monte Carlo</td>
            <td style="text-align: center;">260726</td>
            <td style="text-align: center;">78</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.61</td>
            <td style="text-align: center;">54.34%</td>
            <td style="text-align: center;">33.14%</td>
            <td style="text-align: center;">12.52%</td>
        </tr>
        <tr>
            <td style="text-align: center;">5</td>
            <td style="text-align: center;">Barcelona</td>
            <td style="text-align: center;">260802</td>
            <td style="text-align: center;">66</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.23</td>
            <td style="text-align: center;">79.45%</td>
            <td style="text-align: center;">18.27%</td>
            <td style="text-align: center;">2.28%</td>
        </tr>
        <tr>
            <td style="text-align: center;">6</td>
            <td style="text-align: center;">Red Bull Ring</td>
            <td style="text-align: center;">260809</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.25</td>
            <td style="text-align: center;">77.88%</td>
            <td style="text-align: center;">19.47%</td>
            <td style="text-align: center;">2.65%</td>
        </tr>
        <tr>
            <td style="text-align: center;">7</td>
            <td style="text-align: center;">Silverstone</td>
            <td style="text-align: center;">260816</td>
            <td style="text-align: center;">52</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.38</td>
            <td style="text-align: center;">68.39%</td>
            <td style="text-align: center;">25.99%</td>
            <td style="text-align: center;">5.62%</td>
        </tr>
        <tr>
            <td style="text-align: center;">8</td>
            <td style="text-align: center;">Spa</td>
            <td style="text-align: center;">260823</td>
            <td style="text-align: center;">44</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.31</td>
            <td style="text-align: center;">73.34%</td>
            <td style="text-align: center;">22.74%</td>
            <td style="text-align: center;">3.92%</td>
        </tr>
        <tr>
            <td style="text-align: center;">9</td>
            <td style="text-align: center;">Hungaroring</td>
            <td style="text-align: center;">260906</td>
            <td style="text-align: center;">70</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.42</td>
            <td style="text-align: center;">65.70%</td>
            <td style="text-align: center;">27.60%</td>
            <td style="text-align: center;">6.70%</td>
        </tr>
        <tr>
            <td style="text-align: center;">10</td>
            <td style="text-align: center;">Zandvoort</td>
            <td style="text-align: center;">260913</td>
            <td style="text-align: center;">72</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.43</td>
            <td style="text-align: center;">65.05%</td>
            <td style="text-align: center;">27.97%</td>
            <td style="text-align: center;">6.98%</td>
        </tr>
        <tr>
            <td style="text-align: center;">11</td>
            <td style="text-align: center;">Monza</td>
            <td style="text-align: center;">260920</td>
            <td style="text-align: center;">53</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.31</td>
            <td style="text-align: center;">73.34%</td>
            <td style="text-align: center;">22.74%</td>
            <td style="text-align: center;">3.92%</td>
        </tr>
        <tr>
            <td style="text-align: center;">12</td>
            <td style="text-align: center;">Madring</td>
            <td style="text-align: center;">260927</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.20</td>
            <td style="text-align: center;">81.87%</td>
            <td style="text-align: center;">16.37%</td>
            <td style="text-align: center;">1.76%</td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D13</td>
            <td style="text-align: center;">Mandalika</td>
            <td style="text-align: center;">261005</td>
            <td style="text-align: center;">60</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.45</td>
            <td style="text-align: center;">63.76%</td>
            <td style="text-align: center;">28.69%</td>
            <td style="text-align: center;">7.55%</td>
        </tr>
        <tr style="font-weight: bold;">
            <td style="text-align: center;">D14</td>
            <td style="text-align: center;">Marina Bay</td>
            <td style="text-align: center;">261011</td>
            <td style="text-align: center;">62</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.47</td>
            <td style="text-align: center;">62.50%</td>
            <td style="text-align: center;">29.38%</td>
            <td style="text-align: center;">8.12%</td>
        </tr>
        <tr>
            <td style="text-align: center;">15</td>
            <td style="text-align: center;">COTA</td>
            <td style="text-align: center;">261018</td>
            <td style="text-align: center;">56</td>
            <td style="text-align: center;">1</td>
            <td style="text-align: center;">0.33</td>
            <td style="text-align: center;">71.89%</td>
            <td style="text-align: center;">23.72%</td>
            <td style="text-align: center;">4.39%</td>
        </tr>
        <tr>
            <td style="text-align: center;">16</td>
            <td style="text-align: center;">Mexico City</td>
            <td style="text-align: center;">261025</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.25</td>
            <td style="text-align: center;">77.88%</td>
            <td style="text-align: center;">19.47%</td>
            <td style="text-align: center;">2.65%</td>
        </tr>
        <tr>
            <td style="text-align: center;">17</td>
            <td style="text-align: center;">Interlagos</td>
            <td style="text-align: center;">261101</td>
            <td style="text-align: center;">71</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">0.55</td>
            <td style="text-align: center;">57.69%</td>
            <td style="text-align: center;">31.73%</td>
            <td style="text-align: center;">10.58%</td>
        </tr>
        <tr>
            <td style="text-align: center;">18</td>
            <td style="text-align: center;">Las Vegas</td>
            <td style="text-align: center;">261108</td>
            <td style="text-align: center;">50</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.17</td>
            <td style="text-align: center;">84.37%</td>
            <td style="text-align: center;">14.34%</td>
            <td style="text-align: center;">1.29%</td>
        </tr>
        <tr>
            <td style="text-align: center;">19</td>
            <td style="text-align: center;">Lusail</td>
            <td style="text-align: center;">261115</td>
            <td style="text-align: center;">57</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.20</td>
            <td style="text-align: center;">81.87%</td>
            <td style="text-align: center;">16.37%</td>
            <td style="text-align: center;">1.76%</td>
        </tr>
        <tr>
            <td style="text-align: center;">20</td>
            <td style="text-align: center;">Yas Marina</td>
            <td style="text-align: center;">261122</td>
            <td style="text-align: center;">58</td>
            <td style="text-align: center;">0</td>
            <td style="text-align: center;">0.20</td>
            <td style="text-align: center;">81.87%</td>
            <td style="text-align: center;">16.37%</td>
            <td style="text-align: center;">1.76%</td>
        </tr>
    </tbody>
</table>