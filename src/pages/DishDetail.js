// src/pages/DishDetail.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/DishDetail.css";
import Toast from "../components/Toast";
import { addToFavorites, addToCart } from "../utils/storageUtils";

const DishDetail = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [selectedAdditives, setSelectedAdditives] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const dish = location.state?.dish;

  const additivesList = [
    "With Sauce",
    "Extra Spices",
    "Extra Cheese",
    "Gluten-Free",
    "No Salt"
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const toggleAdditive = (additive) => {
    setSelectedAdditives((prev) =>
      prev.includes(additive)
        ? prev.filter((item) => item !== additive)
        : [...prev, additive]
    );
  };

  const handleAddToCart = () => {
    const dishWithAdditives = { ...dish, additives: selectedAdditives };
    addToCart(dishWithAdditives);
    showToast(`${dish.name} with ${selectedAdditives.join(", ") || "no additives"} added to Cart 🛒`);
  };

  const handleAddToFavorites = () => {
    const dishWithAdditives = { ...dish, additives: selectedAdditives };
    addToFavorites(dishWithAdditives);
    showToast(`${dish.name} added to Favorites ❤️`);
  };

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

      {/* Additives Section */}
      <div className="additives-section">
        <h3>Choose Additives:</h3>
        {additivesList.map((additive) => (
          <label key={additive} className="additive-option">
            <input
              type="checkbox"
              checked={selectedAdditives.includes(additive)}
              onChange={() => toggleAdditive(additive)}
            />
            {additive}
          </label>
        ))}
      </div>
      
      <div className="dish-actions">
        <button className="fav-btn" onClick={handleAddToFavorites}>
          ❤️ Add to Favs
        </button>

        <button className="cart-btn" onClick={handleAddToCart}>
          🛒 Add to Cart
        </button>
      </div>

      {toastMessage && <Toast message={toastMessage} />}
    </div>

  );
};

export default DishDetail;
