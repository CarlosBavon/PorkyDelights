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
  const [formData, setFormData] = useState({
    mpesaNumber: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: "",
    paypalEmail: "",
  });
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {

    e.preventDefault();
    fetch("http://localhost:5000/api/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: total,
        accountNumber: accountNumber,
        phone: phone,
        email: email,
        name: name,
        county: county,
        town: town,
        street: street,
        house: house,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrderPlaced(true);
        localStorage.removeItem("cart");
      })
      .catch((error) => {
        console.error(error);
      });

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
                  name="payment"
                  value="Mpesa"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-option">
                <p>Credit/Debit Card</p>
                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-option">
                <p>PayPal</p>
                <input
                  type="radio"
                  name="payment"
                  value="PayPal"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <div className="payment-option">
                <p>Cash on Delivery</p>
                <input
                  type="radio"
                  name="payment"
                  value="Cash"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
            </div>

            {/* Conditional Fields */}
            {payment === "Mpesa" && (
              <div className="payment-details">
                <label>Mpesa Phone Number:</label>
                <input
                  type="tel"
                  placeholder="0700 000 000"
                  value={formData.mpesaNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, mpesaNumber: e.target.value })
                  }
                />
              </div>
            )}

            {payment === "Card" && (
              <div className="payment-details">
                <label>Card Number:</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, cardNumber: e.target.value })
                  }
                />
                <label>Name on Card:</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={(e) =>
                    setFormData({ ...formData, cardName: e.target.value })
                  }
                />
                <label>Expiry Date:</label>
                <input
                  type="month"
                  value={formData.cardExpiry}
                  onChange={(e) =>
                    setFormData({ ...formData, cardExpiry: e.target.value })
                  }
                />
                <label>CVV:</label>
                <input
                  type="password"
                  placeholder="123"
                  value={formData.cardCVV}
                  onChange={(e) =>
                    setFormData({ ...formData, cardCVV: e.target.value })
                  }
                />
              </div>
            )}

            {payment === "PayPal" && (
              <div className="payment-details">
                <label>PayPal Email:</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.paypalEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, paypalEmail: e.target.value })
                  }
                />
              </div>
            )}

            {payment === "Cash" && (
              <div className="payment-details">
                <p>💵 Please have the exact amount ready upon delivery.</p>
              </div>
            )}

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
