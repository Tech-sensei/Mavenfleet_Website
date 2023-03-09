import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import data from "../../data";
import FAQ from "../../assets/images/faq.jpg";
import "./Accordion.scss";
import Question from "./Question";

const Accordion = () => {
  const [questions] = useState(data);
  //   const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Fade bottom duration={2000}>
      <section className=" accordion">
        <div className="section__header container">
          <p className="section__header--title">Got some Questions???</p>

          <p className="section__header--description">
            We provide answers to al questions you may have.
          </p>
        </div>

        <div className="accordion__container container">
          <div className="accordion__container--contents-left">
            <img src={FAQ} alt="questions" className="faq" />
          </div>

          <div className="accordion__container--contents-right">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Accordion;
