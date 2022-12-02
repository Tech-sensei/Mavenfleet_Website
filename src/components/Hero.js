import React from "react";
import { useGlobalContext } from "../context";
import Modal from "./Modal";
import "./Hero.css";
import Heroimg from "./images/heroimg.png";

export const Hero = () => {
  const { openModal } = useGlobalContext();

  return (
    <section className="Hero">
      <div className="Hero__container container">
        <div className="Hero__container--contents-right">
          <h3 className="Hero__text--title ">
            Bridging the gap between <br /> visionary companies and quality
            talents
          </h3>
          <p className="Hero__text--desc">
            We are Mavenfleet, a group of people with unique voices; doing great
            things. We learn fast and are patient. We cultivate more good
            characters and strive for quality.
          </p>
          <button type="button" className="btn" onClick={openModal}>
            Get Started
          </button>
          <Modal />
        </div>

        <div className="Hero__container--contents-left">
          <figure className="Hero__img">
            <img src={Heroimg} alt="Hero_img" />
          </figure>
        </div>
      </div>
    </section>
  );
};
