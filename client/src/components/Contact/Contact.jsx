import React from "react";
import "./Contact.css";
import Information from "./Information"; 

const Contact = () => {
  return (
    <div className="contact-wrapper">

      <div className="contact-container">
        <h3 className="contact-tagline">Contact</h3>
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We are here to answer your questions.</p>

        <form className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" required />
          <input type="email" placeholder="Your Email Address" className="contact-input" required />
          <textarea placeholder="Write Your Message..." className="contact-textarea" required></textarea>

          <div className="contact-checkbox">
            <input type="checkbox" id="terms" className="checkbox-input" />
            <label htmlFor="terms" className="checkbox-label">I accept the Terms</label>
          </div>

          <button type="submit" className="contact-submit">SEND</button>
        </form>
      </div>

    
    </div>
  );
};

export default Contact;
