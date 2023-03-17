import React from "react";
import { TbChartArrowsVertical } from "react-icons/tb";
import { GiCharacter } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import "./Values.scss";

const valuesArr = [
  {
    id: 0,
    values__icon: <TbChartArrowsVertical />,
    values__header: "Aim to be the best",
    values__desc:
      "Aiming to be the best means that we are always pushing ourselves to exceed expectations and deliver exceptional results. We set high standards for ourselves and constantly work towards achieving our goals, while also recognizing the importance of teamwork and collaboration.",
  },
  {
    id: 1,
    values__icon: <GiCharacter />,
    values__header: "Cultivating good characters",
    values__desc:
      "Cultivating good characters is another value that we prioritize at MavenFleet. We believe that strong character traits, such as honesty, integrity, and accountability, are essential for building lasting relationships with our customers and earning their trust and loyalty.",
  },
  {
    id: 2,
    values__icon: <FaUserGraduate />,
    values__header: "Learn fast, yet patient",
    values__desc:
      "Learning fast yet being patient is a value that we hold dear at MavenFleet. We recognize the importance of staying ahead of the curve and adapting to changing circumstances, while also taking the time to fully understand and absorb new information. By striking a balance between efficiency and thoroughness, we are able to quickly adapt and respond to new challenges while still maintaining our commitment to excellence.",
  },
];

const Values = () => {
  return (
    <section className="values" id="values">
      <div className="values__container container">
        <div className="section__header">
          <p className="section__header--title">Our values define us</p>
          <p className="section__header--description">
            These are the values that we standby and they shape our actions
          </p>
        </div>

        <div className="values__container--contents">
          {valuesArr.map((value) => {
            const { id, values__header, values__desc, values__icon } = value;

            return (
              <div className="values__content" key={id}>
                <div className="values__content--icon">{values__icon}</div>
                <div className="values__content--header">
                  <p>{values__header}</p>
                </div>
                <div className="values__content--desc">
                  <p>{values__desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
