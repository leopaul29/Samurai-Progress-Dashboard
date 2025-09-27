import {TabStrip, type TabStripSelectEventArguments, TabStripTab} from "@progress/kendo-react-layout";
import { useState } from "react";
import { Dashboard } from "../pages/Dashboard";
import { Missions } from "../pages/Missions";
import { Stats } from "../pages/Stats";
import { Shop } from "../pages/Shop";
import { Profile } from "../pages/Profile";

export const MainLayout = () => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    }
    const position = "top";
    const alignment = "stretched";

    return (
        <>
            <TabStrip selected={selected} onSelect={handleSelect} animation={true} tabPosition={position} tabAlignment={alignment}>
                <TabStripTab title="Dashboard">
                    {selected === 0 && <Dashboard />}
                </TabStripTab>
                <TabStripTab title="Missions">
                    {selected === 1 && <Missions />}
                </TabStripTab>
                <TabStripTab title="Stats">
                    {selected === 2 && <Stats />}
                </TabStripTab>
                <TabStripTab title="Shop">
                    {selected === 3 && <Shop />}
                </TabStripTab>
                <TabStripTab title="Profile">
                    {selected === 4 && <Profile />}
                </TabStripTab>
            </TabStrip>

        </>
    );
};
