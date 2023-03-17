import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import { normalSchema } from "../../components/Modal/schemas/index";
import logo from "../../assets/images/logo.png";
import "./Footer.scss";

const url = "https://mavenfleet.herokuapp.com/api/v1/message/send-message";
export const ContactUs = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);

    try {
      await axios.post(url, {
        email: values.email,
        fullname: values.fullname,
        message: values.message,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      message: "",
    },
    validationSchema: normalSchema,
    onSubmit,
  });

  return (
    <>
      <form className="modal__form" onSubmit={handleSubmit} autoComplete="off">
        <div className="input-box">
          <input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.fullname && touched.fullname && (
            <p className="error">{errors.fullname}</p>
          )}
        </div>

        <div className="input-box">
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="input-box">
          <textarea
            value={values.message}
            onChange={handleChange}
            placeholder="Message"
            aria-label="Message"
            name="message"
            required
          ></textarea>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn submit-btn"
        >
          Submit
        </button>
      </form>

      {showAlert && (
        <div className="alert alert-success" role="alert">
          {" "}
          Your Message Successfully Sent!
        </div>
      )}
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
            {" "}
            <ContactUs />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
