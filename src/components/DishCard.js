// src/components/DishCard.js
import { useState } from "react";
import "../styles/DishCard.css";

const DishCard = ({ title, imgSrc, description, price }) => {
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
      <div>
        <p>{description}</p>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default DishCard;
