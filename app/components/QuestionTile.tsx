interface Props {
    askedQuestion: {
        question: string;
        answer: string;
    }
}

const QuestionTile: React.FC<Props> = ({ askedQuestion }: Props): JSX.Element => {
    return (
        <div>
            <p>Question: {askedQuestion.question}</p>
            <p>Answer: {askedQuestion.answer}</p>
        </div>
    );
}

export default QuestionTile;