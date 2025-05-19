import React from 'react';
import './Badge.css';

const Badge = ({ 
  children,
  variant = 'primary',
  size = 'medium',
  dot = false,
  count,
  max = 99,
  className = ''
}) => {
  const classes = [
    'badge',
    `badge-${variant}`,
    `badge-${size}`,
    dot ? 'badge-dot' : '',
    className
  ].filter(Boolean).join(' ');

  const content = dot ? null : (
    count !== undefined ? (
      <span className="badge-count">
        {count > max ? `${max}+` : count}
      </span>
    ) : children
  );

  return (
    <span className={classes}>
      {content}
    </span>
  );
};

export default Badge;