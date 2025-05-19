import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import farinaImg from "../../assets/farina.png";
import hlibImg from "../../assets/hlib.jpg";
import hrissaImg from "../../assets/hrissa.png";
import makarounaImg from "../../assets/makarouna.png";
import laitImg from "../../assets/lait.png";
import waterImg from "../../assets/water.png";
import appleImg from "../../assets/apple.png";
import ProductModal from "./ProductModal";
import AddtoModal from "./AddtoModal";

const products = [
  {
    id: "619404300201",
    name: "Farina",
    price: "1DT",
    image: farinaImg,
    details: {
      Packaging: "Paper bag",
      Brands: "Local",
      Categories: "Grains, Flour",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisie",
    },
  },
  {
    id: "619404300202",
    name: "Hlib Délice",
    price: "1DT",
    image: hlibImg,
    details: {
      Packaging: "Plastic bottle",
      Brands: "Délice",
      Categories: "Dairy, Milk",
      Labels: "Fresh",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisie",
    },
  },
  { id: "3", name: "Hrissa", price: "1DT", image: hrissaImg },
  { id: "4", name: "Makarouna", price: "1DT", image: makarounaImg },
  { id: 5, name: "Farina", price: "1DT", image: farinaImg },
  { id: 6, name: "Hlib Délice", price: "1DT", image: hlibImg },
  { id: 7, name: "Hrissa", price: "1DT", image: hrissaImg },
  { id: 8, name: "Makarouna", price: "1DT", image: makarounaImg },
  { id: 9, name: "Hlib Délice", price: "1DT", image: hlibImg },
  {
    id: "10",
    name: "Lait UHT",
    price: "1.5DT",
    image: laitImg,
    details: {
      Packaging: "Tetrapak",
      Brands: "Vitalait",
      Categories: "Dairy, Milk, UHT",
      Labels: "UHT",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
    },
  },
  {
    id: "11",
    name: "Eau Minérale",
    price: "0.8DT",
    image: waterImg,
    details: {
      Packaging: "Plastic bottle",
      Brands: "Safia",
      Categories: "Beverages, Water",
      Labels: "Natural, Mineral",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
    },
  },
  {
    id: "12",
    name: "Pommes",
    price: "3DT",
    image: appleImg,
    details: {
      Packaging: "None",
      Categories: "Fruits, Fresh produce",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
    },
  },
  {
    id: "13",
    name: "Farina Premium",
    price: "1.2DT",
    image: farinaImg,
    details: {
      Packaging: "Paper bag",
      Brands: "Premium",
      Categories: "Grains, Flour, Premium",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
    },
  },
  {
    id: "14",
    name: "Makarouna Spéciale",
    price: "1.3DT",
    image: makarounaImg,
    details: {
      Packaging: "Plastic bag",
      Brands: "Spéciale",
      Categories: "Pasta, Premium",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
    },
  },
  {
    id: "15",
    name: "Hrissa Piquante",
    price: "1.5DT",
    image: hrissaImg,
    details: {
      Packaging: "Glass jar",
      Brands: "Sicam",
      Categories: "Condiments, Hot sauce",
      Labels: "Piquante",
      "Origin of ingredients": "Tunisia",
      "Manufacturing or processing places": "Tunisia",
    },
  },
];

const Product = () => {
  const navigate = useNavigate();
  const [modalProduct, setModalProduct] = useState(null);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const returnToHome = () => {
    window.location.href = "/";
  };

  // Return button styles
  const returnButtonStyle = {
    backgroundColor: "#7FB5FF",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
    marginBottom: "20px",
    marginLeft: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  };

  return (
    <>
      {/* Return button added here */}
      <div style={{ padding: "20px 0 0 20px" }}>
        <button
          onClick={returnToHome}
          style={returnButtonStyle}
          title="Return to Home"
        >
          ←
        </button>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleProductClick(product)}
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
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
