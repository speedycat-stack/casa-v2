import React from 'react';
import './Orders.css';

const Orders = () => {
  console.log("Orders component rendered");
  const orders = [
    { id: '04855665', amount: '30DT', address: 'Nabeul', date: '27-08-2024', status: 'Confirmed' },
    { id: '04855665', amount: '57DT', address: 'Nabeul', date: '27-08-2024', status: 'Canceled' },
    { id: '04855665', amount: '33DT', address: 'Nabeul', date: '27-08-2024', status: 'Confirmed' },
    { id: '04855665', amount: '330DT', address: 'Nabeul', date: '27-08-2024', status: 'Confirmed' },
    { id: '04855665', amount: '40DT', address: 'Nabeul', date: '27-08-2024', status: 'Canceled' },
    { id: '04855665', amount: '30DT', address: 'Nabeul', date: '27-08-2024', status: 'Confirmed' },
    { id: '04855665', amount: '57DT', address: 'Nabeul', date: '27-08-2024', status: 'Canceled' },
  ];

  return (
    <div className="container">
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr className="table-header">
              <th>Order Number</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="table-row">
                <td>{order.id}</td>
                <td>{order.amount}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td className="see-more">See more</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
