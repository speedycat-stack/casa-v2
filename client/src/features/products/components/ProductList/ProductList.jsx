import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleProductClick(product.id)}
        >
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}DT</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
