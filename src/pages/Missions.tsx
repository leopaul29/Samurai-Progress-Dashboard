/**
 * +---------------- Missions 任務 -----------------------------+
 * | Title       | Deadline      | Reward | Status   | Action    |
 * |------------------------------------------------------------|
 * | 寺を訪問する | 2025-10-02   | 💰 200 | Ongoing  | [完了/Done]|
 * | 読書する     | 2025-10-05   | 💰 100 | Pending  | [完了/Done]|
 * | コード書く   | 2025-10-10   | 💰 300 | Ongoing  | [完了/Done]|
 * +------------------------------------------------------------+
 * [+ Add Mission] (opens Dialog)
 * @constructor
 */
import {MissionList} from "../components/MissionList.tsx";
import type {Mission} from "../types/types.tsx";
import {useState} from "react";
import {missions} from "../assets/missions.ts";

export const Missions = () => {
    const [data, setData] = useState<Array<Mission>>(missions);

    const handleAddMission = ()=> {
        const newMission: Mission = {
            id: Date.now(),
            title: "New Mission",
            deadline: new Date().toISOString().split('T')[0],
            reward: 25,
            status: false
        };
        setData(prev => [...prev, newMission]);    }

    const handleUpdateMission = (updatedMissions: Mission[]) => {
        setData(updatedMissions);
        console.log("Missions updated:", updatedMissions);
    };

    return(
        <>
            <MissionList
                missions={data}
                handleAddMission={handleAddMission}
                handleUpdateMission={handleUpdateMission}
            />
        </>
    )
}