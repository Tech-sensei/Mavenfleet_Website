import React, { useState } from "react";

import data from "../data";
import "./Accordion.css";
import Question from "./Question";

const Accordion = () => {
  const [questions] = useState(data);
  //   const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className=" accordion">
      <div className="section__header container">
        <p
          className="section__header--title"
          style={{ color: "white"}}
        >
          Got some Questions???
        </p>
        <p className="section__header--description" style={{ color: "white" , margin: "0" }}>
          We provide answers to al questions you may have.
        </p>
      </div>
      <div className="accordion__container container">
        <div className="accordion__container--contents-left">
          <h3>Got some questions?</h3>
        </div>
        <div className="accordion__container--contents-right">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
