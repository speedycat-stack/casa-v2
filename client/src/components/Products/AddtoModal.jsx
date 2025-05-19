import React from "react";
import "./AddtoModal.css";

import laitImg from "../../assets/lait.png";
import hrisaCapImg from "../../assets/hrisaCap.png";
import faaImg from "../../assets/faa.png";
import maakrnaImg from "../../assets/maakrna.png";

const AddtoModal = ({ product, onClose }) => {
  if (!product) return null;

  const suggestedProducts = [
    { id: 1, name: "Lait Délice 1L", price: "1 DT", image: laitImg },
    { id: 2, name: "Harissa Cap Bon", price: "1 DT", image: hrisaCapImg },
    { id: 3, name: "Farina 1kg", price: "1 DT", image: faaImg },
    { id: 4, name: "Makarouna", price: "1 DT", image: maakrnaImg },
    { id: 5, name: "Lait Délice", price: "1 DT", image: laitImg },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="added-product">
          <img src={product.image} alt={product.name} className="added-product-img" />
          <div className="added-product-info">
            <h3>{product.name} Added to Cart</h3>
            <p className="product-price">Price: {product.price}</p>
            <div className="modal-buttons">
              <button className="cart-btn">VIEW CART</button>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>

        <h4 className="suggestion-title">To complete your order</h4>
        <div className="products-container">
          <div className="arrow-left">‹</div>
          <div className="products-row">
            {suggestedProducts.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button className="plus-btn">+</button>
              </div>
            ))}
          </div>
          <div className="arrow-right">›</div>
        </div>
      </div>
    </div>
  );
};

export default AddtoModal;
