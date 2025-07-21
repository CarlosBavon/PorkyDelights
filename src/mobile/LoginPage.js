import React from "react";
import { Link } from "react-router-dom";
import "../mobileStyles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>🐷 Welcome Back!</h2>
      <form>
        <input type="email" placeholder="📧 Email" required />
        <input type="password" placeholder="🔒 Password" required />
        <button type="submit">Oink In</button>
      </form>
      <p className="switch">
        Don't have an account? <Link to="/signup">Join the Pig Pen</Link>
      </p>
    </div>
  );
};

export default LoginPage;
