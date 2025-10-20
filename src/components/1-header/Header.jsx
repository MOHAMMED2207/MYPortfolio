/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation(); // لمعرفة المسار الحالي
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // استخراج المسار الحالي من URL
    const currentPath = location.pathname;

    if (currentPath === "/") setActiveLink("Home");
    else if (currentPath.includes("About")) setActiveLink("About");
    else if (currentPath.includes("uses")) setActiveLink("uses");
    else setActiveLink("");
  }, [location.pathname]); // يحدث تلقائيًا عند تغيير الصفحة

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
        <Link onClick={() => handleLinkClick("Home")} to="/" className="linklogo">
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
            onClick={() => setshowModal(true)}
            className="menu icon-menu flex"
          ></button>

          <nav>
            <ul className="flex">
              <li>
                <Link
                  onClick={() => handleLinkClick("Home")}
                  className={activeLink === "Home" ? "active" : ""}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => handleLinkClick("About")}
                  className={activeLink === "About" ? "active" : ""}
                  to="/About"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => handleLinkClick("uses")}
                  className={activeLink === "uses" ? "active" : ""}
                  to="/uses"
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
              localStorage.setItem(
                "currentMode",
                theme === "dark" ? "light" : "dark"
              );
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
                  onClick={() => setshowModal(false)}
                />
              </li>

              <li>
                <Link
                  onClick={() => handleLinkClick("About")}
                  className={activeLink === "About" ? "active2" : ""}
                  to="/About"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => handleLinkClick("uses")}
                  className={activeLink === "uses" ? "active2" : ""}
                  to="/uses"
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
