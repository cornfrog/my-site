import Carousel from "./components/Carousel";
import { carouselImages } from "./helpers";

export default function Home() {
  return (
    <div className="page homepage">
      <div className="homepage__content">
        <img src="my-picture.jpg" alt="header-photo" className="homepage__content__photo"/>
        <h1 className="homepage__content__title">Greetings!</h1>
        <p className="homepage__content__intro">
          My name is Corey Pierce and I am an aspiring software developer.
          To put it short I am an overall tech nerd! My main interests are
          Web Development, Data Analysis, Web3, and Cyber Security. This
          site is to showcase my past and current projects. I hope you enjoy :)
        </p>
        <div className="homepage__content__connect">
          <a href="https://github.com/cornfrog"><img src="homepage-connect-images/github.svg" alt="github-connect-image" className="homepage__content__connect__image" /></a>
          <a href="https://www.linkedin.com/in/coreypierce-/"><img src="homepage-connect-images/linkedin.svg" alt="github-connect-image" className="homepage__content__connect__image" /></a>
          <a href="mailto:coreyjamespierce@gmail.com" target="_blank"><img src="homepage-connect-images/email.svg" alt="email-connect-image" className="homepage__content__connect__image" /></a>
        </div>
      </div>
      <Carousel slides={carouselImages}/>
    </div>
  );
}
