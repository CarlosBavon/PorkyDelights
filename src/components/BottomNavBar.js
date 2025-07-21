import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/">🏠</NavLink>
      <NavLink to="/menu">🍖</NavLink>
      <NavLink to="/contact">📞</NavLink>
      <NavLink to="/about">ℹ️</NavLink>
    </div>
  );
};

export default BottomNavBar;
