import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="modal-image" />
        <p className="product-price"><strong>Price:</strong> {product.price}</p>
        <div className="modal-buttons">
          <button className="cart-btn" onClick={() => onAddToCart(product)}>ADD TO CART</button>
          <button className="buy-btn">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;