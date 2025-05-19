import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login"; 
import BackButton from "../components/BackButton"; 

function LoginP() {
  return (
    <div className="login-page">
      
      <BackButton />

      <div className="login-form">
        <h2>LOGIN</h2>
        <p>Please enter your information to log in</p>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit" className="login-btn">LOGIN</button>

          <div className="footer">
            <p>Not a member yet? <Link to="/inscription">Create an account</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginP;
