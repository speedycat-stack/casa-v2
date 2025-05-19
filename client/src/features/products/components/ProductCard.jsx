import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price} DT</p>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;