// src/components/Footer.js
import React from "react";
import "../styles/Footer.css"; // Ensure you have the correct path to your CSS file
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <div className="tooltip">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <span className="tooltiptext">Facebook</span>
        </div>
        <div className="tooltip">
          <a href="https://instagram.com/heisbav" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <span className="tooltiptext">Instagram</span>
        </div>
        <div className="tooltip">
          <a href="https://wa.me/254799657824" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <span className="tooltiptext">WhatsApp</span>
        </div>
        <div className="tooltip">
          <a href="https://x.com/heisbav" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <span className="tooltiptext">Twitter</span>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Porky Delights. Made with ❤️</p>
    </footer>
  );
};

export default Footer;
