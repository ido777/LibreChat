import React, { useState, useEffect } from 'react';

const Instructions = ({ htmlInstructions }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Assume you always want to show the first step initially

  type StepType = {
    title: string;
    direction: 'ltr' | 'rtl';
    content: string;
  };

  type InstructionType = {
    title: string;
    direction: 'ltr' | 'rtl';
    steps: StepType[];
  };

  const [parsedInstructions, setParsedInstructions] = useState<InstructionType>({
    title: '',
    direction: 'ltr', // Assuming 'ltr' by default; adjust based on your actual default
    steps: [],
  });

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlInstructions, 'text/html');
    const title = doc.querySelector('title')?.innerText ?? 'Default Title';
    const direction = doc.body.getAttribute('dir') || 'ltr'; // Use getAttribute to ensure it captures HTML attributes correctly

    const steps: StepType[] = Array.from(doc.querySelectorAll('h2')).map((h2) => {
      const content = h2.nextElementSibling ? h2.nextElementSibling.innerHTML : 'No content';
      return {
        title: h2.textContent || 'Default Step Title',
        content,
        direction,
      };
    });

    setParsedInstructions({ title, direction, steps });
    // Debugging logs
    console.log({ title, direction, steps });
  }, [htmlInstructions]); // Make sure to include htmlInstructions in the dependency array

  // Inline styles for directionality and alignment based on parsed instructions
  const titleStyle: React.CSSProperties = {
    direction: parsedInstructions.direction,
    textAlign: parsedInstructions.direction === 'rtl' ? 'right' : 'left',
  };

  return (
    <div>
      {/* Debugging title and direction */}
      <h2 className="instructions-header" style={titleStyle}>
        {parsedInstructions.title} (Direction: {parsedInstructions.direction})
      </h2>
      {/* Render steps for debugging */}
      {parsedInstructions.steps.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {/* Temporary step header to toggle visibility */}
          <h3
            onClick={() => setCurrentStepIndex(index)}
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
              color: currentStepIndex === index ? 'blue' : 'black',
            }}
          >
            {step.title}
          </h3>
          {/* Only display content for the current step */}
          {currentStepIndex === index && (
            <div
              dangerouslySetInnerHTML={{ __html: step.content }}
              style={{ border: '1px solid gray', padding: '10px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Instructions;
