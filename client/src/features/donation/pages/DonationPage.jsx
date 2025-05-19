import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDonation } from '../hooks/useDonation';
import './DonationPage.css';

const DonationPage = () => {
  const { totalAmount, itemCount } = useDonation();

  return (
    <div className="donation-page">
      <div className="donation-header">
        <h1>Make a Difference</h1>
        <div className="donation-summary">
          <span>Items: {itemCount}</span>
          <span>Total: {totalAmount} DT</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DonationPage;