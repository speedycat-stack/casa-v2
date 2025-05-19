import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ConfirmVolunteerAction.css";

const ConfirmVolunteerAction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = location.state || { orderId: "" };
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleBackToOrders = () => {
    navigate("/volunteer");
  };

  const handleConfirmAction = () => {
    // Handle confirmation submission
    console.log("Confirmed action for order:", orderId);
    console.log("Phone number:", phoneNumber);
    console.log("Date:", date);
    console.log("File:", file);
    
    // Navigate back to volunteer page after submission
    navigate("/volunteer");
  };

  return (
    <div className="confirm-volunteer-container">
      <div className="confirm-form-box">
        <h2 className="confirm-title">Confirm Volunteer Action</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label>Phone number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="+218"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              value={date}
              onChange={handleDateChange}
              placeholder="DD/MM/YYYY"
              className="form-input"
            />
          </div>
        </div>
        
        <div className="upload-section">
          <h3>Upload Confirmation Photo</h3>
          <div className="upload-area">
            <div className="image-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 15L16 10L5 21" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="upload-instruction">Please take a picture of the delivery or location as proof (Max 100KB)</p>
            <div className="file-input-container">
              <label className="choose-file-btn">
                Choose File
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </label>
              <span className="file-name">{file ? file.name : "No File Chosen"}</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="back-btn" onClick={handleBackToOrders}>
            Back to Orders
          </button>
          <button className="confirm-btn" onClick={handleConfirmAction}>
            CONFIRM ACTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVolunteerAction;
