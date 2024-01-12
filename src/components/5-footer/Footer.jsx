import React, { useEffect, useState } from "react";
import "./footer.css";
const Footer = () => {
  const storedActiveLink = localStorage.getItem("activeLink") || "home";
  const [activeLink, setActiveLink] = useState(storedActiveLink);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  return (
    <footer className="flex">
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

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
