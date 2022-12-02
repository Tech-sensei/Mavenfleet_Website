import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "./images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__container--contents">
          <div className="footer__header">
            <img src={logo} alt="Nav logo" /> <span>avenFleet</span>
          </div>

          <p className="footer__texts">
            We are Mavenfleet, a group of people with unique voices; doing great
            things. We learn fast and are patient. We cultivate more good
            characters and strive for quality.
          </p>

          <div className="footer__socials">
            <FaFacebook />
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer__container--contents-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Mission</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column subscribe">
          <h3>Stay In Touch</h3>
          <div>
            <input type="email" placeholder="Your email id here" />
            <button type="button" className="footer-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
