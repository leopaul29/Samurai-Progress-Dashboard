import {
    Grid,
    GridColumn,
    type GridEditChangeEvent,
    type GridItemChangeEvent,
    GridToolbar
} from "@progress/kendo-react-grid";
import { useTranslation } from "react-i18next";
import {useState} from "react";
import type {EditDescriptor} from "@progress/kendo-react-data-tools";
import type {Mission} from "../types/types.tsx";
import {Button} from "@progress/kendo-react-buttons";
import {useGame} from "../contexts/GameContext.tsx";

export const MissionList = ({ missions, handleAddMission, handleUpdateMission  }:MissionListProps) => {
    const { t } = useTranslation();
    const {gold, addGold} = useGame();
    const [edit, setEdit] = useState<EditDescriptor>({});

    const handleItemChange = (event: GridItemChangeEvent) => {
        if (event.field === "status" && event.value === true) {
            const updated = missions.map((item) =>
                item.id === event.dataItem.id ? { ...item, [event.field!]: event.value } : item
            );

            addGold(event.dataItem.reward);

            // Update the parent component's state
            handleUpdateMission(updated);

            // Clear edit state
            setEdit({});
        }
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    return (
        <div>
            <h2>{t("missions")}</h2>
            <p>Gold: 💰 {gold}</p>
            <Grid
                data={missions}
                edit={edit}
                dataItemKey="id"
                editable={{ mode: 'incell' }}
                onEditChange={handleEditChange}
                onItemChange={handleItemChange}
            >
                <GridToolbar>
                    <Button title="Add Mission" type="button" onClick={handleAddMission}>
                        + Add Mission
                    </Button>
                </GridToolbar>
                <GridColumn field="title" title={t("mission.name")} editable={false} />
                <GridColumn field="deadline" title={t("deadline")} editable={false} />
                <GridColumn field="reward" title={t("gold")} editable={false} />
                <GridColumn field="status" title={t("complete")} editor="boolean" />
                {/*<Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" width="140px" />*/}
            </Grid>
        </div>
    );
};

interface MissionListProps {
    missions: Mission[];
    handleAddMission: () => void;
    handleUpdateMission: (updatedMissions: Mission[]) => void
}