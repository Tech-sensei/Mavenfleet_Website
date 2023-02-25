import React from "react";

import Hero from "../../assets/images/Hero.png";
import "./About.scss";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section__header container">
        <p className="section__header--title">about mavenFleet</p>
        <p className="section__header--description">
          Brief introduction of what mavenFleet is about
        </p>
      </div>

      <div className="about__container container">
        <div className="about__container--contents-right">
          <div className="about__content--text">
            <p>
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
          <figure className="About__img--box">
            <img src={Hero} alt="About_img" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
