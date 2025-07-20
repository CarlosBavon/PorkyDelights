// src/components/DishCard.js
import React, { useState } from "react";
import "../styles/DishCard.css";

const DishCard = ({ title, imgSrc }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="dish-card">
      {!loaded && <div className="image-skeleton"></div>}
      <img
        src={imgSrc}
        alt={title}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default DishCard;
