import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import { color } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [language, setLanguage] = useState("geo");
  const handleLanguage = () => {
    setLanguage(language === "geo" ? "en" : "geo");
  };

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      {language === "geo" ? (
        <nav className="navbar">
          <Link
            to="/"
            onClick={() => {
              handleLanguage();
            }}
          >
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
              <Link to="/about" className="a" onClick={closeMenu}>
                ჩვენ შესახებ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="a" onClick={closeMenu}>
                კონტაქტი
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/english"
                className="a"
                onClick={() => {
                  closeMenu();

                  handleLanguage();
                }}
              >
                english
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              onClick={() => {
                handleLanguage();
              }}
            />
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
              <Link to="/abouten" className="a" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacten" className="a" onClick={closeMenu}>
                contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="a"
                onClick={() => {
                  closeMenu();

                  handleLanguage();
                }}
              >
                ქართული
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
