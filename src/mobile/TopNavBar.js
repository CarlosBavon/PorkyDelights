import React from "react";
import { Link } from "react-router-dom";
import "../styles/TopNavBar.css";

function TopNavBar() {
  return (
    <div className="top-nav">
      <div className="top-left">
        <h3>Porky Delights</h3>
      </div>
      <div className="top-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default TopNavBar;
