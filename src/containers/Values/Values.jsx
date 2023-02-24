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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci doloribus labore porro odit alias voluptate possimus mollitia voluptates, hic magnam!",
  },
  {
    id: 1,
    values__icon: <GiCharacter />,
    values__header: "Cultivating good characters",
    values__desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci doloribus labore porro odit alias voluptate possimus mollitia voluptates, hic magnam!",
  },
  {
    id: 2,
    values__icon: <FaUserGraduate />,
    values__header: "Learn fast, yet patient",
    values__desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci doloribus labore porro odit alias voluptate possimus mollitia voluptates, hic magnam!",
  },
];

const Values = () => {
  return (
    <section className="values">
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
