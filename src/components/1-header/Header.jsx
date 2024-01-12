import { useEffect, useState } from "react";
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  const storedActiveLink = localStorage.getItem("activeLink") || "home";
  const [activeLink, setActiveLink] = useState(storedActiveLink);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const [showHeder, setshowHeder] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Num = 300;
      if (window.scrollY > Num) {
        setshowHeder(true);
      } else {
        setshowHeder(false);
      }
    });
  }, []);

  return (
    <header className={showHeder ? "header flex" : "header_sticyy flex"}>
      <a onClick={() => handleLinkClick("Home")} href="/" className="linklogo">
        <motion.img
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1.1)" }}
          transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/img/Myphoto.png"
          className="avatar"
          style={{ width: "34px" }}
          alt=""
        />
        <h4>
          MOHA
          <span>MAD</span>
        </h4>
      </a>
      <div className="sec_flex">
        <button
          onClick={() => {
            setshowModal(true);
          }}
          className="menu icon-menu flex"
        ></button>
        <div />

        <nav>
          <ul className="flex">
            <li>
              <a
                onClick={() => handleLinkClick("About")}
                className={activeLink === "About" ? "active" : ""}
                href="./About"
              >
                About
              </a>
            </li>

            <li>
              <a
                onClick={() => handleLinkClick("Articles")}
                className={activeLink === "Articles" ? "active" : ""}
                href=""
              >
                Articles
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("Projects")}
                className={activeLink === "Projects" ? "active" : ""}
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("Speaking")}
                className={activeLink === "Speaking" ? "active" : ""}
                href=""
              >
                Speaking
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("uses")}
                className={activeLink === "uses" ? "active" : ""}
                href="./uses"
              >
                Uses
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            // Send value to LS
            localStorage.setItem(
              "currentMode",
              theme === "dark" ? "light" : "dark"
            );

            // get value from LS
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="mode flex"
        >
          {theme === "dark" ? (
            <span className="icon-moon-o"> </span>
          ) : (
            <span className="icon-sun"> </span>
          )}
        </button>
      </div>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>

            <li>
              <a
                onClick={() => handleLinkClick("About")}
                className={activeLink === "About" ? "active2" : ""}
                href="./About"
              >
                About
              </a>
            </li>

            <li>
              <a
                onClick={() => handleLinkClick("Articles")}
                className={activeLink === "Articles" ? "active2" : ""}
                href=""
              >
                Articles
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("Projects")}
                className={activeLink === "Projects" ? "active2" : ""}
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("Speaking")}
                className={activeLink === "Speaking" ? "active2" : ""}
                href=""
              >
                Speaking
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLinkClick("uses")}
                className={activeLink === "uses" ? "active2" : ""}
                href="./uses"
              >
                Uses
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
