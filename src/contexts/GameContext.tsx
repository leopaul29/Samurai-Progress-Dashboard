import {createContext, useState, useContext, type ReactNode} from "react";
import type {Item} from "../types/types.tsx";

interface GameContextProviderProps {
    children: ReactNode;
}

interface GameState {
    level: number;
    xp: number;
    gold: number;
    badges: string[];
    items: Item[];
    addXp: (amount: number) => void;
    addGold: (amount: number) => void;
    addBadge: (badge: string) => void;
    addItem: (item: Item) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = ({ children }: GameContextProviderProps) => {
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [gold, setGold] = useState(500);
    const [badges, setBadges] = useState<string[]>([]);
    const [items, setItems] = useState<Item[]>([]);

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
    const addBadge = (badge: string) => setBadges(prev => [...prev, badge]);
    const addItem = (item: Item) => setItems(prev => [...prev, item]);

    return (
        <GameContext.Provider value={{ level, xp, gold, badges, items, addXp, addGold, addBadge, addItem }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error("useGame must be used inside GameProvider");
    return ctx;
};
