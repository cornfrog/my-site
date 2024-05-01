export default function Education() {
    return (
        <div className="page education">
            <h1 className="education__header">Education</h1>
            <div className="education__list">
                <div className="education__list__tile">
                    <div className="education__list__tile__info">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafi5STAD5O8HPqx-iCs4aAbNAIIAexlgrekHOy8gj6w&s" alt="wit-logo" className="education__list__tile__info__school-logo" />
                        <div className="education__list__tile__info__text">
                            <p className="education__list__tile__info__text__school-logo">Wentworth Institute of Technology</p>
                            <p className="education__list__tile__info__text__location-and-duration">Boston MA - 4 Years</p>
                            <p className="education__list__tile__info__text__degree"> Bachelor of Science, Major Computer Science</p>
                        </div>
                    </div>
                    <div className="education__list__tile__lessons">
                        <p className="education__list__tile__lessons__lesson">C</p>
                        <p className="education__list__tile__lessons__lesson">Java</p>
                        <p className="education__list__tile__lessons__lesson">Data Structures</p>
                        <p className="education__list__tile__lessons__lesson">Algorithms</p>
                        <p className="education__list__tile__lessons__lesson">Python</p>
                    </div>
                </div>
            </div>
        </div>
    );
}