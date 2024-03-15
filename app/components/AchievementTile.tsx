interface Props {
    achievement : {
        location: string;
        timeFrame: string;
        details: string;
    }
}

const AchievementTile: React.FC<Props> = ({achievement}: Props): JSX.Element => {
    return (
        <div>
            <p>{achievement.location}</p>
            <p>{achievement.timeFrame}</p>
            <p>{achievement.details}</p>
        </div>
    );
} 

export default AchievementTile;