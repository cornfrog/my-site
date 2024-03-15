import achievements from "../data/achievements";
import AchievementTile from "./AchievementTile";
export default function Achievements() {

    const achievementTiles: JSX.Element[] = achievements.map((achievement, index) => {
        return <AchievementTile achievement={achievement} key={index} />
    })

    return (
        <>
            <h2 className="section-header" id="achievements">Achievements:</h2>
            <div className="achievements-section">
                {achievementTiles}
            </div>
        </>
    );
}