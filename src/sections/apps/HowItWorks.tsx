import Image from 'next/image';
import React, { useState } from 'react';

import DownloadButton from '@/components/DownloadButton';

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(steps[0].id);

  return (
    <section className='py-16 bg-[#F2F5FB]'>
      <div className='container mx-auto text-center'>
        {/* Section Title */}
        <p className='text-orange-500 font-semibold'>How It Works</p>
        <h3 className='text-4xl font-bold mt-4'>
          How Does <span className='text-black'>RUSH Gigs</span>{' '}
          <span className='text-blue-600'>Work ?</span>
        </h3>
      </div>

      <div className='container flex mx-auto py-12'>
        <div className='flex flex-col md:flex-row md:items-start w-full lg:w-1/2'>
          <div className='flex flex-col'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                className='flex items-start mb-8 cursor-pointer'
                onClick={() => setSelectedStep(step.id)}
              >
                <div
                  className={`p-4 flex items-center justify-center rounded-full border-2 ${
                    selectedStep === step.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <div className='ml-4'>
                  <h3
                    className={`text-lg font-semibold ${
                      selectedStep === step.id
                        ? 'text-blue-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {step.title}
                  </h3>
                  {selectedStep === step.id && (
                    <p className='mt-2 text-gray-500'>{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center space-y-8 w-full lg:w-1/2'>
          <Image
            src='/images/apps_step1.png'
            alt='Step 1'
            width={400}
            height={500}
          />
          {/* <Image
              src='/images/apps_step2.png'
              alt='Step 2'
              width={400}
              height={500}
            />
            <Image
              src='/images/apps_step3.png'
              alt='Step 3'
              width={400}
              height={500}
            /> */}
        </div>
      </div>
      <div className='mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8'>
        <DownloadButton
          platform='App Store'
          background='orange'
          className='w-full md:w-auto'
        />
        <DownloadButton
          platform='Play Market'
          background='orange'
          className='w-full md:w-auto'
        />
      </div>
    </section>
  );
}

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
