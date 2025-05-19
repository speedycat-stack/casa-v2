
import React from 'react';
import './Partners.css'; 


import L1 from "../../assets/L1.png";
import L2 from "../../assets/L2.png";
import L3 from "../../assets/L3.png";
import L4 from "../../assets/L4.png";
import L5 from "../../assets/L5.png";

const Partners = () => {
  return (
    <div className="partners-content">
      <h2>Our Partners</h2>
      <div className="partners-logos">
       
        <div className="logo-row">
          <img src={L1} alt="Partner 1" />
          <img src={L2} alt="Partner 2" />
          <img src={L3} alt="Partner 3" />
          <img src={L4} alt="Partner 4" />
          <img src={L5} alt="Partner 5" />
          <img src={L1} alt="Partner 6" />
          <img src={L3} alt="Partner 7" />
          <img src={L5} alt="Partner 5" />
          <img src={L1} alt="Partner 6" />
          <img src={L3} alt="Partner 7" />
        </div>
      
        <div className="logo-row">
          <img src={L3} alt="Partner 8" />
          <img src={L1} alt="Partner 1" />
          <img src={L5} alt="Partner 2" />
          <img src={L4} alt="Partner 3" />
          <img src={L3} alt="Partner 4" />
          <img src={L2} alt="Partner 5" />
          <img src={L1} alt="Partner 6" />
          <img src={L5} alt="Partner 5" />
          <img src={L1} alt="Partner 6" />
          <img src={L3} alt="Partner 7" />
    
        
        </div>
      </div>
    </div>
  );
};

export default Partners;
