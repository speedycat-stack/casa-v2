import React from "react";
import "./ThankYouPopup.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ThankYouPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    navigate("/"); // Navigate to home page after closing
  };

  return (
    <div className="thank-you-overlay">
      <div className="thank-you-popup">
        <div className="heart-icon">
          <FaHeart />
        </div>
        <h2>THANK YOU!</h2>
        <p className="main-message">Your Donation Has Been Created</p>
        <p className="details-message">
          Thank you for your donation! To ensure that it reaches the right
          recipient, please verify its delivery. Once your donation has been
          successfully delivered, you will receive a confirmation photo via
          email. Kindly check your inbox to confirm.
        </p>
        <button className="close-button" onClick={handleClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ThankYouPopup;
