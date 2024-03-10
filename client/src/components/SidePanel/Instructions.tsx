import React, { useState, useEffect } from 'react';
import Step from './Step'; // Ensure the path is correct

const Instructions = ({ htmlInstructions }) => {
  const [showSteps, setShowSteps] = useState(false);
  const [parsedInstructions, setParsedInstructions] = useState({
    title: '',
    direction: 'ltr', // Assuming default direction; adjust as needed
    steps: [],
  });

  const toggleSteps = () => setShowSteps(!showSteps);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlInstructions, 'text/html');

    const title = doc.querySelector('title') ? doc.querySelector('title').innerText : '';
    // Assuming the direction is defined in the HTML; adjust if it's specified elsewhere
    const direction = doc.body.style.direction || 'ltr';

    const h2Elements = doc.querySelectorAll('h2');
    type StepType = {
      title: string;
      content: string;
    };
    const steps: StepType[] = [];

    h2Elements.forEach((h2) => {
      const content = h2.nextElementSibling ? h2.nextElementSibling.innerHTML : '';
      steps.push({
        title: h2.textContent || 'Default Title', // Provide a default title if null
        content: content,
      });
    });

    setParsedInstructions({ title, direction, steps });
  }, [htmlInstructions]);

  const titleStyle: React.CSSProperties = {
    direction: parsedInstructions.direction as 'ltr' | 'rtl', // Assuring TypeScript that direction is either 'ltr' or 'rtl'
    textAlign: parsedInstructions.direction === 'rtl' ? 'right' : 'left',
  };

  return (
    <>
      <div
        className="instructions-toggle-section"
        onClick={toggleSteps}
        style={{ cursor: 'pointer', borderBottom: '1px solid #ccc', padding: '10px' }}
      >
        <h2 className="instructions-header" style={titleStyle}>
          {parsedInstructions.title}
        </h2>
      </div>
      {showSteps && (
        <div
          className="instructions-detail-section"
          style={{ padding: '10px', direction: parsedInstructions.direction }}
        >
          {parsedInstructions.steps.map((step, index) => (
            <Step
              key={index}
              title={`Step ${index + 1}: ${step.title}`}
              content={step.content}
              direction={parsedInstructions.direction}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Instructions;
