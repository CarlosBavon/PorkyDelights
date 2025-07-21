// src/pages/Menu.js
import React from "react";
import "../styles/Menu.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToFavorites, addToCart } from "../utils/storageUtils";
import Toast from "../components/Toast";


const dishes = [
  {
    name: "Pork Chop",
    image: "/images/pork-chop.jpg",
    description: "Juicy, grilled pork chop seasoned to perfection."
  },
  {
    name: "Pork Ribs",
    image: "/images/pork-ribs.jpg",
    description: "Tender ribs glazed in sticky BBQ sauce."
  },
  {
    name: "Pork Sausage",
    image: "/images/pork-sausage.jpg",
    description: "Spicy pork sausage links, locally made."
  },
  {
    name: "Pulled Pork",
    image: "/images/pulled-pork.jpg",
    description: "Slow-cooked, shredded pork in tangy sauce."
  }
];


const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (dish) => {
    navigate("/dish/" + dish.name.toLowerCase().replace(/\s/g, "-"), {
      state: { dish }
    });
  };
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000); // hide after 2s
  };
  
  return (
    
    <div className="menu-page">
      <Link to="/cart" className="cart-btn">
        <button className="view-cart-btn">View Cart 🛒</button>
      </Link>
      <Link to="/favorites" className="favorites-btn">
        <button className="view-favorites-btn">View Favorites 🎉</button>
      </Link>

      <h1>Our Porky Menu</h1>
      <div className="menu-grid">
        {dishes.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

          <div className="menu-buttons">
            <button
    className="favs-btn"
    onClick={(e) => {
      e.stopPropagation(); // Prevents navigating to detail page
      addToFavorites(dish);
      showToast(`${dish.name} Added to Favorites ❤️`);
    }}
  >
    ❤️
  </button>
  <button
    className="cartt-btn"
    onClick={(e) => {
      e.stopPropagation();
      addToCart(dish);
      showToast(`${dish.name} Added to Cart 🛒`)    
    }}
  >
    🛒
  </button>
          </div>
        </div>
      ))}
      </div>
      {toastMessage && <Toast message={toastMessage} />}

    </div>
  );
};

export default Menu;
