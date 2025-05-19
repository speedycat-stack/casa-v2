import React, { useState } from "react";
import "./VolunteerP.css";

const VolunteerP = () => {
  // Sample data for volunteer orders
  const volunteerOrders = [
    { id: "04596995", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "24000995", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "24333335", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "02089995", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "24505995", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "24444445", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "04090095", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "24026005", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "44444005", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "04070905", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "24420095", type: "Milk, Tomatoes, Bread", eggs: true },
    { id: "44442405", type: "Milk, Tomatoes, Bread", eggs: true },
  ];

  // Function to handle volunteer order selection
  const handleSelect = (orderId) => {
    console.log(`Selected order: ${orderId}`);
    // Implementation for selecting an order would go here
  };

  return (
    <div className="volunteer-page">
      <div className="volunteer-hero-banner">
        <div className="hero-overlay">
          <h1>VOLUNTEER</h1>
        </div>
      </div>

      <div className="volunteer-orders-grid">
        {volunteerOrders.map((order, index) => (
          <div
            key={order.id}
            className={`order-card ${index % 2 === 0 ? "dark" : "light"}`}
          >
            <div className="order-card-content">
              <div className="order-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="order-details">
                <p className="order-label">Order Number</p>
                <p className="order-id">{order.id}</p>
                <p className="order-items">{order.type}</p>
                {order.eggs && <p className="order-eggs">Eggs</p>}
              </div>
            </div>
            <button
              className={`order-btn ${
                index % 2 === 0 ? "next-dark" : "next-light"
              }`}
              onClick={() => handleSelect(order.id)}
            >
              NEXT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerP;
