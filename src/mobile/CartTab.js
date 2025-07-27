// CartTab.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "../mobileStyles/CartTab.css";

const CartTab = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-tab">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <Link to="/menu" className="back-to-menu">Go To Menu</Link>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <strong>Total: Ksh {total}</strong>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartTab;
