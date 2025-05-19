import React from 'react';
import './profil.css';

const Profil = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="info-grid">
          <div className="info-item">
            <p><span>First Name</span> : <span>Wiem</span></p>
          </div>
          <div className="info-item">
            <p><span>Last Name</span> : <span>Heni</span></p>
          </div>
          <div className="info-item">
            <p><span>Email</span> : <span>wiemheni6@gmail.com</span></p>
          </div>
          <div className="info-item">
            <p><span>Location:</span> <span>Bouargoub, Nabeul, Tunisia</span></p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Profil;
