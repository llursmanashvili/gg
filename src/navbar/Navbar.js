import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const { useState, useEffect } = React;

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const data = [
    { id: 0, label: "🇬🇧", href: "/english" },
    { id: 1, label: "🇷🇺", href: "/russian" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="hotel georgia gold" />
        </Link>
        {/* <a href="#1" className="logo">
        <img  src={logo} alt="hotel georgia gold" />
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
          <li style={{ display: "flex", justifyContent: "center" }}>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem
                  ? items.find((item) => item.id == selectedItem).label
                  : "🇬🇪"}
                <i
                  className={`fa fa-chevron-right iconi ${isOpen && "open"}`}
                ></i>
              </div>
              <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item) => (
                  <Link to={item.href}>
                    <div
                      className="dropdown-item"
                      onClick={(e) => handleItemClick(e.target.id)}
                      id={item.id}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function Navbaren() {
  const { useState, useEffect } = React;

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const data = [
    { id: 0, label: "🇬🇪", href: "/" },
    { id: 1, label: "🇷🇺", href: "/russian" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/english">
          <img src={logo} alt="hotel georgia gold" />
        </Link>

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
          <li style={{ display: "flex", justifyContent: "center" }}>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem
                  ? items.find((item) => item.id == selectedItem).label
                  : "🇬🇧"}
                <i
                  className={`fa fa-chevron-right iconi ${isOpen && "open"}`}
                ></i>
              </div>
              <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item) => (
                  <Link to={item.href}>
                    <div
                      className="dropdown-item"
                      onClick={(e) => handleItemClick(e.target.id)}
                      id={item.id}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function Navbarru() {
  const { useState, useEffect } = React;

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const data = [
    { id: 0, label: "🇬🇪", href: "/" },
    { id: 1, label: "🇬🇧", href: "/english" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/russian">
          <img src={logo} alt="hotel georgia gold" />
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#d5ae4b" }} />
          ) : (
            <FaBars size={30} style={{ color: "#d5ae4b" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/aboutru" className="a" onClick={closeMenu}>
              о нас
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactru" className="a" onClick={closeMenu}>
              связаться с нами
            </Link>
          </li>
          <li style={{ display: "flex", justifyContent: "center" }}>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem
                  ? items.find((item) => item.id == selectedItem).label
                  : "🇷🇺"}
                <i
                  className={`fa fa-chevron-right iconi ${isOpen && "open"}`}
                ></i>
              </div>
              <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item) => (
                  <Link to={item.href}>
                    <div
                      className="dropdown-item"
                      onClick={(e) => handleItemClick(e.target.id)}
                      id={item.id}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Navbar, Navbaren, Navbarru };
