export interface Contributor {
    link: string;
    name: string;
}

export interface Project {
    title: string;
    links: {
        repoLink: string;
        demoLink?: string;
    }
    details: string;
    contributors?: Contributor[];
}

export interface Achievement {
    location: string;
    timeFrame: string;
    details: string;
}

export interface Question {
    question: string;
    answer: string;
}