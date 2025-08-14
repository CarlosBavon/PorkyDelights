import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [payment, setPayment] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !email) {
      alert("Please fill out all fields");
      return;
    }

    // In a real app, send data to backend here
    setOrderPlaced(true);
    localStorage.removeItem("cart");
  };

  return (
    <div className="checkout-container">
      <div>
        <Link to="/cart" className="back-to-cart">
          Back to Cart
        </Link>
        <h1>Checkout 🧾</h1>
      </div>

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
                <div className="checkout-item-details">
                  <span>
                    {item.name} x {item.quantity}
                  </span>

                  {/* Show additives if they exist */}
                  {item.additives && item.additives.length > 0 && (
                    <div className="checkout-additives">
                      <em>Additives: {item.additives.join(", ")}</em>
                    </div>
                  )}
                </div>
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
            <h3>🚚 Delivery Address</h3>
            <input
              name="county"
              placeholder="County"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            />

            <input
              name="town"
              placeholder="Town"
              value={town}
              onChange={(e) => setTown(e.target.value)}
            />

            <input
              name="street"
              value={street}
              placeholder="Street / Estate"
              onChange={(e) => setStreet(e.target.value)}
            />

            <input
              name="house"
              placeholder="House Number / Apartment"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            />

            <h3>💳 Payment Method</h3>
            <div className="payment-options">
              <div className="payment-option">
                <p>Mpesa</p>
                <input
                  type="radio"
                  name={payment}
                  value="Mpesa"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-option">
                <p>Credit/Debit Card</p>
                <input
                  type="radio"
                  name={payment}
                  value="Card"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-option">
                <p>PayPal</p>
                <input
                  type="radio"
                  name={payment}
                  value="PayPal"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-option">
                <p>Cash on Delivery</p>
                <input
                  className="cash-on-delivery"
                  type="radio"
                  name={payment}
                  value="Cash"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
            </div>

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
