import React, { useState } from "react";
import {
  FaUser,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaCog,
  FaSignOutAlt,
  FaClipboardList,
  FaRegCopy,
  FaFileAlt,
} from "react-icons/fa";
import "./Dashboard.css";

// Import necessary images
import kasserine from "../../assets/kasserine.png";
import kairouan from "../../assets/kairouan.png";
import sfax from "../../assets/sfax.png";
import tunis from "../../assets/tunis.png";
import nabeul from "../../assets/nabeul.png";
import sousse from "../../assets/sousse.png";
import mapTun from "../../assets/MapTUN.png";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [editMode, setEditMode] = useState(false);

  // User data
  const user = {
    firstName: "Wiem",
    lastName: "Heni",
    email: "Wiem@Gmail.Com",
    address: "Bourgraoub B040",
    location: "Bourgraoub, Nabeul, Tunisia",
  };

  // Sample order data
  const orders = [
    {
      id: "04855965",
      amount: "30DT",
      address: "Nabeul",
      date: "27-08-2024",
      status: "Confirmed",
    },
    {
      id: "04855965",
      amount: "57DT",
      address: "Nabeul",
      date: "27-08-2024",
      status: "canceled",
    },
    {
      id: "04855965",
      amount: "33DT",
      address: "Nabeul",
      date: "27-08-2024",
      status: "Confirmed",
    },
    {
      id: "04855965",
      amount: "330DT",
      address: "Nabeul",
      date: "27-08-2024",
      status: "Confirmed",
    },
    {
      id: "04855965",
      amount: "40DT",
      address: "Nabeul",
      date: "27-08-2024",
      status: "canceled",
    },
  ];

  const recentDonations = [
    {
      id: 1,
      amount: "150 DT",
      location: "Tunis",
      image: tunis,
      date: "May 12, 2025",
    },
    {
      id: 2,
      amount: "120 DT",
      location: "Sfax",
      image: sfax,
      date: "May 10, 2025",
    },
    {
      id: 3,
      amount: "200 DT",
      location: "Nabeul",
      image: nabeul,
      date: "May 8, 2025",
    },
    {
      id: 4,
      amount: "80 DT",
      location: "Sousse",
      image: sousse,
      date: "May 5, 2025",
    },
  ];

  const topLocations = [
    { id: 1, location: "Kasserine", donations: 3240, image: kasserine },
    { id: 2, location: "Kairouan", donations: 2150, image: kairouan },
    { id: 3, location: "Sfax", donations: 1890, image: sfax },
    { id: 4, location: "Tunis", donations: 1750, image: tunis },
  ];
  // Function to handle switching between tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setEditMode(false);
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to render user profile content
  const renderUserProfile = () => {
    if (editMode) {
      return (
        <div className="profile-edit-section">
          <h2>Edit Your Profile</h2>
          <form className="edit-profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" defaultValue={user.firstName} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" defaultValue={user.lastName} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue={user.email} />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" defaultValue={user.address} />
              </div>
            </div>
            <div className="password-section">
              <h3>Password Changes</h3>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="New Password" />
              </div>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Current Password" />
              </div>
              <div className="form-group">
                <label>Confirm New</label>
                <input type="password" placeholder="Confirm New" />
              </div>
            </div>
            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={toggleEditMode}
              >
                Cancel
              </button>
              <button type="submit" className="btn-save">
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="user-info-section">
        <div className="user-info-row">
          <div className="user-info-field">
            <span>Last Name :</span>
            <span>{user.lastName}</span>
          </div>
          <div className="user-info-field">
            <span>Last Name :</span>
            <span>{user.lastName}</span>
          </div>
        </div>
        <div className="user-info-row">
          <div className="user-info-field">
            <span>Email</span>
            <span>{user.email}</span>
          </div>
          <div className="user-info-field">
            <span>Location:</span>
            <span>{user.location}</span>
          </div>
        </div>
      </div>
    );
  };

  // Function to render orders content
  const renderOrders = () => {
    return (
      <div className="orders-section">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Order Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.amount}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td
                  className={
                    order.status.toLowerCase() === "confirmed"
                      ? "status-confirmed"
                      : "status-canceled"
                  }
                >
                  {order.status}
                </td>
                <td>
                  <button className="btn-see-more">See more</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Function to render traceability content
  const renderTraceability = () => {
    return (
      <div className="traceability-section">
        <div className="traceability-cards">
          <div className="traceability-card delivered">
            <div className="status-dot green"></div>
            <span className="status-label">Delivered</span>
            <div className="copy-icon">
              <FaRegCopy />
            </div>

            <div className="order-info">
              <p>Order:#5489672</p>
              <p>Date: April 10, 2025</p>
              <p>Location: Tunis</p>
            </div>

            <div className="progress-tracker">
              <div className="progress-bar">
                <div className="progress-fill complete"></div>
              </div>
              <div className="progress-labels">
                <span>Processing</span>
                <span>Delivered</span>
              </div>
            </div>
          </div>

          <div className="traceability-card processing">
            <div className="status-dot red"></div>
            <span className="status-label">Processing</span>
            <div className="copy-icon">
              <FaRegCopy />
            </div>

            <div className="order-info">
              <p>Order:#5489672</p>
              <p>Date: April 15, 2025</p>
              <p>Location: Nabeul</p>
            </div>

            <div className="progress-tracker">
              <div className="progress-bar">
                <div className="progress-fill partial"></div>
              </div>
              <div className="progress-labels">
                <span>Processing</span>
                <span>Delivered</span>
              </div>
            </div>
          </div>

          <div className="traceability-card delivered">
            <div className="status-dot green"></div>
            <span className="status-label">Delivered</span>
            <div className="copy-icon">
              <FaRegCopy />
            </div>

            <div className="order-info">
              <p>Order:#5489672</p>
              <p>Date: April 10, 2025</p>
              <p>Location: Tunis</p>
            </div>

            <div className="progress-tracker">
              <div className="progress-bar">
                <div className="progress-fill complete"></div>
              </div>
              <div className="progress-labels">
                <span>Processing</span>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return renderUserProfile();
      case "orders":
        return renderOrders();
      case "traceability":
        return renderTraceability();
      case "volunteering":
        return (
          <div className="volunteering-section">
            <h2>Volunteering Opportunities</h2>
            <p>No volunteering opportunities available at the moment.</p>
          </div>
        );
      case "manage":
        return (
          <div className="profile-edit-section">
            <h2>Edit Your Profile</h2>
            <form className="edit-profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    defaultValue={user.firstName}
                    placeholder="Wiem"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    defaultValue={user.lastName}
                    placeholder="Heni"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Wiem@Gmail.Com"
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    defaultValue={user.address}
                    placeholder="Bourgraoub B040"
                  />
                </div>
              </div>
              <div className="password-section">
                <h3>Password Changes</h3>
                <div className="form-group">
                  <input type="password" placeholder="New Password" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Current Password" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Confirm New" />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return renderUserProfile();
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="banner-container">
        <div className="header-banner">
          <h1>WE MAKE A BIG CHANGE</h1>
        </div>
      </div>

      <div className="user-dashboard">
        <div className="dashboard-content">
          <div className="sidebar">
            <div className="user-profile-box">
              <div className="user-avatar">
                <span>W</span>
                <span className="user-badge">p</span>
              </div>
              {activeTab !== "account" ? (
                <div className="username">
                  {user.firstName} {user.lastName}
                </div>
              ) : (
                <div className="username">Orders</div>
              )}
            </div>

            <nav className="sidebar-nav">
              <ul>
                <li
                  className={activeTab === "account" ? "active" : ""}
                  onClick={() => handleTabChange("account")}
                >
                  <FaUser /> Your Account
                </li>
                <li
                  className={activeTab === "orders" ? "active" : ""}
                  onClick={() => handleTabChange("orders")}
                >
                  <FaShoppingBag /> Your Orders
                </li>
                <li
                  className={activeTab === "traceability" ? "active" : ""}
                  onClick={() => handleTabChange("traceability")}
                >
                  <FaMapMarkerAlt /> Traceability
                </li>{" "}
                <li
                  className={activeTab === "volunteering" ? "active" : ""}
                  onClick={() => handleTabChange("volunteering")}
                >
                  <FaHandsHelping /> Volunteering
                </li>
                <li
                  className={activeTab === "manage" ? "active" : ""}
                  onClick={() => handleTabChange("manage")}
                >
                  <FaCog /> Manage Your Account
                </li>
                <li>
                  <FaSignOutAlt /> Logout
                </li>
              </ul>
            </nav>
          </div>

          <div className="main-content">
            {!editMode && activeTab === "account" && (
              <button className="btn-edit-profile" onClick={toggleEditMode}>
                Edit Profile
              </button>
            )}
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
