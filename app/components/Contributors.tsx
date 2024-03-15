interface Contributor {
    link: string;
    name: string;
}

interface Props { 
    contributors: Contributor[]
}

const Contributors: React.FC<Props> = ({contributors}: Props): JSX.Element => {
    const contributorList: JSX.Element[] = contributors.map((contributor) => { 
        return <a href={contributor.link}>{contributor.name}</a>
    })
    return (
        <div>
            <p>Contributors:</p>
            {contributorList}
        </div>
    );
}

export default Contributors