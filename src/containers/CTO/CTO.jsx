import React from "react";

import { useGlobalContext } from "../../context";
import CTO__img from "../../assets/images/cto.png"
import "./CTO.scss";

const CTO = () => {
  const { openModal } = useGlobalContext();
  return (
    <section className="section CTO">
      <div className="CTO__container container">
        <div className="CTO__container--contents-left">
          <h2>Bridge the gap today!</h2>
          <p>Join MavenFleet's Talent Development Program and Prepare Yourself for Success.</p>
          <button type="button" className="btn CTO-btn" onClick={openModal}>
            Get Started
          </button>
        </div>

        <div className="CTO__container--contents-right">
            <img src={CTO__img} alt="CTO"  className="CTO__img"/>
        </div>
        
      </div>
    </section>
  );
};

export default CTO;
