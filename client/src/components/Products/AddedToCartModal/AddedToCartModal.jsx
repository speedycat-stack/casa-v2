import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddedToCartModal.css";
import { useCart } from "../../../contexts/CartContext";

const AddedToCartModal = ({ product, onClose, recommendedProducts = [] }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddRecommendedToCart = (recommendedProduct) => {
    addToCart(recommendedProduct);
  };

  const handleViewCart = () => {
    navigate("/cart");
    onClose();
  };

  const handleBuyNow = () => {
    navigate("/checkout");
    onClose();
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 150, behavior: "smooth" });
      setCurrentIndex(
        Math.min(currentIndex + 1, recommendedProducts.length - 1)
      );
    }
  };

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <div className="success-icon">✓</div>
          <h2>Product Added to Cart Successfully</h2>
        </div>
        <div className="added-product">
          <img
            src={product.image}
            alt={product.name}
            className="added-product-img"
          />
          <div className="added-product-info">
            <h3>{product.name}</h3>
            <p className="product-ean">{product.ean}</p>
            <p className="product-price">{product.price} DT</p>
            <div className="modal-buttons">
              <button className="cart-btn" onClick={handleViewCart}>
                ADD TO CART
              </button>
              <button className="buy-btn" onClick={handleBuyNow}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>{" "}
        {recommendedProducts.length > 0 && (
          <div className="recommendations-section">
            <h4 className="recommendation-title">To complete your order</h4>
            <div className="recommendations-container">
              <div className="recommendations-slider" ref={sliderRef}>
                {recommendedProducts.map((item) => (
                  <div key={item.id} className="recommended-product">
                    <img src={item.image} alt={item.name} />
                    <div className="recommended-product-info">
                      <h5>{item.name}</h5>
                      <p className="recommended-product-price">
                        {item.price} DT
                      </p>
                      <button
                        className="add-recommended-btn"
                        onClick={() => handleAddRecommendedToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {currentIndex < recommendedProducts.length - 1 && (
                <button className="nav-btn next-btn" onClick={scrollRight}>
                  ›
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedToCartModal;
