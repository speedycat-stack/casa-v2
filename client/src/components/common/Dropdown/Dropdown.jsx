import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ 
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);

  const dropdownClasses = [
    'dropdown',
    isOpen ? 'dropdown-open' : '',
    error ? 'dropdown-error' : '',
    disabled ? 'dropdown-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      {label && (
        <label className="dropdown-label">
          {label}
        </label>
      )}
      <div 
        className={dropdownClasses}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="dropdown-selected">
          {selectedOption ? selectedOption.label : placeholder}
        </div>
        <span className="dropdown-arrow">▼</span>
        {isOpen && !disabled && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${option.value === value ? 'selected' : ''}`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <span className="dropdown-error-message">{error}</span>}
    </div>
  );
};

export default Dropdown;