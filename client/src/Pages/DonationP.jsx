import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './DonationP.css';

const DonationP = () => {
  const navigate = useNavigate();

  return (
    <div className="donation-container">
      <header className="donation-header">
        <h1>Donation Process</h1>
      </header>

      <main className="donation-main">
        {/* Order Summary Section - Fixed */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <p>Lorem Ipsum</p>
            <p>300 DT</p>
          </div>
          <div className="summary-item">
            <p>Lorem Ipsum</p>
            <p>300 DT</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>600 DT</p>
          </div>
          <button
            className="checkout-btn"
            onClick={() => navigate('/donation/checkout')}
          >
            CONTINUE TO CHECKOUT
          </button>
        </div>

        {/* Main Content Area - Dynamic via Outlet */}
        <div className="donation-content">
          <Outlet />
        </div>
      </main>

      
    </div>
  );
};

export default DonationP;