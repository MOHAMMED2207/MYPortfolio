import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const filter = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return filter === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex  left-section" id="Projects">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.img}
                className="  card"
              >
                <img width={266} src={item.img} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">{item.title2}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.link} target="blank"> 
                      
                        <div className="icon-link"></div>
                      </a>
                     
                     <a href="https://github.com/MOHAMMED2207" target="blank"> <div className="icon-github"></div></a>
                    </div>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "center" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
