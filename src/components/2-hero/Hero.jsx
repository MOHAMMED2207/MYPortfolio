import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <LazyLoad height={200} once={true} offset={100}>
            <img
              src="/img/Myphoto.png"
              className="avatar"
              alt="MyPhoto"
              loading="lazy" // تحسين تحميل الصور
            />
          </LazyLoad>
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>

        <p className="sub-title">
          I'm Skilled Front-End Web Developer With Experience In JavaScript And
          TypeScript, And Expertise In ReactJS Framework Also Build Many
          Responsive Web Applications And User Interfaces. I'm A Quick Learner
          And Cooperative Person. I'm Passionate About Learning New Tools And
          Technologies. My Goal To Be A Better Developer. Let's Work Together
          Bring Vision Into Reality.
        </p>
  {/* 🔹 الأيقونات الاجتماعية */}
        <div className="all-icons flex">
          <Link to="https://twitter.com/" target="_blank">
            <div className="icon icon-twitter"></div>
          </Link>

          <Link to="https://www.instagram.com/moo_mohammed_64/" target="_blank">
            <div className="icon icon-instagram"></div>
          </Link>

          <Link to="https://github.com/MOHAMMED2207" target="_blank">
            <div className="icon icon-github"></div>
          </Link>

          <Link
            to="https://www.linkedin.com/in/mohammed-abd-alfatah-58959a256/"
            target="_blank"
          >
            <div className="icon icon-linkedin"></div>
          </Link>
        </div>

        {/* 🔸 أيقونات المهارات البرمجية */}
        <div className="skills-icons flex">
          <img src="/icons/js.svg" alt="JavaScript" title="JavaScript" />
          <img src="/icons/ts.svg" alt="TypeScript" title="TypeScript" />
          <img src="/icons/react.svg" alt="React.js" title="React.js" />
          <img src="/icons/nextjs.svg" alt="Next.js" title="Next.js" />
          <img src="/icons/nodejs.svg" alt="Node.js" title="Node.js" />
          <img src="/icons/mongodb.svg" alt="MongoDB" title="MongoDB" />
          <img src="/icons/tailwind.svg" alt="Tailwind CSS" title="Tailwind CSS" />
          <img src="/icons/git.svg" alt="Git" title="Git" />
          <img src="/icons/vscode.svg" alt="VS Code" title="VS Code" />
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          animationData={devAnimation}
          loop={true}
          style={{ width: "100%", height: "auto" }} // ضبط حجم الرسوم المتحركة
        />
      </div>
    </section>
  );
};

export default Hero;
