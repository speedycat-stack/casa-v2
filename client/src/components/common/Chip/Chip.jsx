import React from 'react';
import './Chip.css';

const Chip = ({
  label,
  onDelete,
  icon,
  variant = 'default',
  size = 'medium',
  disabled = false,
  clickable = false,
  className = '',
  ...props
}) => {
  const chipClasses = [
    'chip',
    `chip-${variant}`,
    `chip-${size}`,
    disabled ? 'chip-disabled' : '',
    clickable ? 'chip-clickable' : '',
    className
  ].filter(Boolean).join(' ');

  const handleDelete = (e) => {
    e.stopPropagation();
    if (!disabled && onDelete) {
      onDelete();
    }
  };

  return (
    <div
      className={chipClasses}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable && !disabled ? 0 : undefined}
      {...props}
    >
      {icon && (
        <span className="chip-icon">
          {icon}
        </span>
      )}
      <span className="chip-label">{label}</span>
      {onDelete && (
        <button
          type="button"
          className="chip-delete"
          onClick={handleDelete}
          disabled={disabled}
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Chip;