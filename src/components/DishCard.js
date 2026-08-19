import { useState } from "react";
import "../styles/DishCard.css";

const DishCard = ({ title, imgSrc, description, price }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="dish-card">
      <div className="dish-media">
        {!loaded && <div className="image-skeleton" aria-hidden="true" />}
        <img
          src={imgSrc}
          alt={title}
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="dish-body">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default DishCard;
