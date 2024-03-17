import React, { useState, useEffect } from 'react';
import { EModelEndpoint } from 'librechat-data-provider';
import { useGetEndpointsQuery, useGetStartupConfig } from 'librechat-data-provider/react-query';
import type { ReactNode } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '~/components/ui';
import { useChatContext, useAssistantsMapContext } from '~/Providers';
import { BirthdayIcon } from '~/components/svg';
import { getEndpointField } from '~/utils';
import { useLocalize } from '~/hooks';
import { cn } from '~/utils';

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
  const [isVisible, setIsVisible] = useState(true);

  const { conversation } = useChatContext();
  const assistantMap = useAssistantsMapContext();
  const localize = useLocalize();

  const [expertSteps, setExpertSteps] = useState(null);

  useEffect(() => {
    fetch('/steps/expert.json') // Adjust the path as necessary. Typically something like '/steps/expert.json' if in public directory
      .then((response) => response.json())
      .then((data) => {
        setExpertSteps(data);
        console.log('This is the assistantMap :', assistantMap);
        console.log(data); // For testing to see the fetched data
      })
      .catch((error) => console.error('Error fetching expert steps:', error));
  }, []);

  let { endpoint } = conversation ?? {};
  const { assistant_id = null } = conversation ?? {};

  if (
    endpoint === EModelEndpoint.chatGPTBrowser ||
    endpoint === EModelEndpoint.azureOpenAI ||
    endpoint === EModelEndpoint.gptPlugins
  ) {
    endpoint = EModelEndpoint.openAI;
  }

  const assistant = endpoint === EModelEndpoint.assistants && assistantMap?.[assistant_id ?? ''];
  const assistantName = (assistant && assistant?.name) || '';
  const assistantDesc = (assistant && assistant?.description) || '';

  // const [direction1, setDirection] = useState('rtl');

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
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={toggleVisibility}
        className={cn(
          'flex items-center justify-center rounded-md border border-transparent px-4 py-2',
          'text-base font-medium transition duration-150 ease-in-out',
          'hover:bg-gray-200 dark:hover:bg-gray-700', // Matching the Attach Files hover state
          'cursor-pointer select-none', // Add more classes as needed to match the Attach Files style
          isVisible ? 'bg-white dark:bg-gray-900' : '', // Adjust based on visibility
        )}
        style={titleStyle}
      >
        <span>
          {title} {isVisible ? '-' : '+'}
        </span>
      </button>
      {isVisible && (
        <div>
          {parsedInstructions.steps.map((step, index) => (
            <div key={index} className="mb-5">
              <button
                onClick={() => setCurrentStepIndex(index)}
                className={cn(
                  'flex w-full items-center justify-start rounded-md border border-transparent px-4 py-2 text-left',
                  'font-medium transition duration-150 ease-in-out',
                  'cursor-pointer select-none',
                  currentStepIndex === index
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white hover:bg-gray-200 dark:bg-gray-900 dark:text-white',
                )}
                style={titleStyle}
              >
                {step.title} {currentStepIndex === index ? ' - ' : '(לחץ לפתיחה)'}
              </button>
              {currentStepIndex === index && (
                <div
                  dangerouslySetInnerHTML={{ __html: step.content }}
                  style={{ border: '1px solid gray', padding: '10px', direction: step.direction }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Instructions;

//   return (
//     <div className="flex flex-col items-center">
//       {' '}
//       {/* Ensure the container centers its children */}
//       <button
//         onClick={toggleVisibility}
//         className={cn(
//           'my-4', // Adds margin to the top and bottom for spacing
//           'px-6 py-2', // Adjust padding as needed
//           'rounded-md border border-transparent',
//           'text-base font-medium transition duration-150 ease-in-out',
//           'hover:bg-gray-200 dark:hover:bg-gray-700',
//           'cursor-pointer select-none',
//           isVisible ? 'bg-white dark:bg-gray-900' : '',
//         )}
//         style={{ direction, width: 'fit-content' }} // Use 'fit-content' to size button width based on its content
//       >
//         Instructions {isVisible ? '-' : '+'}
//       </button>
//       {isVisible && (
//         <div className="w-full">
//           {' '}
//           {/* Ensure the steps container takes the full width */}
//           {parsedInstructions.steps.map((step, index) => (
//             <div key={index} className="mb-5">
//               <button
//                 onClick={() => setCurrentStepIndex(index === currentStepIndex ? null : index)}
//                 className={cn(
//                   'flex w-full items-center justify-start px-4 py-2',
//                   'text-left font-medium transition duration-150 ease-in-out',
//                   'cursor-pointer select-none',
//                   'rounded-md border border-transparent',
//                   currentStepIndex === index
//                     ? 'bg-indigo-600 text-white hover:bg-indigo-700'
//                     : 'bg-white hover:bg-gray-200 dark:bg-gray-900 dark:text-white',
//                 )}
//                 style={{ direction }}
//               >
//                 {step.title} {currentStepIndex === index ? '-' : '+'}
//               </button>
//               {currentStepIndex === index && (
//                 <div
//                   dangerouslySetInnerHTML={{ __html: step.content }}
//                   style={{
//                     border: '1px solid gray',
//                     padding: '10px',
//                     direction,
//                     textAlign: direction === 'rtl' ? 'right' : 'left',
//                   }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
