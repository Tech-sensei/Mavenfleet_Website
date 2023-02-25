import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="question-header">
        <h4>{title}</h4>
        <button className="question-btn">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p> {showAnswer && info}</p>
    </div>
  );
};

export default Question;
