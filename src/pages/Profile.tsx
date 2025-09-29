import {useTranslation} from "react-i18next";
import {useGame} from "../contexts/GameContext.tsx";
import {Card, CardBody, CardHeader, CardTitle} from "@progress/kendo-react-layout";
import {ProgressBar} from "@progress/kendo-react-progressbars";
import {ChipList} from "@progress/kendo-react-buttons";

export const Profile = () => {
    const { t } = useTranslation();
    const { level, xp, gold, badges, items, completedMissions } = useGame();

    // Calculate XP progress to the next level
    const xpForNextLevel = level * 100;
    const xpProgress = (xp % 100) / 10; // Percentage for current level
    const xpRemaining = xpForNextLevel - (xp % 100);

    return (
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>

                {/* Player Info Card */}
                <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                    <CardHeader style={{ backgroundColor: "#007acc", color: "white" }}>
                        <CardTitle style={{ fontSize: "20px", fontWeight: "600" }}>
                            🎮 Player Info
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div style={{ paddingRight: "16px", paddingLeft: "16px", paddingBottom: "16px" }}>
                            <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#333" }}>
                                {t("profile.name")}
                            </h2>

                            <div style={{ marginBottom: "20px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                                        Level {level}
                                    </span>
                                    <span style={{ fontSize: "14px", color: "#666" }}>
                                        {xpRemaining} XP to next level
                                    </span>
                                </div>
                                <ProgressBar
                                    value={xpProgress}
                                    style={{ height: "20px" }}
                                    labelVisible={false}
                                />
                                <div style={{ textAlign: "center", marginTop: "4px", fontSize: "12px", color: "#666" }}>
                                    {xp % 100} / {xpForNextLevel} XP
                                </div>
                            </div>

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "12px",
                                marginTop: "16px"
                            }}>
                                <div style={{
                                    padding: "12px",
                                    backgroundColor: "#f0f8ff",
                                    borderRadius: "8px",
                                    textAlign: "center"
                                }}>
                                    <div style={{ fontSize: "14px", color: "#666" }}>Total XP</div>
                                    <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007acc" }}>
                                        ⭐ {xp}
                                    </div>
                                </div>
                                <div style={{
                                    padding: "12px",
                                    backgroundColor: "#fffaf0",
                                    borderRadius: "8px",
                                    textAlign: "center"
                                }}>
                                    <div style={{ fontSize: "14px", color: "#666" }}>Gold</div>
                                    <div style={{ fontSize: "24px", fontWeight: "bold", color: "#ffa500" }}>
                                        💰 {gold}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                {/* Badges Card */}
                <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
                    <CardHeader style={{ backgroundColor: "#ffa500", color: "white" }}>
                        <CardTitle style={{ fontSize: "20px", fontWeight: "600" }}>
                            🏆 Badges & Achievements
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div style={{ padding: "16px" }}>
                            {badges.length > 0 ? (
                                <ChipList defaultData={badges} />
                            ) : (
                                <div style={{
                                    textAlign: "center",
                                    padding: "40px",
                                    color: "#999",
                                    fontSize: "16px"
                                }}>
                                    No badges earned yet. Complete missions to earn badges! 🎯
                                </div>
                            )}
                        </div>
                    </CardBody>
                </Card>

                {/* Statistics Card */}
                <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)", gridColumn: "1 / -1" }}>
                    <CardHeader style={{ backgroundColor: "#28a745", color: "white" }}>
                        <CardTitle style={{ fontSize: "20px", fontWeight: "600" }}>
                            📊 Statistics
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div style={{
                            padding: "16px",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "16px"
                        }}>
                            <div style={{
                                padding: "20px",
                                backgroundColor: "#e8f5e9",
                                borderRadius: "8px",
                                textAlign: "center",
                                border: "2px solid #28a745"
                            }}>
                                <div style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
                                    Completed Missions
                                </div>
                                <div style={{ fontSize: "36px", fontWeight: "bold", color: "#28a745" }}>
                                    {completedMissions.length}
                                </div>
                            </div>

                            <div style={{
                                padding: "20px",
                                backgroundColor: "#fff3e0",
                                borderRadius: "8px",
                                textAlign: "center",
                                border: "2px solid #ffa500"
                            }}>
                                <div style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
                                    Items Owned
                                </div>
                                <div style={{ fontSize: "36px", fontWeight: "bold", color: "#ffa500" }}>
                                    {items.length}
                                </div>
                            </div>

                            <div style={{
                                padding: "20px",
                                backgroundColor: "#e3f2fd",
                                borderRadius: "8px",
                                textAlign: "center",
                                border: "2px solid #007acc"
                            }}>
                                <div style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
                                    Badges Earned
                                </div>
                                <div style={{ fontSize: "36px", fontWeight: "bold", color: "#007acc" }}>
                                    {badges.length}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}