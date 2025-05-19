import React, { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ 
  label,
  error,
  type = 'text',
  className = '',
  required = false,
  ...props 
}, ref) => {
  const inputClasses = [
    'input-field',
    error ? 'input-error' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={inputClasses}
        required={required}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;