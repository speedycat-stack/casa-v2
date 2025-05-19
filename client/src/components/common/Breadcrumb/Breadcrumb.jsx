import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [], separator = '/', className = '' }) => {
  const classes = ['breadcrumb', className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li 
              key={item.path || index}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
            >
              {isLast || !item.path ? (
                <span>{item.label}</span>
              ) : (
                <>
                  <Link to={item.path}>{item.label}</Link>
                  <span className="breadcrumb-separator">{separator}</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;