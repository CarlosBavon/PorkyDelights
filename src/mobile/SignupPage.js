import React from "react";
import { Link } from "react-router-dom";
import "../mobileStyles/SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h2>🎉 Join Porky Delights!</h2>
      <form>
        <input type="text" placeholder="🐷 Username" required />
        <input type="email" placeholder="📧 Email" required />
        <input type="password" placeholder="🔒 Password" required />
        <button type="submit">Sign Up & Sizzle</button>
      </form>
      <p className="switch">
        Already have an account? <Link to="/login">Snort In</Link>
      </p>
    </div>
  );
};

export default SignupPage;
