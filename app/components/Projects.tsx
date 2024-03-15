import ProjectTile from "./ProjectTile";
import projects from "../data/projects";

export default function Projects() {

    const projectTiles: JSX.Element[] = projects.map((project, index) => {
        return <ProjectTile project={project} key={index}/>
    })

    return (
        <div id="projects">
            <h2>Projects:</h2>
            {projectTiles}
        </div>
    );
}