import type {Mission} from "../types/types.tsx";

export const newMission: Mission = {
  id: Date.now(),
  title: "New Mission",
  title_Jp: "新しいミッション",
  deadline: new Date().toISOString().split('T')[0],
  reward: 25,
  status: false
};

export const MISSIONS: Mission[] = [
  {
    id: 1,
    title: "Learn 5 new Kanji",
    title_Jp: "漢字を5つ学ぶ",
    deadline: "2025-10-01",
    reward: 10,
    status: false,
  },
  {
    id: 2,
    title: "Visit Shibuya Crossing",
    title_Jp: "渋谷スクランブル交差点を訪れる",
    deadline: "2025-10-05",
    reward: 20,
    status: false,
  },
  {
    id: 3,
    title: "Eat Ramen in Ikebukuro",
    title_Jp: "池袋でラーメンを食べる",
    deadline: "2025-10-07",
    reward: 15,
    status: false,
  },
  {
    id: 4,
    title: "Practice Hiragana for 10 minutes",
    title_Jp: "ひらがなを10分練習する",
    deadline: "2025-09-28",
    reward: 8,
    status: false,
  },
  {
    id: 5,
    title: "Take a photo at Asakusa Temple",
    title_Jp: "浅草寺で写真を撮る",
    deadline: "2025-10-12",
    reward: 25,
    status: false,
  },
];
