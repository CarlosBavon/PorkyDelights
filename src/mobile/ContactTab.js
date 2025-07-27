import "../mobileStyles/ContactTab.css";
import React, { useState } from "react";

const ContactTab = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-tab">
      <h2>📞 Contact Porky HQ</h2>
      <p>Snort us a message — we love hearing from our bacon buddies!</p>

      <form onSubmit={handleSubmit} className="snort-form">
        <input className="snort-input" type="text" placeholder="🐷 Your Name" required />
        <input className="snort-input" type="email" placeholder="📧 Your Email" required />
        <textarea className="snort-textarea" placeholder="💌 Your Message" required rows={6}/>
        <button className="snort-button" type="submit">Send Sizzle</button>
      </form>

      {submitted && (
        <div className="snort-alert">
          <p>🐽 Message Sent! We’ll squeal back soon!</p>
        </div>
      )}
    </div>
  );
};

export default ContactTab;
