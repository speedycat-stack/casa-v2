import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../../contexts/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    donationArea: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContinue = () => {
    // Navigate to the payment page
    navigate("/payment");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-form">
          <h1>CHECKOUT</h1>

          <div className="checkout-steps">
            <div className="step-text-container">
              <span className="step-text active">Address</span>
              <span className="step-text">Payment</span>
            </div>
            <div className="step-line">
              <div className="step-line-active"></div>
            </div>
          </div>

          <p className="shipping-info-text">Shipping Information</p>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="form-row">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />

              <select
                name="donationArea"
                value={formData.donationArea}
                onChange={handleChange}
                className="donation-area-select"
              >
                <option value="">Your Donation Area</option>
                <option value="tunis">Tunis</option>
                <option value="ariana">Ariana</option>
                <option value="ben_arous">Ben Arous</option>
                <option value="manouba">Manouba</option>
                <option value="nabeul">Nabeul</option>
                <option value="zaghouan">Zaghouan</option>
                <option value="bizerte">Bizerte</option>
                <option value="beja">Béja</option>
                <option value="jendouba">Jendouba</option>
                <option value="kef">Kef</option>
                <option value="siliana">Siliana</option>
                <option value="sousse">Sousse</option>
                <option value="monastir">Monastir</option>
                <option value="mahdia">Mahdia</option>
                <option value="sfax">Sfax</option>
                <option value="kairouan">Kairouan</option>
                <option value="kasserine">Kasserine</option>
                <option value="sidi_bouzid">Sidi Bouzid</option>
                <option value="gabes">Gabès</option>
                <option value="medenine">Médenine</option>
                <option value="tataouine">Tataouine</option>
                <option value="gafsa">Gafsa</option>
                <option value="tozeur">Tozeur</option>
                <option value="kebili">Kébili</option>
              </select>
            </div>

            <div className="save-info">
              <input
                type="checkbox"
                id="save-info"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
              />
              <label htmlFor="save-info">Save contact informations</label>
            </div>
          </div>

          <button className="continue-btn" onClick={handleContinue}>
            CONTINUE TO SHIPPING
          </button>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span className="item-name">
                  {item.name} {item.quantity > 1 ? `× ${item.quantity}` : ""}
                </span>
                <span className="item-price">
                  {item.price * (item.quantity || 1)} DT
                </span>
              </div>
            ))
          ) : (
            <>
              <div className="summary-item">
                <span className="item-name">No items in cart</span>
                <span className="item-price">0 DT</span>
              </div>
            </>
          )}

          <div className="summary-total">
            <span>Total</span>
            <span>
              {cartItems && cartItems.length > 0
                ? `${getCartTotal()} DT`
                : "0 DT"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
