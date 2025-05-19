import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDonation } from '../hooks/useDonation';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalAmount } = useDonation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout and navigate to payment
    navigate('/donation/payment', {
      state: { checkoutData: { ...formData, items, totalAmount } }
    });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <h2>Donation Summary</h2>
        <div className="summary-items">
          {items.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} × {item.quantity}</span>
              <span>{item.price * item.quantity} DT</span>
            </div>
          ))}
        </div>
        <div className="summary-total">
          <span>Total Amount:</span>
          <span>{totalAmount} DT</span>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Contact Information</h2>
        
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="proceed-payment">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;