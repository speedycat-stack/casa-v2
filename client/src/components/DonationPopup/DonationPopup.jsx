import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationPopup.css';

const DonationPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const handleAnonymousClick = () => {
    navigate('/products');
    onClose();
  };

  const handleUserClick = () => {
    navigate('/profile/dashboard');
    onClose();
  };

  const handleVolunteerClick = () => {
    navigate('/volunteer');
    onClose();
  };

  return (
    <div className="donation-popup-overlay">
      <div className="donation-popup">
        <div className="donation-popup-content">
          <h2>Choose How You Want To Make A Donation</h2>
          <div className="donation-options">
            <button className="donation-option-btn" onClick={handleAnonymousClick}>ANONYMOUSLY</button>
            <button className="donation-option-btn" onClick={handleUserClick}>AS A USER</button>
            <button className="donation-option-btn" onClick={handleVolunteerClick}>AS A VOLUNTEER</button>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;