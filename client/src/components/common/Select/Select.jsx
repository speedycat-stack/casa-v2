import React, { useState, useRef, useEffect } from 'react';
import './Select.css';

const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  isMulti = false,
  isSearchable = true,
  isClearable = true,
  disabled = false,
  error,
  label,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOptions = isMulti
    ? options.filter(option => value?.includes(option.value))
    : options.find(option => option.value === value);

  const handleOptionClick = (option) => {
    if (isMulti) {
      const newValue = value?.includes(option.value)
        ? value.filter(v => v !== option.value)
        : [...(value || []), option.value];
      onChange(newValue);
    } else {
      onChange(option.value);
      setIsOpen(false);
    }
    if (!isMulti) {
      setSearchTerm('');
    }
  };

  const handleRemoveValue = (optionValue, event) => {
    event.stopPropagation();
    const newValue = value.filter(v => v !== optionValue);
    onChange(newValue);
  };

  const handleClear = (event) => {
    event.stopPropagation();
    onChange(isMulti ? [] : null);
    setSearchTerm('');
    inputRef.current?.focus();
  };

  const selectClasses = [
    'select-container',
    isOpen ? 'select-open' : '',
    error ? 'select-error' : '',
    disabled ? 'select-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={selectClasses} ref={containerRef}>
      {label && (
        <label className="select-label">
          {label}
        </label>
      )}
      <div
        className="select-control"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="select-value">
          {isMulti ? (
            <div className="select-multi-value">
              {selectedOptions?.map(option => (
                <div key={option.value} className="select-tag">
                  {option.label}
                  <button
                    className="select-tag-remove"
                    onClick={(e) => handleRemoveValue(option.value, e)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          ) : (
            selectedOptions?.label || placeholder
          )}
        </div>
        {isSearchable && isOpen && (
          <input
            ref={inputRef}
            type="text"
            className="select-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search..."
          />
        )}
        <div className="select-indicators">
          {isClearable && value && (
            <button
              className="select-clear-indicator"
              onClick={handleClear}
            >
              ×
            </button>
          )}
          <span className="select-dropdown-indicator">▼</span>
        </div>
      </div>
      {isOpen && !disabled && (
        <div className="select-menu">
          {filteredOptions.length === 0 ? (
            <div className="select-no-options">No options</div>
          ) : (
            filteredOptions.map(option => (
              <div
                key={option.value}
                className={`select-option ${
                  (isMulti ? value?.includes(option.value) : value === option.value)
                    ? 'select-option-selected'
                    : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
      {error && <div className="select-error-message">{error}</div>}
    </div>
  );
};

export default Select;