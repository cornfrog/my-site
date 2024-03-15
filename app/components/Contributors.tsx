import { Contributor } from "../globals"
interface Props {
    contributors: Contributor[]
}

const Contributors: React.FC<Props> = ({ contributors }: Props): JSX.Element => {
    const contributorList: JSX.Element[] = contributors.map((contributor, index) => {
        return <a href={contributor.link} key={index}>{contributor.name}</a>
    })
    return (
        <div>
            <p>Contributors:</p>
            {contributorList}
        </div>
    );
}

export default Contributors