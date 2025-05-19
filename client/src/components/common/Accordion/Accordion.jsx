import React, { useState } from 'react';
import './Accordion.css';

export const AccordionContext = React.createContext({});

const Accordion = ({
  children,
  multiple = false,
  defaultExpanded = [],
  className = ''
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleItem = (itemId) => {
    if (multiple) {
      setExpanded(prev => 
        prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setExpanded(prev => 
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  const accordionClasses = [
    'accordion',
    className
  ].filter(Boolean).join(' ');

  return (
    <AccordionContext.Provider value={{ expanded, toggleItem }}>
      <div className={accordionClasses}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({
  children,
  id,
  className = ''
}) => {
  const { expanded, toggleItem } = React.useContext(AccordionContext);
  const isExpanded = expanded.includes(id);

  const itemClasses = [
    'accordion-item',
    isExpanded ? 'accordion-expanded' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={itemClasses}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isExpanded,
            onToggle: () => toggleItem(id)
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionHeader = ({
  children,
  isExpanded,
  onToggle,
  className = ''
}) => {
  const headerClasses = [
    'accordion-header',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={headerClasses}
      onClick={onToggle}
      aria-expanded={isExpanded}
    >
      {children}
      <span className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}>
        ▼
      </span>
    </button>
  );
};

export const AccordionContent = ({
  children,
  isExpanded,
  className = ''
}) => {
  const contentClasses = [
    'accordion-content',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={contentClasses}
      style={{
        height: isExpanded ? 'auto' : 0,
        opacity: isExpanded ? 1 : 0,
        overflow: 'hidden'
      }}
    >
      <div className="accordion-content-inner">
        {children}
      </div>
    </div>
  );
};

export default Accordion;