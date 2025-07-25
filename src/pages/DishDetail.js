// src/pages/DishDetail.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/DishDetail.css";
import { useState } from "react";
import Toast from "../components/Toast";
import { addToFavorites, addToCart } from "../utils/storageUtils";


const DishDetail = () => {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000); // hide after 2s
  };

  const navigate = useNavigate();

  const location = useLocation();
  const dish = location.state?.dish;

  if (!dish) return <p>Dish not found.</p>;


  return (
    <div className="dish-detail">
      <div>
        <button className="back-btn" onClick={() => navigate("/menu")}>
          ← Back to Menu
        </button>
      </div>

      <img src={dish.image} alt={dish.name} />
      <h1>{dish.name}</h1>
      <p className="desc">{dish.description}</p>
      <ul>
        <li>🔥 Fresh ingredients</li>
        <li>🍴 Perfectly seasoned</li>
        <li>💯 Porky satisfaction guaranteed</li>
      </ul>
      <button className="order-btn" onClick={() => navigate("/menu")}>Order Now</button>
      <div className="dish-actions">
        <button className="fav-btn" onClick={() => {
          addToFavorites(dish);
          showToast(`${dish.name} added to Favorites ❤️`)
        }}>
          ❤️ Add to Favs
        </button>

        <button className="cart-btn" onClick={() => {
          addToCart(dish);
          showToast(`${dish.name} added to Cart 🛒`)
        }}>
          🛒 Add to Cart
        </button>
      </div>

      {toastMessage && <Toast message={toastMessage} />}
    </div>

  );
};

export default DishDetail;
