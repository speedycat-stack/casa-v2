import React, { useRef, useEffect } from 'react';
import './TextArea.css';

const TextArea = ({
  value,
  onChange,
  label,
  error,
  placeholder,
  rows = 3,
  maxRows = 10,
  autoResize = true,
  disabled = false,
  className = '',
  ...props
}) => {
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }

    if (autoResize) {
      adjustHeight();
    }
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(
      textarea.scrollHeight,
      maxRows * parseInt(getComputedStyle(textarea).lineHeight)
    );
    textarea.style.height = `${newHeight}px`;
  };

  useEffect(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize]);

  const textareaClasses = [
    'textarea-field',
    error ? 'textarea-error' : '',
    disabled ? 'textarea-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="textarea-container">
      {label && (
        <label className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        className={textareaClasses}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        {...props}
      />
      {error && <span className="textarea-error-message">{error}</span>}
    </div>
  );
};

export default TextArea;