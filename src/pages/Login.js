import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthForm.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Welcome Back, Pooks! 🐷</h2>
      <form>
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
