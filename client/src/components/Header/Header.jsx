import React, { useState } from "react";
import "./Header.css";
import DonationPopup from "../DonationPopup/DonationPopup";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({
  bgImage,
  variant = "light",
  showHero = true,
  customTitle = "WE MAKE A BIG CHANGE",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);
  const headerStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  // Check if current page is product page
  const isProductPage =
    location.pathname === "/product" ||
    location.pathname.startsWith("/product/");

  // Handler for return button click
  const handleReturnClick = () => {
    window.location.href = "/";
  };

  // Return button style
  const returnButtonStyle = {
    position: "absolute",
    top: "100px",
    left: "50px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#7FB5FF",
    color: "white",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  return (
    <header className={`header header-${variant}`} style={headerStyle}>
      <div className="navbar">
        {/* Return button shown only on product pages */}
        {isProductPage && customTitle === "PRODUCT" && (
          <button
            style={returnButtonStyle}
            onClick={handleReturnClick}
            aria-label="Return to home"
          >
            ←
          </button>
        )}
      </div>
      {showHero && (
        <div className="hero">
          <h1 className="hero-title">{customTitle}</h1>
          {customTitle === "WE MAKE A BIG CHANGE" && (
            <>
              <p className="hero-text">
                Join us in making a big change for the homeless and shaping a
                brighter future together
              </p>
              <button
                className="donate-btn"
                onClick={() => setIsDonationPopupOpen(true)}
              >
                MAKE A DONATION
              </button>
            </>
          )}
        </div>
      )}
      <DonationPopup
        isOpen={isDonationPopupOpen}
        onClose={() => setIsDonationPopupOpen(false)}
      />
    </header>
  );
};

export default Header;
