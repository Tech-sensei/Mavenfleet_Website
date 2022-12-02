import React from "react";
import { useGlobalContext } from "../context";
import "./GetStarted.css";

const GetStarted = () => {
  const { openModal } = useGlobalContext();
  return (
    <section className="section getstarted">
      <div className="getstarted__container container">
        <div className="getstarted__container--contents">
          <h2>Bridge the gap today!</h2>
          <button type="button" className="btn getstarted-btn" onClick={openModal}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
