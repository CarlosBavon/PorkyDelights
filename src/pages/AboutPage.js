import React from "react";
import "../styles/AboutPage.css";
import pigChef from "../assets/pig-chef.jpeg"; // Add your own cute pig image!

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>🐷 About Porky Delights</h1>
        <p>Where passion meets pork — one juicy bite at a time!</p>
      </div>

      <div className="about-section">
        <img src={pigChef} alt="Pig Chef" className="about-image" />
        <div className="about-text">
          <h2>🥓 Our Story</h2>
          <p>
            Born out of a fiery love for everything pork, Porky Delights started
            in a small kitchen with one big dream — to bring people together
            through crispy, tender, flavorful pork dishes that speak straight to
            the soul.
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-text">
          <h2>🔥 Our Mission</h2>
          <p>
            To deliver mouthwatering pork meals that don’t just satisfy hunger —
            they start conversations, create memories, and keep you coming back
            for more. We’re here to make pork... personal.
          </p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046861.png"
          alt="Pork Heart"
          className="about-image"
        />
      </div>

      <div className="about-special">
        <h2>🌟 What Makes Us Oink-tastic?</h2>
        <ul>
          <li>✅ Locally sourced pork, always fresh</li>
          <li>✅ Unique homemade marinades & spice rubs</li>
          <li>✅ Friendly, passionate pork enthusiasts (aka Us!)</li>
          <li>✅ Fast delivery, hot and juicy at your door</li>
        </ul>
      </div>

      <div className="about-cta">
        <h3>Ready to Taste the Magic?</h3>
        <a href="/menu">🍴 Browse Our Menu</a>
      </div>
    </div>
  );
};

export default AboutPage;
