import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { useCart } from "../../contexts/CartContext";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/maap.png";
import discover from "../../assets/discover.png";
import unionpay from "../../assets/postt.png";
import { FaExclamationTriangle } from "react-icons/fa";
import ThankYouPopup from "../ThankYouPopup/ThankYouPopup";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("local");
  const [showThankYou, setShowThankYou] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    saveCard: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardData({
      ...cardData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = () => {
    // Show thank you popup
    setShowThankYou(true);
  };

  const handleClosePopup = () => {
    setShowThankYou(false);
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <div className="payment-form">
          <h1>PAYMENT</h1>

          <div className="checkout-steps">
            <div className="step-text-container">
              <span className="step-text">Address</span>
              <span className="step-text active">Payment</span>
            </div>
            <div className="step-line">
              <div className="step-line-active"></div>
            </div>
          </div>

          <div className="payment-options">
            <div
              className={`payment-option ${
                paymentMethod === "local" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("local")}
            >
              <span>At Local</span>
            </div>
            <div
              className={`payment-option ${
                paymentMethod === "online" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("online")}
            >
              <span>Online</span>
            </div>
          </div>

          {paymentMethod === "local" ? (
            <div className="local-payment-info">
              <div className="warning-box">
                <span className="warning-icon">
                  <FaExclamationTriangle />
                </span>
                <h3>Payment at Our Location</h3>
                <p className="warning-text">
                  Please do not exceed the deadline for your presence at our
                  location.
                </p>
                <p className="deadline-text">(The deadline is 3 days).</p>
                <p className="cancel-text">
                  After this deadline, your order will be canceled
                </p>
              </div>
              <button className="next-btn" onClick={handlePayment}>
                NEXT
              </button>
            </div>
          ) : (
            <>
              <div className="payment-cards">
                <img src={unionpay} alt="Union Pay" className="card-logo" />
                <img src={visa} alt="Visa" className="card-logo" />
                <img src={discover} alt="Discover" className="card-logo" />
                <img src={mastercard} alt="Mastercard" className="card-logo" />
              </div>

              <div className="card-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={cardData.cardNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="securityCode"
                    placeholder="Card Security Code"
                    value={cardData.securityCode}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="expirationDate"
                    placeholder="Expiration Date"
                    value={cardData.expirationDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="save-info">
                  <input
                    type="checkbox"
                    id="save-card"
                    name="saveCard"
                    checked={cardData.saveCard}
                    onChange={handleChange}
                  />
                  <label htmlFor="save-card">
                    Save card data for future payments
                  </label>
                </div>
              </div>

              <button className="pay-btn" onClick={handlePayment}>
                PAY WITH CARD
              </button>
            </>
          )}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span className="item-name">{item.name || "Lorem ipsum"}</span>
                <span className="item-price">{item.price || 300}</span>
              </div>
            ))
          ) : (
            <>
              <div className="summary-item">
                <span className="item-name">Lorem ipsum</span>
                <span className="item-price">300</span>
              </div>
              <div className="summary-item">
                <span className="item-name">Lorem ipsum</span>
                <span className="item-price">300</span>
              </div>
            </>
          )}

          <div className="summary-total">
            <span>Total</span>
            <span>
              {cartItems && cartItems.length > 0 ? getCartTotal() : 300}
            </span>
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      <ThankYouPopup isOpen={showThankYou} onClose={handleClosePopup} />
    </div>
  );
};

export default Payment;
