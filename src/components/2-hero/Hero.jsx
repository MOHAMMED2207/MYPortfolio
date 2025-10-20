import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Hero = () => {
  const [theme, setTheme] = useState("dark"); // الوضع الافتراضي = DARK

  useEffect(() => {
    // نحاول نقرأ القيمة من localStorage
    const savedMode = localStorage.getItem("currentMode");

    if (savedMode) {
      setTheme(savedMode); // لو موجودة نستخدمها
    } else {
      // لو أول مرة، نخليها dark افتراضيًا ونخزنها
      setTheme("dark");
      localStorage.setItem("currentMode", "dark");
    }
  }, []);

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <LazyLoad height={200} once offset={100}>
            <img
              src="/img/Myphoto.png"
              className="avatar"
              alt="MyPhoto"
              loading="lazy"
            />
          </LazyLoad>
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>

        <p className="sub-title">
          I'm a skilled Front-End Web Developer with experience in JavaScript and
          TypeScript, and expertise in ReactJS framework. I’ve built many
          responsive web applications and user interfaces. I'm a quick learner
          and cooperative person, passionate about learning new tools and
          technologies. My goal is to be a better developer. Let's work together
          to bring your vision into reality.
        </p>

        <div className="flex flex-col gap-6 justify-start items-start">
          {/* ===== SOCIAL ICONS ===== */}
          <div className="all-icons flex">
            <div className="icon icon-twitter"></div>
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

          {/* ===== DEV ICONS ===== */}
          <div className="devicon flex gap-6 text-5xl flex-wrap items-center mt-10">
            <i className="devicon-npm-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-nextjs-plain"></i>
            <i className="devicon-javascript-plain colored"></i>

            <i
              className={`devicon-redux-original ${
                theme === "light" ? "colored-light" : "colored"
              }`}
            ></i>

            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-mongodb-plain colored"></i>
            <i
              className={`devicon-express-original ${
                theme === "light" ? "colored-light" : ""
              }`}
            ></i>

            <i
              className={`devicon-mysql-original ${
                theme === "light" ? "colored-light" : ""
              }`}
            ></i>
            <i
              className={`devicon-microsoftsqlserver-plain ${
                theme === "light" ? "colored-light" : ""
              }`}
            ></i>
            <i
              className={`devicon-postman-plain ${
                theme === "light" ? "colored-light" : ""
              }`}
            ></i>

            <i className="devicon-tailwindcss-plain colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i
              className={`devicon-figma-plain ${
                theme === "light" ? "colored-light" : ""
              }`}
            ></i>

            <i className="devicon-git-plain colored"></i>
            <i
              className={`devicon-github-original ${
                theme === "light" ? "colored-light" : ""
              }`}
            ></i>
            <i className="devicon-vscode-plain colored"></i>
          </div>
        </div>
      </div>

      {/* ===== ANIMATION ===== */}
      <div className="right-section animation">
        <Lottie
          animationData={devAnimation}
          loop
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Hero;
