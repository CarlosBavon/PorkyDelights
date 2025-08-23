// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {

  const [pos, setPos] = useState({ x:0, y:0});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left, // position relative to navbar
      y: e.clientY - rect.top
    })
  } 

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow/background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links data (DRY)
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
  ];

  const contactLink = [
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} onMouseMove={handleMouseMove}>
      {/*LOGO*/}
      <div className="logo">
        <li><Link to="/" className="logo-link">Porky Delights</Link></li>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? "active" : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Link */}
      <ul className={`contact-link ${menuOpen ? "open" : ""}`}>
        {contactLink.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`contact-btn ${location.pathname === item.to ? "active" : ""
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
