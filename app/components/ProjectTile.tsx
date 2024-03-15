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

    const demoLink: JSX.Element = <a href={project.links.demoLink}>Demo Link</a>;

    const contributorsList: JSX.Element = <Contributors contributors={project.contributors!} />;

    return (
        <div>
            <p>{project.title}</p>
            <div>
                <a href={project.links.repoLink}>Repo Link</a>
                {project.links.demoLink === undefined ? '' : demoLink}
            </div>
            <p>{project.details}</p>
            {project.contributors === undefined ? '' : contributorsList}
        </div>
    );
}

export default ProjectTile;