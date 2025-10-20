/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const storedActiveLink = localStorage.getItem("activeLink") || "About";
  const [activeLink, setActiveLink] = useState(storedActiveLink);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  return (
    <footer className="flex flex-row items-center gap-4 p-4 border-t border-zinc-200 dark:border-zinc-700 text-sm text-zinc-600 dark:text-zinc-400">
      <ul className="flex gap-6">
        <li>
          <Link
            to="/About"
            onClick={() => handleLinkClick("About")}
            className={activeLink === "About" ? "active" : ""}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/uses"
            onClick={() => handleLinkClick("Uses")}
            className={activeLink === "Uses" ? "active" : ""}
          >
            Uses
          </Link>
        </li>
      </ul>

      <p className="text-xs text-center">
        © 2023 Mohammed Abdul Fatah. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
