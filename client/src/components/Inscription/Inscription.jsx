import React from "react";
import "./Inscription.css";
import googleIcon from "../../assets/googl.png";
import facebookIcon from "../../assets/facbk.png";
import image from "../../assets/enfants.png";

const Inscription = () => {
  return (
    <div className="inscription-container">
      <div className="form-container">
        <h2>INSCRIPTION</h2>
        <p>Join our community today!</p>

        <div className="social-icons">
          <div className="social-icon">
            <img src={googleIcon} alt="Google" />
          </div>
          <div className="social-icon">
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>

        <form className="form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <input type="text" placeholder="Country" className="input-field" />

          <button type="submit" className="submit-btn">
            CREATE AN ACCOUNT
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/auth/login">Log In</a>
        </p>
      </div>

      <div className="image-container">
        <img src={image} alt="People" className="image" />
      </div>
    </div>
  );
};

export default Inscription;