export default function Skills() {
    return (
        <div className="page skills">
            <h1 className="skills__header">Skills</h1>
            <div className="skills__skills-list">
                <div className="skills__skills-list__skill">
                    <div className="skills__skills-list__skill__header">
                        <div className="skills__skills-list__skill__header__line small"></div>
                        <p className="skills__skills-list__skill__header__text">Programming Languages</p>
                        <div className="skills__skills-list__skill__header__line long"></div>
                    </div>
                    <div className="skills__skills-list__skill__tiles">
                        <div className="skills__skills-list__skill__tiles__tile blue">
                            <p className="skills__skills-list__skill__tiles__tile__title">Typescript</p>
                            <img src="skills-images/typescript.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                        <div className="skills__skills-list__skill__tiles__tile yellow">
                            <p className="skills__skills-list__skill__tiles__tile__title">Javascript</p>
                            <img src="skills-images/javascript.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                    </div>
                </div>
                <div className="skills__skills-list__skill">
                    <div className="skills__skills-list__skill__header">
                        <div className="skills__skills-list__skill__header__line small"></div>
                        <p className="skills__skills-list__skill__header__text">Markup & Styling</p>
                        <div className="skills__skills-list__skill__header__line long"></div>
                    </div>
                    <div className="skills__skills-list__skill__tiles">
                        <div className="skills__skills-list__skill__tiles__tile pink">
                            <p className="skills__skills-list__skill__tiles__tile__title">Sass</p>
                            <img src="skills-images/sass.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                        <div className="skills__skills-list__skill__tiles__tile orange">
                            <p className="skills__skills-list__skill__tiles__tile__title">HTML</p>
                            <img src="skills-images/html5.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                        <div className="skills__skills-list__skill__tiles__tile blue">
                            <p className="skills__skills-list__skill__tiles__tile__title">CSS</p>
                            <img src="skills-images/css3.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                    </div>
                </div>
                <div className="skills__skills-list__skill">
                    <div className="skills__skills-list__skill__header">
                        <div className="skills__skills-list__skill__header__line small"></div>
                        <p className="skills__skills-list__skill__header__text">Libraries</p>
                        <div className="skills__skills-list__skill__header__line long"></div>
                    </div>
                    <div className="skills__skills-list__skill__tiles">
                        <div className="skills__skills-list__skill__tiles__tile gray">
                            <p className="skills__skills-list__skill__tiles__tile__title">NextJs</p>
                            <img src="skills-images/nextjs.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                        <div className="skills__skills-list__skill__tiles__tile purple">
                            <p className="skills__skills-list__skill__tiles__tile__title">Prisma</p>
                            <img src="skills-images/prisma.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                        <div className="skills__skills-list__skill__tiles__tile teal">
                            <p className="skills__skills-list__skill__tiles__tile__title">React</p>
                            <img src="skills-images/react.svg" alt="skill-image" className="skills__skills-list__skill__tiles__tile__image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}