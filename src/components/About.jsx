import React from "react";
import Heroimg from "./images/heroimg.png";
import "./About.css";

export const About = () => {
  return (
    <section className="section about">
      <div className="section__header container">
        <p className="section__header--title">about mavenfleet</p>
        <p className="section__header--description">
          Brief introduction of what mavenfleet is about
        </p>
      </div>
      <div className="about__container container">
        <div className="about__container--contents-right">
          <div className="about__content--text">
            <p className="render-desc">
              MavenFleet wants to bridge the gap between visionary companies and
              quality talent. Traditional recruiting find talents for companies
              - we prepare talents for them in skills and cultural fit.
              <br />
              We are mentoring ten people for their first mission for six
              months. All of them are focused on Android programming.
            </p>
          </div>
        </div>

        <div className="about__container--contents-left">
          <figure className="Hero__img">
            <img src={Heroimg} alt="Hero_img" />
          </figure>
        </div>
      </div>
    </section>
  );
};
