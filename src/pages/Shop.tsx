/**
 * +----------------- Shop 商店 --------------------------------+
 * |  Item          | Description      | Cost   | Action        |
 * |------------------------------------------------------------|
 * | Katana 🗡️      | Increase XP gain | 💰 500 | [Buy]         |
 * | Yukata 👘      | Style bonus      | 💰 300 | [Buy]         |
 * | Sakura Charm 🌸 | +Luck            | 💰 200 | [Buy]         |
 * +------------------------------------------------------------+
 * [Notification: “You bought Katana 🗡️ +XP!”]
 * @constructor
 */
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import {useState} from "react";

interface Item {
    id: number,
    name: string,
    description: string,
    cost: string,
    action: string,
}

const items: Item[] = [
    {id: 1, name: "Katana 🗡️", description: "Increase XP gain" ,cost:"💰 500" ,action:"Buy"},
    {id: 2, name: "Yukata 👘️", description: "Style bonus" ,cost:"💰 300" ,action:"Buy"},
    {id: 3, name: "Sakura Charm 🌸", description: "+Luck" ,cost:"💰 200" ,action:"Buy"}
]

export const Shop = () => {
    const [data, setData] = useState<Array<Item>>(items);

    const grid = (
        <Grid data={data}>
            <Column field="id" title="ID" />
            <Column field="name" title="Item"/>
            <Column field="description" title="Description"/>
            <Column field="cost" title="Cost"/>
            <Column field="action" title="Action"/>
        </Grid>);
    return(
        <>
            {grid}
        </>
)
}