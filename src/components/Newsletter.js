import React, { useState } from "react";
import "../styles/Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000); // reset after 3s
  };

  return (
    <div className="newsletter">
      <h2>📬 Subscribe to Our Juicy Updates</h2>
      <p>Be the first to get offers, secret sauces & porky news!</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe 🐷</button>
      </form>

      {submitted && <div className="newsletter-toast">Thanks for subscribing! 🎉</div>}
    </div>
  );
};

export default Newsletter;
