import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* <a href="#1" className="logo">
        <img src={logo} alt="logo" />
        </a> */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#d5ae4b" }} />
          ) : (
            <FaBars size={30} style={{ color: "#d5ae4b" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {" "}
            <Link to="/suites" className="a" onClick={closeMenu}>
              suites
            </Link>
          </li>
          <li className="nav-item">
            <Link to="cafe" className="a" onClick={closeMenu}>
              cafe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="a" onClick={closeMenu}>
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="a" onClick={closeMenu}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
