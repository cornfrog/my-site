export default function Resume() {
    return (
        <div className="page resume">
            <h1 className="resume__header">Resume</h1>
            <div className="resume__embedded-resume">
                <embed src="Corey_Pierce-Resume.pdf#toolbar=0&zoom=100&view=FitH" className="resume__embedded-resume__view" />
            </div>
        </div>
    );
}