import React from "react";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };

  // Sample suggested products from your assets
  const suggestedProducts = [
    {
      id: 101,
      name: "Lait - délice - 1 L",
      price: 1,
      image: "/src/assets/lait.png",
    },
    {
      id: 102,
      name: "Lait - délice - 1 L",
      price: 1,
      image: "/src/assets/hlib.jpg",
    },
    {
      id: 103,
      name: "Eau minérale",
      price: 1,
      image: "/src/assets/water.png",
    },
    {
      id: 104,
      name: "Pâtes - 500g",
      price: 1,
      image: "/src/assets/makarouna.png",
    },
  ];

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // Check if cart is empty
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <br/> <br/>
      <h1 className="cart-title">CARD</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="item-details">
                <h3>{item.name}</h3>
              </div>

              <div className="item-quantity">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, (item.quantity || 1) - 1)
                  }
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity || 1}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, (item.quantity || 1) + 1)
                  }
                  className="quantity-btn"
                >
                  +
                </button>
              </div>

              <div className="item-price">
                {item.price * (item.quantity || 1)} DT
              </div>

              <button
                className="remove-item-btn"
                onClick={() => removeItem(item.id)}
                aria-label="Remove item"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span className="summary-item-name">{item.name}</span>
              <span className="summary-item-price">
                {item.price * (item.quantity || 1)} DT
              </span>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <span>{calculateTotal()} DT</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            CONTINUE TO CHECKOUT
          </button>
        </div>
      </div>

      <div className="complete-order-section">
        <h2>To Complete Your Order</h2>
        <div className="suggested-products">
          {suggestedProducts.map((product) => (
            <div key={product.id} className="suggested-product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} DT</p>
              <button className="add-btn" onClick={() => addToCart(product)}>
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
