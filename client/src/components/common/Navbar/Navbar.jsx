import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoBlanc from "../../../assets/C-blanc.png";
import logoBleu from "../../../assets/C-bleu.png";
import profileImg from "../../../assets/profill.png";

const NAVBAR_CONFIGS = {
  default: {
    logo: logoBlanc,
    links: [
      { to: "/", label: "Home" },
      { to: "/products", label: "Products" },
      { to: "/map", label: "Map" },
      { to: "/contact", label: "Contact" },
    ],
  },
  profile: {
    logo: logoBleu,
    links: [
      { to: "/", label: "HOME" },
      { to: "/products", label: "PRODUCT" },
      { to: "/map", label: "MAP" },
      { to: "/contact", label: "CONTACT" },
    ],
  },
  donation: {
    logo: logoBlanc,
    links: [
      { to: "/donation/box", label: "Box" },
      { to: "/donation/checkout", label: "Checkout" },
      { to: "/donation/payment", label: "Payment" },
    ],
  },
};

const BackButton = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <button onClick={goBack} className="back-button" aria-label="Go back">
      <svg className="back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" fill="currentColor"/>
      </svg>
    </button>
  );
};

const Navbar = ({ variant = "default", showBackButton = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const config = NAVBAR_CONFIGS[variant];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      {showBackButton && <BackButton />}
      <nav
        className={`custom-navbar ${
          variant === "inscription" ? "inscription-navbar" : ""
        } ${variant === "profile" ? "profile-variant" : ""}`}
      >
        <div className="logo-wrapper">
          <img src={config.logo} alt="Logo" className="custom-logo" />
        </div>

        {isMobile && (
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </div>
        )}

        <ul className={`custom-nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
          {config.links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="custom-right">
          <Link to="/cart" className="cart-icon">
            🛒
          </Link>
          {variant === "profile" ? (
            <Link to="/profile/dashboard" className="profile-img-link">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </Link>
          ) : (
            <Link to="/join" className="join-btn">
              Join Us
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;