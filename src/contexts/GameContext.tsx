import {createContext, useState, useContext, type ReactNode} from "react";
import type {Badge, Item, Mission} from "../types/types.tsx";
import {badgeList} from "../assets/badges.tsx";

interface GameContextProviderProps {
    children: ReactNode;
}

interface GameState {
    level: number;
    xp: number;
    gold: number;
    badges: Badge[];
    items: Item[];
    completedMissions: Mission[];
    addXp: (amount: number) => void;
    addGold: (amount: number) => void;
    addBadge: (badge: Badge) => void;
    addItem: (item: Item) => void;
    addMission: (mission: Mission) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = ({ children }: GameContextProviderProps) => {
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [gold, setGold] = useState(500);
    const [badges, setBadges] = useState<Badge[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [completedMissions, setCompletedMissions] = useState<Mission[]>([]);

    const addXp = (amount: number) => {
        setXp(prev => {
            const newXp = prev + amount;
            if (newXp >= 100) {
                setLevel(l => l + 1);
                return newXp - 100;
            }
            return newXp;
        });
    };

    const addGold = (amount: number) => setGold(prev => prev + amount);
    const addBadge = (badge: Badge) => setBadges(prev => [...prev, badge]);
    const addItem = (item: Item) => {
        if(items.length === 0) addBadge(badgeList.filter(b => b.value === "first_item")[0]);
        if(items.length === 10) addBadge(badgeList.filter(b => b.value === "lot_of_item")[0]);
        if(items.length === 50) addBadge(badgeList.filter(b => b.value === "mountain_of_item")[0]);
        if(items.length === 100) addBadge(badgeList.filter(b => b.value === "giant_pile_of_item")[0]);

        setItems(prev => [...prev, item])
    };

    const addMission = (mission: Mission) => {
        if(completedMissions.length === 0) addBadge(badgeList.filter(b => b.value === "newbie")[0]);
        if(completedMissions.length === 10) addBadge(badgeList.filter(b => b.value === "apprentice")[0]);
        if(completedMissions.length === 20) addBadge(badgeList.filter(b => b.value === "journeyman")[0]);
        if(completedMissions.length === 30) addBadge(badgeList.filter(b => b.value === "master")[0]);
        if(completedMissions.length === 40) addBadge(badgeList.filter(b => b.value === "grandmaster")[0]);
        if(completedMissions.length === 50) addBadge(badgeList.filter(b => b.value === "legendary")[0]);

        setCompletedMissions(prev => [...prev, mission])
    };

    return (
        <GameContext.Provider value={{ level, xp, gold, badges, items, completedMissions, addXp, addGold, addBadge, addItem, addMission }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error("useGame must be used inside GameProvider");
    return ctx;
};
