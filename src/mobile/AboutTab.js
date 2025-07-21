import React from "react";
import "../mobileStyles/AboutTab.css";
import Pig from "../assets/pig-chef.jpeg";

const AboutTab = () => {
  return (
    <div className="about-tab">
      <h2>🐽 Who We Are</h2>
      <p>
        Welcome to <strong>Porky Delights</strong> — where every bite tells a story!
        We’re not just a food brand. We’re a pork-powered movement. 🍖✨
      </p>
      <div className="pig-hero">
        <img src={Pig} alt="Cute Piggy" />
        <p><em>Born to serve flavor!</em></p>
      </div>
      <p>
        Whether it's bacon, ribs, or the legendary pork chop, we bring it hot and fresh.
        Our mobile-first approach ensures you can *snack and scroll* at the same time 😎📱
      </p>
    </div>
  );
};

export default AboutTab;
