// src/pages/CartPage.js
import React, { useEffect, useState } from "react";
import { getCart } from "../utils/storageUtils";
import { useNavigate, Link } from "react-router-dom";
import "../styles/CartPage.css";

function CartPage() {
    const increaseQty = (index) => {
  const updated = [...cartItems];
  updated[index].quantity += 1;
  setCartItems(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
};

const decreaseQty = (index) => {
  const updated = [...cartItems];
  if (updated[index].quantity > 1) {
    updated[index].quantity -= 1;
  } else {
    updated.splice(index, 1); // remove item if qty hits 0
  }
  setCartItems(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
};

const navigate = useNavigate();


  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
  }, []);

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem("cart");
};


  return (
    <div className="cart-container">
      <Link to="/menu" className="back-btn">⬅ Back to Menu</Link>
        <h1>🛒 Your Porky Cart</h1>
        {cartItems.length > 0 && (
            <button className="clear-cart-btn" onClick={clearCart}>
                🧹 Clear All
            </button>
        )}


      {cartItems.length === 0 ? (
        <p className="empty">Your cart is still hungry, add some pork! 🐷</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price} KES</p>
                <div className="qty-control">
                    <button onClick={() => decreaseQty(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(index)}>+</button>
                </div>
                <p>Total: {item.price * item.quantity} KES</p>
                </div>
            </div>
            ))}

          <h2 className="cart-total">Grand Total: {getTotal()} KES</h2>

        </div>
      )}
      <ul className="proceed-checkout-btn">
        <li>
          <a href="/checkout">🧾 Proceed to Checkout</a>
        </li>
      </ul>
    </div>
  );
}

export default CartPage;
