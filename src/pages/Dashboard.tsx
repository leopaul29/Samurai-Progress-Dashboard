/**
 * +------------------------------------------------------------+
 * | [Logo] Samurai Progress Dashboard           [Lang: 🇬🇧/🇯🇵] |
 * +------------------------------------------------------------+
 * |  XP: ████████▒▒▒▒▒▒ (Level 5)       Gold: 💰 1200          |
 * |  Badges: [🌸 Sakura Slayer] [🏯 Castle Explorer]           |
 * +------------------------------------------------------------+
 * | [MISSIONS]         | [STATS]             | [SHOP]          |
 * | Quick view:        | XP over time chart  | Recommended     |
 * | - 2 active quests  | Gold progression    | Item: Katana    |
 * | - 1 completed      | % completed tasks   | Price: 500      |
 * +------------------------------------------------------------+
 * @constructor
 */

export const Dashboard = () => {
    return(
        <>
            <div>
                <h1>Samurai Progress Dashboard</h1>
                <div>Lang: GB/JP</div>
            </div>
            <div>
                <div>XP: progressbard (level 5)</div>
                <div>Gold: 1200</div>
            </div>
            <div>Badges: <div>[🌸 Sakura Slayer] [🏯 Castle Explorer]</div></div>
            <div>
                <div>
                    <h2>Missions</h2>
                    Quick view:
                    <ul>
                        <li>2 active quests</li>
                        <li>1 completed</li>
                    </ul>
                </div>
                <div>
                    <h2>Stats</h2>
                    <ul>
                        <li>XP over time chart</li>
                        <li>Gold progression</li>
                        <li>% completed tasks</li>
                    </ul>
                </div>
                <div>
                    <h2>Shop</h2>
                    <ul>
                        <li>Recommended</li>
                        <li>Item: Katana</li>
                        <li>Price: 500</li>
                    </ul>
                </div>
            </div>
        </>
    )}