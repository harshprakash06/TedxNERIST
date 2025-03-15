import React, { useEffect, useState } from "react";
import logo from "/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((currentScrollY) => {
      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    });

    return () => unsubscribe(); // Cleanup listener
  }, [scrollY, lastScrollY]);

  const handleClickScroll = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div
      id="header"
      className={`fixed-header ${showNavbar ? "visible" : "hidden"}`}
    >
      <div className="container2">
        <nav id="header-nav">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <ul id="sidemenu">
            <li className="text">
              <Link to="/" onClick={() => handleClickScroll("hero-element")}>
                Home
              </Link>
            </li>
            <li className="text">
              <Link to="/" onClick={() => handleClickScroll("about")}>
                About
              </Link>
            </li>
            <li className="text">
              <Link to="/team">Team</Link>
            </li>
            <li className="text">
              <Link to="/event">Event</Link>
            </li>
            <li className="text">
              <Link to="/" onClick={() => handleClickScroll("footer")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
