import React from "react";
import { NavLink, Outlet } from "react-router-dom"; // Ne pas oublier l'import de Outlet
import "./ProfileP.css";

const ProfileP = () => {
  return (
    <div className="account-container">
      <header className="account-header">
        <h1>WE MAKE A BIG CHANGE</h1>
      </header>

      <main className="account-main">
        {/* Sidebar */}
        <aside className="account-sidebar">
          <div className="user-profile">
            <div className="profile-icon">
              W
              <span className="profile-badge">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <span className="profile-title">Orders</span>
          </div>

          <nav className="sidebar-nav">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="account"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Your Account
            </NavLink>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Your Orders
            </NavLink>
            <NavLink
              to="traceability"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Traceability
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Manage Your Account
            </NavLink>
            <NavLink to="logout" className="nav-link">
              Logout
            </NavLink>
          </nav>
        </aside>

        {/* Content */}
        <div className="account-content">
          <Outlet />{" "}
          {/* Ceci rendra les sous-composants comme Orders, Traceability, etc. */}
        </div>
      </main>
    </div>
  );
};

export default ProfileP;
