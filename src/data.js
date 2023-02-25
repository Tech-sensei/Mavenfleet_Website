import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaGithub />,
  },
];

const questions = [
  {
    id: 1,
    title: "What makes MavenFleet's approach to talent development unique?",
    info: " MavenFleet takes a unique approach to talent development that focuses not only on skills development but also on cultural fit. They work with candidates to ensure that they possess both the necessary skills and the right cultural fit for a particular company or position.",
  },
  {
    id: 2,
    title: "How does MavenFleet's mentoring program work?",
    info: "MavenFleet's mentoring program is designed to prepare candidates for specific company needs. For example, their current program focuses on Android programming. Candidates are carefully selected based on their skills and potential, and they work with MavenFleet to develop their skills in a way that will make them ideal candidates for top talent positions in visionary companies.",
  },
  {
    id: 3,
    title:
      "How does MavenFleet ensure that candidates are a good fit for company culture?",
    info: "MavenFleet recognizes that the right talent is not only skilled but also a good fit for company culture. They work with candidates to ensure that they possess the right traits and values that align with the company's culture.",
  },
  {
    id: 4,
    title: "How does MavenFleet help companies find the right talent?",
    info: " MavenFleet's unique approach to talent development and mentoring ensures that they can identify candidates who possess both the necessary skills and the right cultural fit for a particular company or position. They work with companies to understand their specific needs and requirements and then prepare candidates accordingly.",
  },
  {
    id: 5,
    title: "What kind of companies does MavenFleet work with?",
    info: "MavenFleet works with visionary companies that are looking for top talent to help them achieve their goals and drive innovation. They work with companies across various industries and are dedicated to helping these companies find the right talent to meet their specific needs.",
  },
];

export default questions;
