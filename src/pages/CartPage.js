// src/pages/CartPage.js
import React, { useEffect, useState } from "react";
import { getCart } from "../utils/storageUtils";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";
import "../styles/CartPage.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
  }, []);

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
      updated.splice(index, 1);
    }
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000); // hide after 2s
  };

  return (
    <div className="cart-container">
      <Link to="/menu" className="back-btn">
        ⬅ Back to Menu
      </Link>
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

                {/* Show additives if any */}
                {item.additives && item.additives.length > 0 && (
                  <p className="cart-additives">
                    <strong>Additives:</strong> {item.additives.join(", ")}
                  </p>
                )}

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
        </div>
      )}
      <h2 className="cart-total">Grand Total: {getTotal()} KES</h2>
      <ul className="proceed-checkout-btn">
        {cartItems.length > 0 ? (
          <Link to="/checkout">🧾 Proceed to Checkout</Link>
        ) : (
          <li
            style={{
              cursor: "not-allowed",
            }}
          >
            <button
              onClick={(e) => {
                showToast("Please add items to your cart first! 🛒");
              }}
              style={{
                cursor: "not-allowed",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1rem",
              }}
            >
              <em>🧾 Proceed to Checkout</em>
            </button>
            {toastMessage && <Toast message={toastMessage} />}
          </li>
        )}
      </ul>
    </div>
  );
}

export default CartPage;
