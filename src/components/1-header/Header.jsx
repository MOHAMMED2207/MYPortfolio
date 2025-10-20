/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <div className="navElement">
      <header className={showHeder ? "header flex" : "header_sticyy flex"}>
        <Link
          onClick={() => handleLinkClick("Home")}
          to="/"
          className="linklogo"
        >
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/img/Myphoto.png"
            className="avatar"
            style={{ width: "34px" }}
            alt=""
          />
          <h4>MOHAMMAD</h4>
        </Link>
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
                <Link
                  onClick={() => handleLinkClick("/")}
                  className={activeLink === "/" ? "active" : ""}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick("About")}
                  className={activeLink === "About" ? "active" : ""}
                  to="./About"
                >
                  About
                </Link>
              </li>
              
            
              <li>
                <Link
                  onClick={() => handleLinkClick("uses")}
                  className={activeLink === "uses" ? "active" : ""}
                  to="./uses"
                >
                  Uses
                </Link>
              </li>
              
            <li>
  <a
    href="#ContactUs"
    onClick={() => handleLinkClick("Contact Us")}
    className={activeLink === "Contact Us" ? "active" : ""}
  >
    Contact Us
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
                <Link
                  onClick={() => handleLinkClick("About")}
                  className={activeLink === "About" ? "active2" : ""}
                  to="./About"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => handleLinkClick("Articles")}
                  className={activeLink === "Articles" ? "active2" : ""}
                  to=""
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick("Projects")}
                  className={activeLink === "Projects" ? "active2" : ""}
                  to="#Projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick("Speaking")}
                  className={activeLink === "Speaking" ? "active2" : ""}
                  to=""
                >
                  Speaking
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick("uses")}
                  className={activeLink === "uses" ? "active2" : ""}
                  to="./uses"
                >
                  Uses
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
