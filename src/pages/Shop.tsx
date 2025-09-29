import {Grid, GridColumn as Column} from '@progress/kendo-react-grid';
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";
import {useState} from "react";
import {useGame} from "../contexts/GameContext.tsx";
import {Button} from "@progress/kendo-react-buttons";
import {ITEMS} from "../assets/shopitems.ts";
import type {Item} from "../types/types.tsx";
import {useTranslation} from "react-i18next";

export const Shop = () => {
    const { t } = useTranslation();
    const {gold, addGold, addItem} = useGame();
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const [notifications, setNotifications] = useState<{ message: string; id: number }[]>([]);

    const addNotification = (msg: string) => {
        const id = new Date().getTime();
        setNotifications(prev => [...prev, { message: msg, id }]);
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 3000);
    };

    const handleBuy = () => {
        if (!selectedItem) return;

        if (gold < selectedItem.cost) {
            addNotification("Not enough gold!");
            return;
        }

        addGold(-selectedItem.cost);
        addItem(selectedItem);
        addNotification(selectedItem.name + " purchased!");
    };

    const handleRowClick = (e: any) => {
        setSelectedItem(e.dataItem);
        console.log("Row clicked:", e.dataItem);
    };

    const grid = (
        <Grid
            data={ITEMS}
            onRowClick={handleRowClick}
            style={{ cursor: 'pointer' }}
        >
            {/*<Column field="id" title="ID" width="80px" />*/}
            <Column field={t("shop.obj.name")} title={t("shop.tab.name")} width="200px" />
            <Column field="description" title={t("shop.tab.description")} />
            <Column field="cost" title={t("shop.tab.cost")} width="120px" />
        </Grid>
    );

    return(
        <>
            <h2>{t("shop.menuName")} 🏪</h2>
            <p>{t("gold")}: 💰 {gold}</p>
            <p><em>Click on a row to select an item</em></p>

            {selectedItem && (
                <div style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    border: "2px solid #007acc",
                    borderRadius: "8px",
                }}>
                    <h3>Selected: {selectedItem.name}</h3>
                    <p>{selectedItem.description}</p>
                    <Button
                        themeColor="primary"
                        disabled={gold < selectedItem.cost}
                        onClick={handleBuy}
                    >
                        Buy for 💰 {selectedItem.cost} Gold
                    </Button>
                    {gold < selectedItem.cost && (
                        <p style={{ color: "red", marginTop: "0.5rem" }}>
                            Not enough gold! You need {selectedItem.cost - gold} more.
                        </p>
                    )}
                </div>
            )}

            <div style={{ marginTop: "1rem" }}>
                {grid}
            </div>

            <NotificationGroup style={{ right: 10, top: 10, position: "fixed" }}>
                {notifications.map(n => (
                    <Notification key={n.id} type={{ style: "success", icon: true }}>
                        <span>{n.message}</span>
                    </Notification>
                ))}
            </NotificationGroup>
        </>
    );
};