import React from "react";
import "../mobileStyles/AboutTab.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Porky Delights</h1>
        <p>Your ultimate guide to all things pork</p>
      </header>

      <main className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Pork App was born from a passion for quality pork products and the
            desire to share recipes, cooking techniques, and product information
            with fellow pork enthusiasts.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Hundreds of pork recipes</li>
            <li>Cooking temperature guide</li>
            <li>Butcher cuts reference</li>
            <li>Personal cooking timer</li>
            <li>Weekly meal planner</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Chef John</h3>
              <p>Head of Recipes</p>
            </div>
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Maria</h3>
              <p>Product Expert</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <Link to="/contact" className="contact-btn">
            Send Message
          </Link>
        </section>
      </main>

      <footer className="about-footer">
        <p>© 2025 Porky Delights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
