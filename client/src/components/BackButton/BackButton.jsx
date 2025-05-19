import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ arrowColor = "white", customClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (customClick) {
      customClick();
    } else {
      navigate(-1); // Use React Router's navigate(-1) instead of window.history.back()
    }
  };

  return (
    <div className="back-button" onClick={handleClick}>
      <span style={{ color: arrowColor }}>&#8592;</span>
    </div>
  );
};

export default BackButton;
