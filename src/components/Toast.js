import React from "react";
import "../styles/Toast.css";

const Toast = ({ message }) => {
  return (
    <div className="toast-container">
      <div className="toast-box">
        {message}
      </div>
    </div>
  );
};

export default Toast;
