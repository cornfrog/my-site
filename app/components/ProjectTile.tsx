import Contributors from "./Contributors";
import { Contributor } from "../globals";
interface Props {
    project: {
        title: string;
        links: {
            repoLink: string;
            demoLink?: string;
        }
        details: string;
        contributors?: Contributor[];
    }
}

const ProjectTile: React.FC<Props> = ({ project }: Props) => {

    const demoLink: JSX.Element = <a href={project.links.demoLink} className="project-link">Demo Link</a>;

    const contributorsList: JSX.Element = <Contributors contributors={project.contributors!} />;

    return (
        <div className="project">
            <p className="project-title">{project.title}</p>
            <div className="project-links">
                <a href={project.links.repoLink} className="project-link">Repo Link</a>
                {project.links.demoLink === undefined ? '' : demoLink}
            </div>
            <p className="project-details">{project.details}</p>
            {project.contributors === undefined ? '' : contributorsList}
        </div>
    );
}

export default ProjectTile;