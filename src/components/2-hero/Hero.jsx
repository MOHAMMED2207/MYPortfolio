import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import LazyLoad from "react-lazyload";

const Hero = () => {
  return (
    <section className="hero flex">
      {/* 🔹 الجزء الأيسر */}
      <div className="left-section">
        {/* الصورة الشخصية */}
        <div className="parent-avatar flex">
          <LazyLoad height={200} once={true} offset={100}>
            <img
              src="/img/Myphoto.png"
              className="avatar"
              alt="MyPhoto"
              loading="lazy"
            />
          </LazyLoad>
          <div className="icon-verified" title="Verified"></div>
        </div>

        {/* العنوان */}
        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>

        {/* الوصف */}
        <p className="sub-title">
          I'm a skilled Front-End Web Developer with experience in JavaScript and
          TypeScript, and expertise in the ReactJS framework. I have built many
          responsive web applications and user interfaces. I'm a quick learner and
          cooperative person, passionate about learning new tools and technologies.
          My goal is to be a better developer. Let's work together to bring vision
          into reality.
        </p>

        {/* 🔹 الأيقونات الاجتماعية */}
        <div className="all-icons flex">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-twitter"
            aria-label="Twitter"
          ></a>

          <a
            href="https://www.instagram.com/moo_mohammed_64/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-instagram"
            aria-label="Instagram"
          ></a>

          <a
            href="https://github.com/MOHAMMED2207"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-github"
            aria-label="GitHub"
          ></a>

          <a
            href="https://www.linkedin.com/in/mohammed-abd-alfatah-58959a256/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-linkedin"
            aria-label="LinkedIn"
          ></a>
        </div>

        {/* ===== New Section for Programming Languages ===== */}
        <div className="skills-icons flex">
          <img src="/icons/html.svg" alt="HTML" title="HTML" />
          <img src="/icons/css.svg" alt="CSS" title="CSS" />
          <img src="/icons/js.svg" alt="JavaScript" title="JavaScript" />
          <img src="/icons/react.svg" alt="React" title="React" />
          <img src="/icons/nodejs.svg" alt="Node.js" title="Node.js" />
          <img src="/icons/mongodb.svg" alt="MongoDB" title="MongoDB" />
          <img src="/icons/git.svg" alt="Git" title="Git" />
        </div>
      </div>

      {/* 🔹 الجزء الأيمن */}
      <div className="right-section animation">
        <Lottie
          animationData={devAnimation}
          loop={true}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Hero;
