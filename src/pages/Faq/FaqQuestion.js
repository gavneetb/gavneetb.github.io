import React, { useState } from 'react';

import Accordion from '../../components/Accordion/Accordion';

export default function FaqQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>{question}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Show Question</button>
      <Accordion isOpen={isOpen}>
        <h2>{answer}</h2>
      </Accordion>
    </div>
  );
}
