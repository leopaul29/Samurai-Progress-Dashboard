import { useTranslation } from "react-i18next";
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import {badgeData, COLORS, goldData, xpData} from "../assets/stats.ts";

export const Stats = () => {
    const { t } = useTranslation();

    // @ts-ignore
    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>{t("stats.menuName")}</h1>

            {/* XP Progression Line */}
            <h3>{t("stats.xp_prog")}</h3>
            <div style={{ width: "100%", height: 300, marginBottom: "2rem" }}>
                <ResponsiveContainer>
                    <LineChart data={xpData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="xp" name={t("xp")} stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Gold per Day Bar */}
            <h3>{t("stats.gold_over_time")}</h3>
            <div style={{ width: "100%", height: 300, marginBottom: "2rem" }}>
                <ResponsiveContainer>
                    <BarChart data={goldData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="gold" name={t("gold")} fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Badge Distribution Pie */}
            <h3>{t("stats.badge_distribute")}</h3>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={badgeData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={(entry) => `${entry.name}: ${entry.value}`}
                            dataKey="value"
                            nameKey="name"
                        >
                            {badgeData.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
