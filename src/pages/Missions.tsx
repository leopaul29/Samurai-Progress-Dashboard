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
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import {useState} from "react";

interface Mission {
    id: number,
    title: string,
    deadline: string,
    reward: string,
    status: string,
    action: string,
}

const missions: Mission[] = [
    {id: 1, title:"寺を訪問する",deadline: "2025-10-02", reward: "💰 200", status: "Ongoing", action: "完了/Done"},
    {id: 2, title:"読書する"    ,deadline: "2025-10-05"  , reward: "💰 100", status: "Pending", action: "完了/Done"},
    {id: 3, title:"コード書く"  ,deadline: "2025-10-10"   ,  reward: "💰 300", status: "Ongoing", action: "完了/Done"},
]

export const Missions = () => {
    const [data, setData] = useState<Array<Mission>>(missions);

    const grid = (
        <Grid data={data}>
            <Column field="id" title="ID" />
            <Column field="title" title="Title"/>
            <Column field="deadline" title="Deadline"/>
            <Column field="reward" title="Reward"/>
            <Column field="status" title="Status"/>
            <Column field="action" title="Action"/>
        </Grid>);
    return(
        <>
            {grid}
            <button>+ Add Mission</button>
        </>
    )
}