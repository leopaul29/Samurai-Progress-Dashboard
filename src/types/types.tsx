export interface Mission {
    id: number,
    title: string,
    title_Jp: string,
    deadline: string,
    reward: number,
    status: boolean, // false = ongoing, true = done
}

export interface Item {
    id: number,
    name: string,
    nameJp: string,
    description: string,
    cost: number,
    xp: number
}

export interface Badge {
    id: number,
    text: string,
    value: string,
    disabled: boolean;
}