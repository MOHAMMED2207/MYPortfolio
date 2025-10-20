import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
const { theme } = useTheme(); // من context أو Tailwind

const Hero = () => {
  const [theme, setTheme] = useState("light"); // default

  // نجيب المود الحالي من localStorage أو النظام
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);
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

        <div className="flex flex-col gap-6 justify-start items-start">

          
        <div className="all-icons flex ">
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
 <div className="devicon flex gap-6 text-5xl flex-wrap items-center mt-10">

      <i class="devicon-npm-plain colored"></i>
      <i class="devicon-react-original colored"></i>
      <i class="devicon-nextjs-plain"></i>
      <i className="devicon-javascript-plain colored"></i>
      <i className={`devicon-redux-original ${theme === "light" ? "colored-light" : "colored"}`}></i>
   
      <i class="devicon-nodejs-plain-wordmark colored"></i>
      <i class="devicon-mongodb-plain colored"></i>
      <i className={`devicon-express-original ${theme === "light" ? "colored-light" : ""}`}></i>

      <i className={`devicon-mysql-original ${theme === "light" ? "colored-light" : ""}`}></i>
      <i className={`devicon-microsoftsqlserver-plain ${theme === "light" ? "colored-light" : ""}`}></i>
      <i className={`devicon-postman-plain ${theme === "light" ? "colored-light" : ""}`}></i>
   
      <i className="devicon-tailwindcss-plain colored"></i>
      <i class="devicon-sass-original colored"></i>
      <i className={`devicon-figma-plain ${theme === "light" ? "colored-light" : ""}`}></i>
   
      <i className="devicon-git-plain colored"></i>
      <i className={`devicon-github-original ${theme === "light" ? "colored-light" : ""}`}></i>
      <i className="devicon-vscode-plain colored"></i>
    </div>
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
