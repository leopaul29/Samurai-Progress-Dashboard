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
import {DashboardContent} from "../components/DashboardContent.tsx";

export const Dashboard = () => {
    return(
        <>
            <div>Badges: <div> [🌸 Sakura Slayer] [🏯 Castle Explorer]</div></div>

            <DashboardContent/>
        </>
    )}