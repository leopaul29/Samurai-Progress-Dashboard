/**
 * +----------------- Statistics 統計 --------------------------+
 * |  XP Progression Chart  (Line Chart)                        |
 * |  Gold Collected Over Time (Bar Chart)                      |
 * +------------------------------------------------------------+
 * |  Completion Rate: 75%                                       |
 * |  Active vs Completed missions (Pie Chart)                  |
 * +------------------------------------------------------------+
 * @constructor
 */

import { useTranslation } from "react-i18next";
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const xpData = [
    { day: "Mon", xp: 10 },
    { day: "Tue", xp: 25 },
    { day: "Wed", xp: 40 },
    { day: "Thu", xp: 70 },
    { day: "Fri", xp: 90 },
    { day: "Sat", xp: 120 },
    { day: "Sun", xp: 150 },
];

const goldData = [
    { day: "Mon", gold: 200 },
    { day: "Tue", gold: 150 },
    { day: "Wed", gold: 300 },
    { day: "Thu", gold: 250 },
    { day: "Fri", gold: 400 },
    { day: "Sat", gold: 100 },
    { day: "Sun", gold: 350 },
];

const badgeData = [
    { name: "Samurai", value: 3 },
    { name: "Ninja", value: 5 },
    { name: "Ronin", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export const Stats = () => {
    const { t } = useTranslation();

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>{t("stats")}</h1>

            {/* XP Progression Line */}
            <h3>XP Progression</h3>
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
            <h3>Gold Collected Over Time</h3>
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
            <h3>Badge Distribution</h3>
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
                            {badgeData.map((entry, index) => (
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
