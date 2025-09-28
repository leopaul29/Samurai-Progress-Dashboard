import type {Mission} from "../types/types.tsx";

export const missions: Mission[] =[
  {id: 1, title:"寺を訪問する",deadline: "2025-10-02", reward: 200, status: false},
  {id: 2, title:"読書する"    ,deadline: "2025-10-05"  , reward: 100, status: true},
  {id: 3, title:"コード書く"  ,deadline: "2025-10-10"   ,  reward: 300, status: true},
]