import React from "react";

import { useGlobalContext } from "../../context";
import Modal from "../../components/Modal/Modal";
import "./Header.scss";
import Hero from "../../assets/images/Hero.png";
import Fade from "react-reveal/Fade";

const Header = () => {
  const { openModal } = useGlobalContext();

  return (
    <Fade bottom duration={2000}>
      <section className="Header" id="home">
        <div className="Header__container container">
          <div className="Header__container--contents-right">
            <h3 className="Header__text--title ">
              Bridging the gap between <br /> visionary companies and quality
              talents
            </h3>
            <p className="Header__text--desc">
              We are MavenFleet, a group of people with unique voices; doing
              great things. We learn fast and are patient. We cultivate more
              good characters and strive for quality.
            </p>
            <button
              type="button"
              className="btn Header__btn"
              onClick={openModal}
            >
              Get Started
            </button>
            <Modal />
          </div>

          <div className="Header__container--contents-left">
            <figure className="Header__img--box">
              <img src={Hero} alt="Header_img" className="Header__img" />
            </figure>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Header;
