import ProjectTile from "./ProjectTile";
import projects from "../data/projects";

export default function Projects() {

    const projectTiles: JSX.Element[] = projects.map((project, index) => {
        return <ProjectTile project={project} key={index} />
    })

    return (
        <>
            <h2 className="section-header" id="projects">Projects:</h2>
            <div className="projects-section">
                {projectTiles}
            </div>
        </>
    );
}