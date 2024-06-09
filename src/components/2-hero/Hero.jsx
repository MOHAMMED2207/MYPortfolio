import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Hero = () => {
    const lottieRef = useRef();
 
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/img/Myphoto.png"
            className="avatar"
            
            alt="MyPhoto"
          />
          <div className="icon-verified"></div>
        </div>

      
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software designer, founder, and amateur astronaut.
        </motion.h1>

        <p className="sub-title">
          I'm Skilled Front-End Web Developer With Experience In JavaScript And
          TypeScript, And Expertise In ReactJS Framework Also Build Many
          Responsive Web Applications And User Interfaces. I'm A Quick Learner
          And Cooperative Person. I'm Passionate About Learning New Tools And
          Technologies. My Goal To Be A Better Developer. Let's Work Together
          Bring Vision Into Reality.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <a href="https://www.instagram.com/moo_mohammed_64/" target="blank">
            <div className="icon icon-instagram"></div>
          </a>

          <a href="https://github.com/MOHAMMED2207" target="blank">
            <div className="icon icon-github"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-abd-alfatah-58959a256/"
            target="blank"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
