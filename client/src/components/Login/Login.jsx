import React from "react";
import "./Login.css";
import googleIcon from "../../assets/googl.png"; 
import facebookIcon from "../../assets/facbk.png";  

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>LOGIN</h2>
        <p>Please enter your information to log in</p>
        
        <div className="social-icons">
          <div className="social-icon">
            <img src={googleIcon} alt="Google" />
          </div>
          <div className="social-icon">
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-btn">LOGIN</button>
          
          <div className="footer">
            <p>Not a member yet? <a href="/auth/register">Create an account</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
