interface Props {
    askedQuestion: {
        question: string;
        answer: string;
    }
}

const QuestionTile: React.FC<Props> = ({ askedQuestion }: Props): JSX.Element => {
    return (
        <div>
            <p className="question">{askedQuestion.question}</p>
            <p className="answer">{askedQuestion.answer}</p>
        </div>
    );
}

export default QuestionTile;