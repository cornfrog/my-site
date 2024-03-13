export default function Achievements() {
    return (
        <div className="achieve-section">
            <h2 className="achieve-header">Achievements:</h2>
            <div className="achieves">
                <div className="achievement">
                    <div className="achieve-top">
                        <p className="achieve-title">Launch Academy</p>
                        <p className="achieve-time">2023-2024</p>
                    </div>
                    <div className="achieve-bottom">
                        <p>
                            At Launch, I utilized frameworks like React and Express to
                            integrate into self-made web applications, implemented Test
                            Driven Development methodologies, and collaborated with
                            cohort members on pair programming assignments, employing
                            Agile methodologies and Git workflow for seamless development
                        </p>
                    </div>
                </div>
                <div className="achievement">
                    <div className="achieve-top">
                        <p className="achieve-title">Wentworth Institute of Technology</p>
                        <p className="achieve-time">2016-2020</p>
                    </div>
                    <div className="achieve-bottom">
                        <p>
                            At Wentworth, I jumped straight into the world of software development,
                            getting my hands dirty with real projects. I tinkered with languages 
                            like Java, C, and C++, collaborating with classmates to build applications 
                            using SCRUM and Agile methods.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}