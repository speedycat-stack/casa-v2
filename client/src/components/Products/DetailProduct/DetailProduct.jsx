import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetailProduct.css";
import useProducts from "../../../features/products/hooks/useProducts";
import { useCart } from "../../../contexts/CartContext";
import AddedToCartModal from "../AddedToCartModal/AddedToCartModal";

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { product, loading, error, products } = useProducts(id);
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product) {
      // Add product to cart with the selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }

      // Show modal with confirmation
      setShowModal(true);
    }
  };

  // Format details as a paragraph
  const formatDetailsAsParagraph = (details) => {
    if (!details) return "";

    let paragraphText = "";
    for (const [key, value] of Object.entries(details)) {
      paragraphText += `${key}: ${value}. `;
    }
    return paragraphText;
  };

  if (loading) {
    return (
      <div className="detail-product">
        <div className="detail-container">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="detail-product">
        <div className="detail-container">
          <h2>Product not found</h2>
          <p>{error}</p>
          <button onClick={() => navigate("/products")} className="back-btn">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-product">
      <div className="detail-container">
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="product-info-section">
          <div className="product-ean">{product.ean}</div>
          <h1 className="product-title">{product.name}</h1>

          <div className="product-price">{product.price}DT</div>

          <div className="quantity-info">
            <span className="quantity-label">Quantity: </span>
            <span className="quantity-value">{product.quantity}</span>
          </div>

          <div className="product-details">
            <h3>Details:</h3>
            <p className="details-paragraph">
              {formatDetailsAsParagraph(product.details)}
            </p>
          </div>

          <div className="quantity-selector">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="quantity-btn"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="quantity-input"
            />
            <button
              onClick={() => handleQuantityChange(1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>

          <div className="action-buttons">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              ADD TO CART
            </button>
            <button onClick={() => navigate("/cart")} className="buy-now-btn">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Added to Cart Modal */}
      {showModal && (
        <AddedToCartModal
          product={product}
          onClose={() => setShowModal(false)}
          recommendedProducts={products
            .slice(0, 3)
            .filter((p) => p.id !== product.id)}
        />
      )}
    </div>
  );
};

export default DetailProduct;
