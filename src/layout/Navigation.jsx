import React from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

function Navigation() {
  return (
    <div id="nav">
      <div id="logo">
        <Link to="home" smooth={true} duration={500}>
          <img src="/e.gif" alt="logo" width={100} />
        </Link>
      </div>
      <div id="links">
        <Link to="projects" smooth={true} duration={500} className="link">
          PROJECT
        </Link>
        <Link to="about" smooth={true} duration={500} className="link">
          ABOUT
        </Link>
        <Link to="resume" smooth={true} duration={500} className="link">
          RESUME
        </Link>
      </div>
      <div id="mail">
        <a href="mailto:imeddygergi@gmail.com">MAIL</a>
      </div>
    </div>
  );
}

export default Navigation;
