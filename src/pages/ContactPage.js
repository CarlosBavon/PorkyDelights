import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🐷 Thank you, we’ll get back to you soon!");
    setForm({ name: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>📞 Let’s Talk Pork!</h1>
        <p>
          Got a craving, question, or custom order? Reach out and let’s cook it
          up!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="What’s on your mind?"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">🐖 Send Message</button>
      </form>

      <div className="contact-options">
        <a href="tel:+254799657824">📞 Call Us</a>
        <a href="https://wa.me/+254799657824" target="_blank" rel="noreferrer">
          💬 WhatsApp Chat
        </a>
        <a href="mailto:carlosbavon46@gmail.com">📧 Email Us</a>
      </div>

      <div className="contact-map">
        <iframe
          title="Porky Delights Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactPage;
