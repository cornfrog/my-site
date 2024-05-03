export default function Resume() {
    return (
        <div className="page resume">
            <h1 className="resume__header">Resume</h1>
            <a href="/Corey_Pierce-Resume.pdf" download="Corey_Pierce-Resume.pdf" className="resume__download-resume">
                <img src="download-img.svg" alt="download-img" className="resume__download-resume__img" />
                Download Resume
            </a>
            <div className="resume__embedded-resume">
                <object data="Corey_Pierce-Resume.pdf" type="application/pdf" className="resume__embedded-resume__view">
                    <p>PDF cannot be displayed. <a href="Corey_Pierce-Resume.pdf">Download</a> it instead.</p>
                </object>
            </div>
        </div>
    );
}