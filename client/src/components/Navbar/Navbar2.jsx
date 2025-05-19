import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar2.css";
import logoBlanc from "../../assets/C-blanc.png";

const Navbar2 = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced home click handler - always do a hard refresh
  const handleHomeClick = (e) => {
    e.preventDefault();
    // Force a complete page reload
    window.location.href = "/";
  };

  return (
    <div className="navbar2">
      <img src={logoBlanc} alt="Logo" className="navbar2-logo" />

      {/* Bouton hamburger en mode mobile */}
      {isMobile && (
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </div>
      )}

      <ul className={`navbar2-links ${isMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <Link to="/" onClick={handleHomeClick}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/map">MAP</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>

      <div className="navbar2-right">
        <Link to="/donation">
          <span className="cart-icon">🛒</span>
        </Link>
        <Link to="/inscription">
          <button className="join-btn">JOIN US</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
