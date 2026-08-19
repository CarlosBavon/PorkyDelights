import { useEffect, useRef, useState } from "react";
import "../styles/Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setSubmitted(true);
    setEmail("");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="newsletter">
      <span className="newsletter-tag">Join The List</span>
      <h2>📬 Subscribe To Our Juicy Updates</h2>
      <p>Be the first to hear about offers, secret sauces &amp; porky news.</p>

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

      {submitted && (
        <div className="newsletter-toast" role="status" aria-live="polite">
          Thanks for subscribing! 🎉
        </div>
      )}
    </div>
  );
};

export default Newsletter;
