import React, { useState, useEffect, useRef } from 'react';
import Portal from '../Portal/Portal';
import './Menu.css';

export const MenuContext = React.createContext({});

const Menu = ({
  children,
  trigger,
  placement = 'bottom-start',
  offset = 8,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'bottom-start':
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case 'bottom-end':
        top = triggerRect.bottom + offset;
        left = triggerRect.right - menuRect.width;
        break;
      case 'top-start':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.left;
        break;
      case 'top-end':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.right - menuRect.width;
        break;
      default:
        break;
    }

    setPosition({ top, left });
  };

  const handleTriggerClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !triggerRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [isOpen]);

  const menuClasses = [
    'menu',
    isOpen ? 'menu-open' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={triggerRef} onClick={handleTriggerClick}>
        {trigger}
      </div>
      {isOpen && (
        <Portal containerId="menu-root">
          <div
            ref={menuRef}
            className={menuClasses}
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`
            }}
          >
            {children}
          </div>
        </Portal>
      )}
    </MenuContext.Provider>
  );
};

export const MenuItem = ({
  children,
  icon,
  disabled = false,
  onClick,
  className = ''
}) => {
  const { setIsOpen } = React.useContext(MenuContext);

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
      setIsOpen(false);
    }
  };

  const itemClasses = [
    'menu-item',
    disabled ? 'menu-item-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={itemClasses}
      onClick={handleClick}
      disabled={disabled}
      role="menuitem"
    >
      {icon && <span className="menu-item-icon">{icon}</span>}
      {children}
    </button>
  );
};

export const MenuDivider = () => <div className="menu-divider" />;

export default Menu;