import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <Fade top duration={1000 / 4} distance="20px">
      <div>
        <header className="header">
          <NavLink to="/portfolio/" tag={Link} className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Aydar Nuriev</span>
            <span className="grey-color">/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                exact to="/portfolio/"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
              >
                Home
							</NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/education/"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
              >
                Education
							</NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/experience/"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
              >
                Experience
							</NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/projects/"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
              >
                Projects
							</NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/contact/"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
              >
                Contact Me
							</NavLink>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
