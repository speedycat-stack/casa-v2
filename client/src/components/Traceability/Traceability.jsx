import React from 'react';
import './Traceability.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Traceability = () => {
  const orders = [
    {
      id: 1,
      status: 'delivered',
      orderNumber: '#5489672',
      date: 'April 10, 2025',
      location: 'Tunis',
      progress: 100,
      color: 'green',
    },
    {
      id: 2,
      status: 'processing',
      orderNumber: '#5489672',
      date: 'April 15, 2025',
      location: 'Nabeul',
      progress: 33,
      color: 'red',
    },
    {
      id: 3,
      status: 'delivered',
      orderNumber: '#5489672',
      date: 'April 10, 2025',
      location: 'Tunis',
      progress: 100,
      color: 'green',
    },
  ];

  return (
    <div className="traceability-container">
      <div className="orders-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

const OrderCard = ({ order }) => {
  return (
    <article className="order-card">
      <div className="card-header">
        <div className={`status ${order.color}`}>
          <span className="status-dot"></span>
          {order.status}
        </div>
        <button className="details-button">
          <FaExternalLinkAlt />
        </button>
      </div>

      <div className="order-details">
        <p>
          <span>Order:</span>
          {order.orderNumber}
        </p>
        <p>
          <span>Date:</span>
          {order.date}
        </p>
        <p>
          <span>Location:</span>
          {order.location}
        </p>
      </div>

      <div className="progress-bar-container">
        <span>Processing</span>
        <div className={`progress-bar ${order.color}-bg`}>
          <div
            className={`progress ${order.color}`}
            style={{ width: `${order.progress}%` }}
          >
            <span className="progress-dot"></span>
          </div>
        </div>
        <span>Delivered</span>
      </div>
    </article>
  );
};

export default Traceability;
