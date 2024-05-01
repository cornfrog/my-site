export default function Projects() {
    return (
        <div className="page projects">
            <h1 className="projects__header">Projects</h1>
            <div className="projects__list">
                <div className="projects__list__tile">
                    <div className="projects__list__tile__name-and-links">
                        <p className="projects__list__tile__name-and-links__name">Pierce Prints</p>
                        <div className="projects__list__tile__name-and-links__links">
                            <a href="https://github.com/cornfrog/pierce-prints" className="projects__list__tile__name-and-links__links__link">
                                <img src="project-link-icons/github.svg" alt="demo-link" className="demo" />
                            </a>
                            <a href="https://pierceprints.vercel.app/" className="projects__list__tile__name-and-links__links__link">
                                <img src="project-link-icons/demo.svg" alt="demo-link" className="demo" />
                            </a>
                        </div>
                    </div>
                    <p className="projects__list__tile__description">
                        PiercePrints is a personal e-commerce platform tailored for the sale of my own 3D prints. Developed
                        with a focus on scalability and security, Pierce Prints utilizes a robust tech stack including Next.js,
                        React, Prisma, and Zod. User authentication is managed efficiently through Clerk, ensuring a safe and
                        personalized experience for every user. I am currently integrating the Stripe API into my application
                        to facilitate seamless online payment processing.
                    </p>
                    <div className="projects__list__tile__skills-used">
                        <img src="skills-images/react.svg" alt="react-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/typescript.svg" alt="typescript-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/sass.svg" alt="sass-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/postgresql.svg" alt="postgresql-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/nextjs.svg" alt="express-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/prisma.svg" alt="prisma-svg" className="projects__list__tile__skills-used__skill" />
                    </div>
                </div>
                <div className="projects__list__tile">
                    <div className="projects__list__tile__name-and-links">
                        <p className="projects__list__tile__name-and-links__name">Token Tracker</p>
                        <div className="projects__list__tile__name-and-links__links">
                            <a href="https://github.com/cornfrog/Token-Tracker" className="projects__list__tile__name-and-links__links__link">
                                <img src="project-link-icons/github.svg" alt="demo-link" className="demo" />
                            </a>
                        </div>
                    </div>
                    <p className="projects__list__tile__description">
                        A website that allows users to track their favorite cryptocurrencies
                        and retrieve news articles about those currencies. Utilizes websockets
                        to relay real time crypto currency prices from Coinbase API and the got
                        library to retrieve relevant news articles from the NewsAPI while using
                        a PostgreSQL database to store users&apos; data. Combines both React and custom
                        CSS for the front end user experience.
                    </p>
                    <div className="projects__list__tile__skills-used">
                        <img src="skills-images/react.svg" alt="react-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/javascript.svg" alt="javascript-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/sass.svg" alt="react-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/postgresql.svg" alt="postgresql-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/express.svg" alt="express-svg" className="projects__list__tile__skills-used__skill" />
                    </div>
                </div>
                <div className="projects__list__tile">
                    <div className="projects__list__tile__name-and-links">
                        <p className="projects__list__tile__name-and-links__name">Better Builds</p>
                        <div className="projects__list__tile__name-and-links__links">
                            <a href="https://github.com/MarlonS419/better-builds" className="projects__list__tile__name-and-links__links__link">
                                <img src="project-link-icons/github.svg" alt="demo-link" className="demo" />
                            </a>
                        </div>
                    </div>
                    <p className="projects__list__tile__description">
                        A team project that utilized Git workflow, Peer Programming and Pull Requests.
                        As well as, Trello to keep track of implemented as well as already added features.
                        Users can post information about their PC builds and other users can leave comments about it.
                    </p>
                    <div className="projects__list__tile__skills-used">
                        <img src="skills-images/react.svg" alt="react-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/javascript.svg" alt="javascript-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/sass.svg" alt="react-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/postgresql.svg" alt="postgresql-svg" className="projects__list__tile__skills-used__skill" />
                        <img src="skills-images/express.svg" alt="express-svg" className="projects__list__tile__skills-used__skill" />
                    </div>
                </div>

            </div>
        </div>
    );
}