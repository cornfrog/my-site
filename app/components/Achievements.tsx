import achievements from "../data/achievements";
import AchievementTile from "./AchievementTile";
export default function Achievements() {

    const achievementTiles: JSX.Element[] = achievements.map((achievement, index) => {
        return <AchievementTile achievement={achievement} key={index} />
    })

    return (
        <div id="achievements">
            <h2>Achievements:</h2>
            {achievementTiles}
        </div>
    );
}