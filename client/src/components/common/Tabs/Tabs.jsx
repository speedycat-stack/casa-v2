import React, { useState } from 'react';
import './Tabs.css';

export const TabContext = React.createContext({});

const Tabs = ({
  children,
  defaultTab,
  onChange,
  variant = 'default',
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  const tabsClasses = [
    'tabs',
    `tabs-${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <TabContext.Provider value={{ activeTab, onTabChange: handleTabChange }}>
      <div className={tabsClasses}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

export const TabList = ({ children, className = '' }) => {
  const tabListClasses = [
    'tab-list',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={tabListClasses} role="tablist">
      {children}
    </div>
  );
};

export const Tab = ({
  children,
  id,
  disabled = false,
  className = ''
}) => {
  const { activeTab, onTabChange } = React.useContext(TabContext);
  const isActive = activeTab === id;

  const tabClasses = [
    'tab',
    isActive ? 'tab-active' : '',
    disabled ? 'tab-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={tabClasses}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      onClick={() => !disabled && onTabChange(id)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const TabPanels = ({ children, className = '' }) => {
  const panelsClasses = [
    'tab-panels',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={panelsClasses}>
      {children}
    </div>
  );
};

export const TabPanel = ({
  children,
  id,
  className = ''
}) => {
  const { activeTab } = React.useContext(TabContext);
  const isActive = activeTab === id;

  const panelClasses = [
    'tab-panel',
    isActive ? 'tab-panel-active' : '',
    className
  ].filter(Boolean).join(' ');

  if (!isActive) return null;

  return (
    <div
      className={panelClasses}
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={id}
    >
      {children}
    </div>
  );
};

export default Tabs;