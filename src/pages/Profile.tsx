/**
 * +---------------- Profile プロフィール -----------------------+
 * | Player: 山田太郎 (Taro Yamada)                             |
 * | Level: 5     XP: 1200   Gold: 💰 800                        |
 * +------------------------------------------------------------+
 * | Language: [ 🇬🇧 English ▼ ]                                |
 * | Theme:    [ 日 (Day) | 夜 (Night) ]                        |
 * +------------------------------------------------------------+
 * | Badges: [🌸] [🏯] [🐉]                                      |
 * +------------------------------------------------------------+
 * @constructor
 */

export const Profile = () => {
    return(
        <>
            <div>
                <h1>Player: 山田太郎 (Taro Yamada)</h1>
            </div>
            <div>Level: 5     XP: 1200   Gold: 💰 800</div>
            <div>Language: [ 🇬🇧 English ▼ ]</div>
            <div>Theme:    [ 日 (Day) | 夜 (Night) ]</div>
            <div>Badges: [🌸] [🏯] [🐉]</div>
        </>
    )
}