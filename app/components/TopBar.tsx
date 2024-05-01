"use client"

import { OnClickGoToHomePage } from "../helpers";
import { useState } from "react";

export default function TopBar() {
    return (
        <div className="top-bar">
            <p className="top-bar__logo" onClick={OnClickGoToHomePage}>&lt; Corey Pierce / &gt;</p>
            <div className="top-bar__link-menu">
                <a href="/skills" className="top-bar__link-menu__link">
                    <img src="topbar-icons/skills-icon.png" alt="skills-icon" className="top-bar__link-menu__link__icon" />
                    <span className="top-bar__link-menu__link__text">Skills</span>
                </a>
                <a href="/projects" className="top-bar__link-menu__link">
                    <img src="topbar-icons/projects-icon.png" alt="projects-icon" className="top-bar__link-menu__link__icon" />
                    <span className="top-bar__link-menu__link__text">Projects</span>
                </a>
                <a href="/experiences" className="top-bar__link-menu__link">
                    <img src="topbar-icons/experiences-icon.png" alt="experiences-icon" className="top-bar__link-menu__link__icon" />
                    <span className="top-bar__link-menu__link__text">Experiences</span>
                </a>
                <a href="/education" className="top-bar__link-menu__link">
                    <img src="topbar-icons/education-icon.png" alt="education-icon" className="top-bar__link-menu__link__icon" />
                    <span className="top-bar__link-menu__link__text">Education</span>
                </a>
                <a href="/resume" className="top-bar__link-menu__link">
                    <img src="topbar-icons/resume-icon.png" alt="resume-icon" className="top-bar__link-menu__link__icon" />
                    <span className="top-bar__link-menu__link__text">R&#233;sum&#233;</span>
                </a>
            </div>
            <MobileMenu />
        </div>
    );
}

function MobileMenu() {

    const [displayMenuLinks, setDisplayState] = useState(false);

    async function toggleMobileMenu() {
        setDisplayState(!displayMenuLinks);
    }

    return (
        <div className="mobile-menu">
            <button className="mobile-menu__toggle-button" onClick={toggleMobileMenu}>{displayMenuLinks ? '\u2715' : '\u2630'}</button>
            <div className={displayMenuLinks ? "mobile-menu__links-show" : "mobile-menu__links-hide"}>
                <a href="/skills" className="mobile-menu__links-show__link">
                    <img src="topbar-icons/skills-icon.png" alt="skills-icon" className="mobile-menu__links-show__link__icon" />
                    <span className="mobile-menu__links-show__link__text">Skills</span>
                </a>
                <a href="/projects" className="mobile-menu__links-show__link">
                    <img src="topbar-icons/projects-icon.png" alt="projects-icon" className="mobile-menu__links-show__link__icon" />
                    <span className="mobile-menu__links-show__link__text">Projects</span>
                </a>
                <a href="/experiences" className="mobile-menu__links-show__link">
                    <img src="topbar-icons/experiences-icon.png" alt="experiences-icon" className="mobile-menu__links-show__link__icon" />
                    <span className="mobile-menu__links-show__link__text">Experiences</span>
                </a>
                <a href="/education" className="mobile-menu__links-show__link">
                    <img src="topbar-icons/education-icon.png" alt="education-icon" className="mobile-menu__links-show__link__icon" />
                    <span className="mobile-menu__links-show__link__text">Education</span>
                </a>
                <a href="/resume" className="mobile-menu__links-show__link">
                    <img src="topbar-icons/resume-icon.png" alt="resume-icon" className="mobile-menu__links-show__link__icon" />
                    <span className="mobile-menu__links-show__link__text">R&#233;sum&#233;</span>
                </a>
            </div>
            <div className="mobile-menu__content-spacer"></div>
        </div>
    );
}