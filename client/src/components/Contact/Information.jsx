import React from "react";
import "./Information.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Information = () => {
  return (
    <div className="info-container">
      <h3>contact</h3>
      <h2>Contact Us</h2>
      <p>We are here to answer your questions.</p>
      <div className="info-grid">
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>Email</p>
          <span>Contact us by email</span>
          <span>CASA@email.com</span>
        </div>
        <div className="info-item">
          <FaPhone className="info-icon" />
          <p>Phone</p>
          <span>Call us for assistance</span>
          <span>+216 27068954</span>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>Bureau</p>
          <span>CASA HQ, Tunisia</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
