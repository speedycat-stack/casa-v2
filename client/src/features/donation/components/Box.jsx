import React from 'react';
import { Link } from 'react-router-dom';
import { useDonation } from '../hooks/useDonation';
import './Box.css';

const Box = () => {
  const { items, totalAmount, removeItem, updateQuantity } = useDonation();

  return (
    <div className="donation-box">
      {items.length === 0 ? (
        <div className="empty-box">
          <p>Your donation box is empty</p>
          <Link to="/products" className="continue-shopping">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="box-items">
            {items.map(item => (
              <div key={item.id} className="box-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price} DT</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="box-summary">
            <div className="total">
              <span>Total Amount:</span>
              <span>{totalAmount} DT</span>
            </div>
            <Link to="/donation/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Box;