import React, { useState, useEffect } from 'react';
import './Alert.css';

const Alert = ({ 
  type = 'info',
  message,
  duration = 5000,
  onClose,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, isVisible, onClose]);

  if (!isVisible) return null;

  const alertClasses = [
    'alert',
    `alert-${type}`,
    className
  ].filter(Boolean).join(' ');

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={alertClasses} role="alert" {...props}>
      <span className="alert-icon">{icons[type]}</span>
      <p className="alert-message">{message}</p>
      {onClose && (
        <button 
          className="alert-close"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;