import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { Link } from "react-router-dom";
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
          <div className="icon icon-twitter"></div>
          <Link to="https://twitter.com/" target="_blank">
            <div className="icon icon-twitter"></div>
          </Link>

          <Link to="https://www.instagram.com/moo_mohammed_64/" target="_blank">
            <div className="icon icon-instagram"></div>
          </Link>
            <div className="icon icon-linkedin"></div>
          </Link>
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

