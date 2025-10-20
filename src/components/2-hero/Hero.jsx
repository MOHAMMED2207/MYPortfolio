import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "../public/fonts/style.css";

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

        {/* 🔸 أيقونات المهارات */}
        <div className="skills-icons flex">
          {[
            { src: "/icons/js.svg", alt: "JavaScript" },
            { src: "/icons/ts.svg", alt: "TypeScript" },
            { src: "/icons/react.svg", alt: "React.js" },
            { src: "/icons/nextjs.svg", alt: "Next.js" },
            { src: "/icons/nodejs.svg", alt: "Node.js" },
            { src: "/icons/mongodb.svg", alt: "MongoDB" },
            { src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
            { src: "/icons/git.svg", alt: "Git" },
            { src: "/icons/vscode.svg", alt: "VS Code" },
          ].map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} title={alt} loading="lazy" />
          ))}
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

