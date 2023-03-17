import React from "react";

import Hero from "../../assets/images/Hero.png";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
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
              MavenFleet helps bridge the gap between visionary companies and
              quality talent. They have a unique approach to talent development
              and mentoring that focuses on preparing candidates for specific
              company needs. Their approach includes skills development and
              cultural fit, and they work to ensure that candidates are both
              skilled and a good fit for company culture. MavenFleet's mentoring
              program currently focuses on Android programming, with the goal of
              preparing candidates for top talent positions in visionary
              companies.
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
