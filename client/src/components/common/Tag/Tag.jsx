import React from 'react';
import './Tag.css';

const Tag = ({
  children,
  variant = 'default',
  size = 'medium',
  removable = false,
  onRemove,
  className = '',
  ...props
}) => {
  const tagClasses = [
    'tag',
    `tag-${variant}`,
    `tag-${size}`,
    className
  ].filter(Boolean).join(' ');

  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <span className={tagClasses} {...props}>
      {children}
      {removable && (
        <button
          type="button"
          className="tag-remove"
          onClick={handleRemove}
          aria-label="Remove tag"
        >
          ×
        </button>
      )}
    </span>
  );
};

// Predefined tag variants
export const SuccessTag = (props) => (
  <Tag variant="success" {...props} />
);

export const ErrorTag = (props) => (
  <Tag variant="error" {...props} />
);

export const WarningTag = (props) => (
  <Tag variant="warning" {...props} />
);

export const InfoTag = (props) => (
  <Tag variant="info" {...props} />
);

export default Tag;