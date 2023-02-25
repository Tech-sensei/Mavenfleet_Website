import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./Footer.scss";

export const ContactUs = () => {
  const [showAlert, setShowAlert ] =useState(false)

  useEffect(() => {
    if(showAlert){
      setTimeout(() => {
        setShowAlert(false)
      }, 2000);
    }
  }, [showAlert])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8b8jp0h",
        "template_cn8pyg3",
        form.current,
        "ah8rCHyZJ3p0Px5k3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setShowAlert(true)
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="user_name"
        placeholder="Enter your full name"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Enter your email"
        required
      />
      <textarea
        name="message"
        cols={50}
        rows={5}
        placeholder="Send us a message"
        required
      />
      {/* <input type="submit" value="Send" /> */}
      <button type="submit" value="Send" className="footer-btn">
        Send
      </button>
    </form>

    {showAlert && <div className="alert alert-success" role="alert"> Your Message Successfully Sent!</div>}
    </>
  );
};

////////////////////////////////////////
const Footer = () => {
  return (
    <footer className="footer" id="contact">
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

        <div className="footer__container--contents-form">
          <h3>Stay In Touch</h3>
          <div>
            <ContactUs />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
