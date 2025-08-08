// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
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
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  const authLinks = [
    { to: "/login", label: "Login" },
    { to: "/signup", label: "SignUp" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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

      {/* Auth Links */}
      <ul className="signing-links">
        {authLinks.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="auth-btn">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
};

export default Navbar;
