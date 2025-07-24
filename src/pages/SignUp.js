import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthForm.css";

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2>Create Your Porky Account 🐖</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login" className="signing-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
