import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Toast.css';

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 5000) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);

    if (duration) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const value = {
    addToast,
    removeToast
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const ToastContainer = ({ toasts }) => {
  return ReactDOM.createPortal(
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>,
    document.body
  );
};

const Toast = ({ id, message, type }) => {
  const { removeToast } = useToast();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    return () => setIsExiting(true);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      removeToast(id);
    }, 200);
  };

  const toastClasses = [
    'toast',
    `toast-${type}`,
    isExiting ? 'toast-exit' : 'toast-enter'
  ].filter(Boolean).join(' ');

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={toastClasses} role="alert">
      <div className="toast-icon">{icons[type]}</div>
      <div className="toast-content">{message}</div>
      <button className="toast-close" onClick={handleClose}>
        ✕
      </button>
    </div>
  );
};

export default Toast;