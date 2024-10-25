// src/components/VerticalStepper.tsx

import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Step 1: Register and Create Your Profile',
    description: `Download the RUSH Gigs app and register using your phone. Complete your profile by providing information about your skills, work experience, and contact details to increase your chances of successfully finding jobs or workers.`,
  },
  {
    id: 2,
    title: 'Step 2: Search for Opportunities or Candidates',
    description: `Use the search feature to find job openings or potential workers in your area. Apply filters to refine your results based on specialization, distance, or type of employment. Save interesting job listings or profiles for quick access later.`,
  },
  {
    id: 3,
    title: 'Step 3: Connect and Start Collaborating',
    description: `Once you find a suitable opportunity or candidate, use the built-in chat feature to reach out to the employer or worker. Discuss collaboration details, work conditions, and agree on next steps. With RUSH Gigs, it’s simple – your new opportunity is just a click away!`,
  },
];

export default function VerticalStepper({
  activeStep,
  onStepChange,
}: {
  activeStep: number;
  onStepChange: (stepId: number) => void;
}) {
  return (
    <div className='flex items-start py-8'>
      {/* Start of the Stepper */}
      <div className='relative flex flex-col items-center'>
        {/* Start Connector */}
        <div className='w-full flex flex-row justify-between'>
          <div className='w-[2px] h-10 bg-gradient-to-b from-transparent to-blue-300 mb-3 flex-start ml-6'></div>
        </div>

        {steps.map((step, index) => (
          <div className='flex flex-row' key={index}>
            <div className='flex flex-col items-center'>
              {/* Step Circle */}
              <div
                onClick={() => onStepChange(step.id)} // Trigger step change
                className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded-full text-gray-800 font-bold text-xl mb-4 ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' // Active step style
                    : 'bg-white text-blue-500 border-2 border-gray-300'
                }`}
              >
                {step.id}
              </div>

              {/* Connector below the circle (except for the last step) */}
              {index !== steps.length - 1 && (
                <div className='w-[2px] h-24 bg-gradient-to-t from-transparent via-blue-300 to-transparent'></div>
              )}
            </div>

            <div className='ml-8 mt-2 mb-10'>
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  activeStep === step.id ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {step.title}
              </h3>
              <p className='text-gray-500'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
