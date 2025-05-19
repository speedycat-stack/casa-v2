import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import logoLight from "../../assets/CASA-ICON.png";
import logoDark from "../../assets/C-blanc.png";

import locationIcon from "../../assets/icone-localisation.png";
import mailIcon from "../../assets/icone-mail.png";
import phoneIcon from "../../assets/icon-phone.png";

const Footer = ({
  variant = "dark",
  logoType = "light",
  hideNewsletter = false,
}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const footerClass = `footer-container footer-${variant}`;
  const logo = logoType === "dark" ? logoDark : logoLight;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError("Veuillez entrer une adresse email");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Veuillez entrer une adresse email valide");
      return;
    }
    
   
    setEmailError("");
    alert("Merci pour votre inscription!");
    setEmail("");
  };

  return (
    <footer className={footerClass}>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src={logo} alt="CASA Logo" className="footer-logo" />
          </div>
          <div className="footer-text-container">
            <p className="footer-text">
              At CASA, we are committed to supporting the homeless community 
              by providing essential resources and services. Our mission is 
              to combat food insecurity by offering nutritious meals and 
              fostering a sense of dignity and hope among those in need. 
              Through collaboration with local partners and community engagement,
              we strive to create a sustainable impact, ensuring that every 
              individual has access to the essentials for a healthier and more fulfilling life. Together, we can make a difference and build a brighter future for everyone.
            </p>
          </div>
        </div>

        <div className="footer-right">
          {!hideNewsletter && (
            <div className="newsletter-container">
              <h3 className="newsletter-title">NEWSLETTER</h3>
              <form onSubmit={handleSubmit} className="newsletter">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-button">
                  <FaArrowRight />
                </button>
              </form>
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
          )}

          <div className="footer-info-container">
            <div className="footer-nav-container">
              <nav className="footer-nav">
                <ul className="footer-nav-list">
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/product">PRODUCT</Link></li>
                  <li><Link to="/map">MAP</Link></li>
                  <li><Link to="/contact">CONTACT</Link></li>
                </ul>
              </nav>
            </div>

            <div className="contact-info-container">
              <div className="contact-item">
                <img src={locationIcon} alt="Location" className="contact-icon" />
                <span className="contact-text">Lorem Ipsum Dolor, Consectetur Vivamus</span>
              </div>
              <div className="contact-item">
                <img src={mailIcon} alt="Email" className="contact-icon" />
                <span className="contact-text">CASA@gmail.com</span>
              </div>
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone" className="contact-icon" />
                <span className="contact-text">+216 27068954</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img src={logoDark} alt="CASA Logo Small" className="footer-icon" />
          <span>&copy; 2024 All rights reserved.</span>
        </div>
        <div className="social-links-container">
          <div className="social-links">
            <a href="#">X</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;