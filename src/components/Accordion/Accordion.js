import React from 'react';

import './Accordion.css';

const Accordion = ({ children, isOpen }) => {
  return (
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
};

export default Accordion;
