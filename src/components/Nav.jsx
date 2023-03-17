import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { socials } from "../data";
import logo from "../assets/images/MavenLogo1.png";
import "./Nav.css";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navMenu = useRef(null);

  useEffect(() => {
    showLinks
      ? navMenu.current.classList.add("show-menu")
      : navMenu.current.classList.remove("show-menu");
  }, [showLinks]);

  const toggleNav = () => {
    setShowLinks(!showLinks);
    setToggle(!toggle);
  };

  const navLinkClose = () => {
    setShowLinks(false);
    setToggle(!toggle);
  };

  return (
    <nav className="nav">
      <div className="nav__container container">
        <div className="nav__logo">
          <img src={logo} alt="Nav logo" />
        </div>

        <div className="nav__menu" ref={navMenu}>
          <ul className="nav__list">
            {["home", "about","values", "contact"].map((link) => (
              <li className="nav__item" key={`link-${link}`}>
                <div />
                <a
                  href={`#${link}`}
                  className="nav__link"
                  onClick={navLinkClose}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="social-icons">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>

        <div className="nav__toggle">
          <button className="nav__btn" onClick={toggleNav}>
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
