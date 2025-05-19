import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({
  children,
  vertical = false,
  size = 'medium',
  className = ''
}) => {
  const groupClasses = [
    'button-group',
    vertical ? 'button-group-vertical' : '',
    `button-group-${size}`,
    className
  ].filter(Boolean).join(' ');

  // Clone children to pass button group context
  const buttons = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: `${child.props.className || ''} button-group-item`
      });
    }
    return child;
  });

  return (
    <div className={groupClasses} role="group">
      {buttons}
    </div>
  );
};

export default ButtonGroup;