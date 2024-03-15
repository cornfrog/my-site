import NavBar from "./components/NavBar";
import Connect from "./components/Connect";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div id="top-of-page">
      <h1 className="welcome-banner">Welcome!</h1>
        <div className="intro-banner">
          <img src="linkedin-pic.jpg" alt="linkedin-pic" className="profile-img"/>
          <p className="intro">
            My name is Corey Pierce and I am an aspiring software developer. To put it short
            I am an overall tech nerd! My main interests are Web Development, Data
            Analysis, Web3, and Cyber Security. This site is to showcase my past and current 
            projects. I hope you enjoy :)
          </p>
        </div>
      <Connect />
      <NavBar />
      <Projects />
      <Achievements />
      <FAQ />
    </div>
  );
}
