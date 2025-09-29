import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import { useGame } from "../contexts/GameContext";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {ProgressBar} from "@progress/kendo-react-progressbars";
import type {Item} from "../types/types.tsx";

const xpData = [
    { day: "Mon", xp: 10 },
    { day: "Tue", xp: 25 },
    { day: "Wed", xp: 40 },
    { day: "Thu", xp: 70 },
    { day: "Fri", xp: 90 },
    { day: "Sat", xp: 120 },
    { day: "Sun", xp: 150 },
];

export const DashboardContent = () => {
    const { level, xp, gold, badges, items, completedMissions } = useGame();
    const recentPurchasesSorted:Item[] = items.reverse().slice(0, 3);
    const recentPurchasesDisplay = recentPurchasesSorted.map((item, index) => (
        <li key={index}>{item.name} (+{item.cost} Gold)</li>
    ))

    const recentMissionsSorted = completedMissions.reverse().slice(0, 3);
    const recentMissionsDisplay = recentMissionsSorted.map((mission, index) => (
        <li key={index}>{mission.title} (+{mission.reward} Gold)</li>
    ))

    // Calculate XP progress to the next level
    const xpForNextLevel = level * 100;
    const xpProgress = (xp % 100) / 10; // Percentage for current level

    return (
        <div style={{ padding: "2rem", display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
            {/* Quick Stats */}
            <Card>
                <CardHeader>Player Stats</CardHeader>
                <CardBody>
                    <p><strong>Level:</strong> {level}</p>
                    <ProgressBar
                        value={xpProgress}
                        style={{ height: "20px" }}
                        labelVisible={false}
                    />
                    <p><strong>XP:</strong>{xp % 100} / {xpForNextLevel} XP</p>
                    <p><strong>Gold:</strong> {gold}</p>
                    <p><strong>Badges:</strong> {badges.length}</p>
                </CardBody>
            </Card>

            {/* XP Progression */}
            <Card>
                <CardHeader>XP Progression</CardHeader>
                <CardBody style={{ height: "200px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={xpData}>
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="xp" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardBody>
            </Card>

            {/* Recent Missions */}
            <Card>
                <CardHeader>Recent Missions</CardHeader>
                <CardBody>
                    { recentMissionsSorted && recentMissionsSorted.length > 0 ? (
                        <ul>{recentMissionsDisplay}</ul>
                    ) : (
                        <p>No missions completed</p>
                    )}
                </CardBody>
            </Card>

            {/* Recent Purchases */}
            <Card>
                <CardHeader>Recent Purchases</CardHeader>
                <CardBody>
                    { recentPurchasesSorted && recentPurchasesSorted.length > 0 ? (
                        <ul>{recentPurchasesDisplay}</ul>
                    ) : (
                        <p>No recent purchases</p>
                    )
                    }
                </CardBody>
            </Card>
        </div>
    );
};
