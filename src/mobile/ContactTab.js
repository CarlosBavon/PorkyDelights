import React, { useState } from 'react';
import '../mobileStyles/ContactTab.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Porky Delights</h1>
        <p>Get in touch with us!</p>
      </header>

      <main className="contact-content">
        <section className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <div className="icon">📍</div>
            <p>123 Bacon Street, Porkville, PC 90001</p>
          </div>
          <div className="info-item">
            <div className="icon">📞</div>
            <p>(+254) 799-657-824</p>
          </div>
          <div className="info-item">
            <div className="icon">✉️</div>
            <p>porkydelights@gmail.com</p>
          </div>
          <div className="info-item">
            <div className="icon">🕒</div>
            <p>Mon-Fri: 9am-5pm | Sat: 10am-3pm</p>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>

        <section className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target='_blank' rel="noreferrer" className="social-icon">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target='_blank' rel="noreferrer" className="social-icon">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com" target='_blank' rel="noreferrer" className="social-icon">
              <FaTwitter size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="contact-footer">
        <p>© 2025 Porky Delights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;