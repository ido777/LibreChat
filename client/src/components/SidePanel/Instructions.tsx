import React, { useState, useEffect } from 'react';

const DEFAULT_DIRECTION: 'rtl' | 'ltr' = 'rtl';

interface StepType {
  title: string;
  content: string;
  direction: 'ltr' | 'rtl';
}

interface InstructionType {
  title: string;
  direction: 'ltr' | 'rtl';
  steps: StepType[];
}

const Instructions = ({ htmlInstructions }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [parsedInstructions, setParsedInstructions] = useState<InstructionType | null>(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlInstructions, 'text/html');
    const title = doc.querySelector('h1#main-title')?.textContent || 'Default Title';
    const steps = Array.from(doc.querySelectorAll('h2')).map((h2) => ({
      title: h2.textContent || 'Default Step Title',
      content: h2.nextElementSibling?.innerHTML || 'No content',
      direction: DEFAULT_DIRECTION,
    }));

    setParsedInstructions({ title, direction: DEFAULT_DIRECTION, steps });
  }, [htmlInstructions]);

  if (!parsedInstructions) {
    return <div>Loading...</div>; // Or some other placeholder content
  }

  const { title, steps, direction } = parsedInstructions;
  const titleStyle: React.CSSProperties = {
    direction: direction,
    textAlign: direction === 'rtl' ? 'right' : 'left',
  };

  return (
    <div>
      <h2 className="instructions-header" style={titleStyle}>
        {title}
      </h2>
      {steps.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px', direction }}>
          <h3
            onClick={() => setCurrentStepIndex(index)}
            style={{
              cursor: 'pointer',
              textDecoration: currentStepIndex === index ? 'underline' : 'none',
              color: currentStepIndex === index ? 'blue' : 'black',
            }}
          >
            {step.title}
          </h3>
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
