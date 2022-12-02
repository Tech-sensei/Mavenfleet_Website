import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import "./ChoiceLists.css";

const choices = [
  { id: 0, choice_letter: "A", choice_text: "I want to join Mavenfleet." },

  {
    id: 1,
    choice_letter: "B",
    choice_text: "I'm intrigued and want to unravel partnership opportunities.",
  },

  { id: 2, choice_letter: "C", choice_text: "I want to receive updates." },
];

const ChoiceLists = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [editID, setEditID] = useState(null);

  const show = (id) => {
    const specificItem = choices.find((item) => item.id === id);
    if (id === specificItem.id) {
      console.log(specificItem.id);
      setIsClicked(!isClicked);
    }
  };

  return (
    <>
      <div className="welcome__contents-box">
        <div className="fieldset">
          <div className="fieldset__title">
            <h3>Where should we start?</h3>
          </div>

          <div className="fieldset__choice-list">
            {choices.map((choice, index) => {
              const { id, choice_letter, choice_text } = choice;
              return (
                <div
                  className="choice__lists"
                  key={id}
                  onClick={() => show(id)}
                >
                  <div
                    aria-disabled="false"
                    className="choice-list"
                    data-qa="choice"
                    data-qa-selected="false"
                    data-selectable="true"
                  >
                    <div className="choice__btn">
                      <div className="choice__btn-key">
                        <div
                          className={`${
                            !isClicked ? "key-letter" : "refradio key-letter"
                          }`}
                        >
                          <span>{choice_letter}</span>
                        </div>
                      </div>
                    </div>

                    <div className="choice__contents">
                      <p className="choice__contents-text">{choice_text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="choice__btn-container">
            <button
              type="button"
              className={`${
                !isClicked ? "choice__btn-submit btn" : "refcheck btn"
              }`}
            >
              OK
              <BsCheck2 style={{ fontSize: "1.2rem" }} />
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoiceLists;
