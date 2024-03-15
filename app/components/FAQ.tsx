import QuestionTile from "./QuestionTile";
import aboutMeQuestions from "../data/about-me-questions";

export default function FAQ() {
    const questionsTiles: JSX.Element[] = aboutMeQuestions.map((askedQuestion, index) => {
        return <QuestionTile askedQuestion={askedQuestion} key={index} />
    })

    return (
        <>
            <div id="about-questions">
                <h2>About Me:</h2>
                {questionsTiles}
            </div>
        </>
    );
}