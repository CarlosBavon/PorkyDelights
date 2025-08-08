// src/components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">
        <li><Link to="/" className="logo-link">Porky Delights</Link></li>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link></li>
        <li><Link to="/menu" className={`nav-link ${location.pathname === "/menu" ? "active" : ""}`}>Menu</Link></li>
        <li><Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link></li>
        <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link></li>
      </ul>
      <ul className="signing-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
