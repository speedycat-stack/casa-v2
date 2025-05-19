import React, { useState } from "react";
import "./Box.css";
import laitImg from "../../assets/lait.png";
import hrisaCapImg from "../../assets/hrisaCap.png";
import faaImg from "../../assets/faa.png";
import maakrnaImg from "../../assets/maakrna.png";
import { Link, useNavigate } from "react-router-dom";

const suggestedProducts = [
  { id: 1, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 2, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 3, name: "Hrisa Cap", price: "2DT", image: hrisaCapImg },
  { id: 4, name: "Faa", price: "2DT", image: faaImg },
  { id: 5, name: "Maakrna", price: "3DT", image: maakrnaImg },
  { id: 6, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 7, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 8, name: "Hrisa Cap", price: "2DT", image: hrisaCapImg },
  { id: 9, name: "Faa", price: "2DT", image: faaImg },
  { id: 10, name: "Maakrna", price: "3DT", image: maakrnaImg },
  { id: 11, name: "Maakrna", price: "3DT", image: maakrnaImg },
  { id: 12, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 13, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 14, name: "Hrisa Cap", price: "2DT", image: hrisaCapImg },
  { id: 15, name: "Faa", price: "2DT", image: faaImg },
  { id: 16, name: "Maakrna", price: "3DT", image: maakrnaImg },
  { id: 17, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 18, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 19, name: "Hrisa Cap", price: "2DT", image: hrisaCapImg },
  { id: 20, name: "Faa", price: "2DT", image: faaImg },
  { id: 21, name: "Maakrna", price: "3DT", image: maakrnaImg },
  { id: 22, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 23, name: "Lait - délice - 1 L", price: "1DT", image: laitImg },
  { id: 24, name: "Hrisa Cap", price: "2DT", image: hrisaCapImg },
];

const Box = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 10;

  const handleNext = () => {
    if (currentIndex + productsPerPage < suggestedProducts.length) {
      setCurrentIndex(currentIndex + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - productsPerPage >= 0) {
      setCurrentIndex(currentIndex - productsPerPage);
    }
  };

  const displayedProducts = suggestedProducts.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <div className="card-container">
      <div className="card-title">CARD</div>

      <div className="product-list">
        <div className="product-item">
          <img src={faaImg} alt="Product" />
          <div className="product-info">
            <p>Lorem Ipsum Dolor</p>
            <div className="product-options">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <span>3 DT</span>
            </div>
            <button className="remove-btn">X</button>
          </div>
        </div>
        <div className="product-item">
          <img src={laitImg} alt="Product" />
          <div className="product-info">
            <p>Lorem Ipsum Dolor</p>
            <div className="product-options">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <span>1.2 DT</span>
            </div>
            <button className="remove-btn">X</button>
          </div>
        </div>
        <div className="product-item">
          <img src={maakrnaImg} alt="Product" />
          <div className="product-info">
            <p>Lorem Ipsum Dolor</p>
            <div className="product-options">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <span>7 DT</span>
            </div>
            <button className="remove-btn">X</button>
          </div>
        </div>
      </div>

      <div className="suggestion-section">
        <h4 className="suggestion-title">To Complete Your Order</h4>
        <div className="products-container">
          <div className="arrow-left" onClick={handlePrev} style={{ cursor: 'pointer' }}>‹</div>
          <div className="products-row">
            {displayedProducts.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button className="plus-btn">+</button>
              </div>
            ))}
          </div>
          <div className="arrow-right" onClick={handleNext} style={{ cursor: 'pointer' }}>›</div>
        </div>
      </div>

      <div className="checkout-button-container">
        <button
          className="proceed-checkout-btn"
          onClick={() => navigate('/donation/checkout')}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Box;