interface Contributor {
    link: string;
    name: string;
}

interface Project {
    title: string;
    links: {
        repoLink: string;
        demoLink?: string;
    }
    details: string;
    contributors?: Contributor[];
}

const projects: Project[] = [
    {
        title: `Token Tracker`,
        links: {
            repoLink: `https://token-tracker-538e9f113be3.herokuapp.com/`,
            demoLink: `https://github.com/cornfrog/Token-Tracker`
        },
        details: `A website that allows users to track their favorite cryptocurrencies
        and retrieve news articles about those currencies. Utilizes websockets
        to relay real time crypto currency prices from Coinbase API and the got
        library to retrieve relevant news articles from the NewsAPI while using
        a PostgreSQL database to store users' data. Combines both React and
        custom CSS for the front end user experience.`
    },
    {
        title: `Better Builds`,
        links: {
            repoLink: `https://github.com/cornfrog/Token-Tracker`,
        },
        details: `A team project that utilized Git workflow, Peer Programming and Pull Requests.
        As well as, Trello to keep track of implemented as well as already added features.
        Users can post information about their PC builds and other users can leave comments
        about it.`,
        contributors: [
            {
                link: `https://github.com/dericholas`,
                name: `dericholas`
            },

            {
                link: `https://github.com/MarlonS419`,
                name: `MarlonS419`
            },
            {
                link: `https://github.com/fuzzyphantasm`,
                name: `fuzzyphantasm`
            }
        ]
    }
];

export default projects;