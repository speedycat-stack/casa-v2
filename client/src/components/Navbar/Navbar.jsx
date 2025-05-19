import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/C-blanc.png";

const Navbar = ({ linkColor = "#FFFFFF", logoSrc = logo }) => {
  const location = useLocation();
  const [isInscription, setIsInscription] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isMapPage =
    location.pathname === "/map" || location.pathname.includes("/map");

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

  useEffect(() => {
    if (location.pathname === "/inscription") {
      setIsInscription(true);
    } else {
      setIsInscription(false);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced home click handler - always do a hard refresh when coming from product page
  const handleHomeClick = (e) => {
    e.preventDefault();
    // Force a complete page reload
    window.location.href = "/";
  };

  // Get link color based on current page and link type
  const getLinkColor = (linkType) => {
    if (isMapPage) {
      // On Map page, MAP is blue, others are gray
      if (linkType === "MAP") {
        return "#0066cc"; // Blue color for MAP
      } else {
        return "#777777"; // Gray color for other links
      }
    } else {
      // On other pages, use the passed linkColor prop
      return linkColor;
    }
  };

  return (
    <div
      className={`custom-navbar ${isInscription ? "inscription-navbar" : ""}`}
    >
      <img src={logoSrc} alt="Logo" className="custom-logo" />

      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </div>
      )}

      <ul className={`custom-nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={handleHomeClick}
            style={{ color: getLinkColor("HOME") }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link to="/product" style={{ color: getLinkColor("PRODUCT") }}>
            PRODUCT
          </Link>
        </li>
        <li>
          <Link to="/map" style={{ color: getLinkColor("MAP") }}>
            MAP
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: getLinkColor("CONTACT") }}>
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="custom-right">
        <Link to="/cart">
          <span className="cart-icon">🛒</span>
        </Link>
        <Link to="/auth/register">
          <button className="join-btn">JOIN US</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
