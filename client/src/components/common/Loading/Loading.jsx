import React from 'react';
import './Loading.css';

const Loading = ({ size = 'medium', overlay = false }) => {
  const classes = [
    'loading-spinner',
    `spinner-${size}`,
    overlay ? 'loading-overlay' : ''
  ].filter(Boolean).join(' ');

  const spinner = (
    <div className={classes} role="status">
      <div className="spinner"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (overlay) {
    return (
      <div className="loading-container">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loading;