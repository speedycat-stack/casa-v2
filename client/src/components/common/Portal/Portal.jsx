import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, containerId = 'portal-root' }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let element = document.getElementById(containerId);
    let created = false;

    if (!element) {
      created = true;
      element = document.createElement('div');
      element.id = containerId;
      document.body.appendChild(element);
    }

    setContainer(element);

    return () => {
      if (created && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [containerId]);

  return container ? createPortal(children, container) : null;
};

export default Portal;