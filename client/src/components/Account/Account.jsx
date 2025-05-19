import React from 'react';
import './account.css';

const Account = () => {
  return (
    <div className="account-container">
      <div className="profile-form">
        <h2 className="form-title">Edit Your Profile</h2>
        <form>
          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue="Wiem"
                className="account-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                defaultValue="Heni"
                className="account-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="Wiem@Gmail.Com"
                className="account-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                defaultValue="Bouargoub 8040"
                className="account-input"
              />
            </div>
          </div>

          <h3 className="password-title">Password Changes</h3>
          <div className="password-fields">
            <input
              type="password"
              placeholder="New Password"
              className="account-input"
            />
            <input
              type="password"
              placeholder="Current Password"
              className="account-input"
            />
            <input
              type="password"
              placeholder="Confirm New"
              className="account-input"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">
              SAVE CHANGES
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;