import React, { useEffect } from 'react';
import Portal from '../Portal/Portal';
import './Dialog.css';

const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  closeOnOverlay = true,
  size = 'medium',
  fullScreen = false,
  className = ''
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlay) {
      onClose();
    }
  };

  const dialogClasses = [
    'dialog',
    `dialog-${size}`,
    fullScreen ? 'dialog-fullscreen' : '',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <div className="dialog-overlay" onClick={handleOverlayClick}>
      <div className={dialogClasses} role="dialog" aria-modal="true">
        <div className="dialog-header">
          {typeof title === 'string' ? (
            <h2 className="dialog-title">{title}</h2>
          ) : title}
          <button 
            className="dialog-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
        <div className="dialog-content">
          {children}
        </div>
        {actions && (
          <div className="dialog-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Portal>
      {content}
    </Portal>
  );
};

export default Dialog;