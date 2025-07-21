import React, { useEffect, useState } from "react";
import "../styles/FavoritesPage.css";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const navigate = useNavigate();

const goBack = () => {
  navigate(-1); // Goes back to the previous page
};


  return (
    <div className="favorites-container">
        <button className="back-btn" onClick={goBack}>⬅ Back to Menu</button>
      <h1>💖 Favorite Porky Picks</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite items yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price} KES</span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
