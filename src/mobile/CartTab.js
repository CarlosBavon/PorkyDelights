import React from "react";
import "../mobileStyles/CartTab.css";

const CartTab = () => {
  return (
    <div className="cart-tab">
      <div className="cart-banner">
        <h2>🛒 Porky Cart</h2>
        <p>All your juicy picks in one basket!</p>
      </div>

      <div className="cart-empty">
        <img src="/bacon-floating.png" alt="Empty Cart" />
        <p>No pork here yet 😭</p>
        <button>Browse Porky Menu</button>
      </div>
    </div>
  );
};

export default CartTab;

