interface Props {
    achievement : {
        location: string;
        timeFrame: string;
        details: string;
    }
}

const AchievementTile: React.FC<Props> = ({achievement}: Props): JSX.Element => {
    return (
        <div className="achievement">
            <p className="achievement-location">{achievement.location}</p>
            <p className="achievement-timeframe">{achievement.timeFrame}</p>
            <p className="achievement-details">{achievement.details}</p>
        </div>
    );
} 

export default AchievementTile;