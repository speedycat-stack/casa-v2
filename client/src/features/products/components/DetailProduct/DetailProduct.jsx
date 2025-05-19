import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './DetailProduct.css';

const DetailProduct = () => {
  const { id } = useParams();
  const { product, loading, error } = useProducts(id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
  };

  if (loading) return <div className="detail-product">Loading...</div>;
  if (error) return <div className="detail-product">Error: {error}</div>;
  if (!product) return <div className="detail-product">Product not found</div>;

  return (
    <div className="detail-product">
      <div className="detail-container">
        <div className="product-image-section">
          <img src={product?.image} alt={product?.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-title">{product?.name}</h1>
          <div className="product-id">Product ID: {product?.id}</div>
          
          <div className="product-price">{product?.price}DT</div>
          
          <div className="product-details">
            <h3>Details:</h3>
            {product?.details && Object.entries(product?.details).map(([key, value]) => (
              <div key={key} className="detail-item">
                <span className="detail-label">{key}:</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)} className="quantity-btn">-</button>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="quantity-input"
            />
            <button onClick={() => handleQuantityChange(1)} className="quantity-btn">+</button>
          </div>

          <div className="action-buttons">
            <button onClick={handleAddToCart} className="add-to-cart-btn">ADD TO CART</button>
            <button onClick={() => navigate('/donation')} className="buy-now-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;