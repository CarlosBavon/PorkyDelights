import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Mpesa");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !address || !email) {
      alert("Please fill out all fields");
      return;
    }

    // In a real app, send data to backend here
    setOrderPlaced(true);
    localStorage.removeItem("cart");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout 🧾</h1>

      {orderPlaced ? (
        <div className="thank-you">
          <h2>🎉 Thank you, {name}!</h2>
          <p>Your order has been placed successfully.</p>
          <Link to="/menu">
            <button className="go-to-menu">Back to Menu</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="checkout-summary">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price * item.quantity} KES</span>
              </div>
            ))}
            <div className="checkout-total">
              <strong>Total:</strong> <span>{total} KES</span>
            </div>
          </div>

          <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
            <button className="place-order-btn" onClick={handleOrder}>
              ✅ Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
