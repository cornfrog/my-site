import QuestionTile from "./QuestionTile";
import aboutMeQuestions from "../data/about-me-questions";

export default function FAQ() {
    const questionsTiles: JSX.Element[] = aboutMeQuestions.map((askedQuestion, index) => {
        return <QuestionTile askedQuestion={askedQuestion} key={index} />
    })

    return (
        <>
            <h2 className="section-header" id="about-questions">About Me:</h2>
            <div className="about-section">
                {questionsTiles}
            </div>
        </>
    );
}