export default function Resume() {
    return (
        <div className="page resume">
            <h1 className="resume__header">Resume</h1>
            <a href="/Corey_Pierce-Resume.pdf" download="Corey_Pierce-Resume.pdf" className="resume__download-resume">
                <img src="download-img.svg" alt="download-img" className="resume__download-resume__img" />
                Download Resume
            </a>
            <div className="resume__embedded-resume">
                <iframe src="Corey_Pierce-Resume.pdf" className="resume__embedded-resume__view">
                    This browser does not support PDFs. Please download the PDF to view it: <a href="Corey_Pierce-Resume.pdf">Download PDF</a>
                </iframe>
            </div>
        </div>
    );
}