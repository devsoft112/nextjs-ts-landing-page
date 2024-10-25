// src/sections/HowItWorks.tsx

import Image from 'next/image';
import React, { useState } from 'react';

import DownloadButton from '@/components/DownloadButton';
import VerticalStepper from '@/components/Stepper';

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(steps[0].id);
  const [isImageLoading, setIsImageLoading] = useState(true); // Manage loading state

  const handleStepChange = (stepId: number) => {
    setSelectedStep(stepId);
    setIsImageLoading(true); // Set loading to true when step changes
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // Set loading to false once the image is fully loaded
  };

  return (
    <section className='py-16 px-2 bg-[#F2F5FB]'>
      <div className='container mx-auto text-center'>
        {/* Section Title */}
        <p className='text-orange-500 font-semibold'>How It Works</p>
        <h3 className='text-4xl md:text-5xl font-light mt-4 max-w-lg mx-auto'>
          <span className='font-extrabold'>How</span> Does{' '}
          <span className='text-blue-600 font-extrabold'>RUSH Gigs</span>{' '}
          <span className='font-extrabold'>Work ?</span>
        </h3>
      </div>

      <div className='container flex flex-col md:flex-row mx-auto py-12 md:py-32 items-center'>
        {/* Right - Image */}
        <div className='flex flex-col items-center w-full md:w-3/5 mb-16 md:mb-0'>
          <div
            className='relative w-full h-[400px] bg-gray-100 flex items-center justify-center'
            style={{ minHeight: '400px' }}
          >
            {isImageLoading && (
              <div className='absolute inset-0 flex items-center justify-center'>
                {/* Placeholder or loading animation */}
                <Image
                  src='/images/loading_mock.png'
                  alt='Loading...'
                  width={400}
                  height={200}
                  className='object-contain'
                />
              </div>
            )}

            {selectedStep === 1 && (
              <Image
                src='/images/apps_step1.png'
                alt='Step 1 Image'
                width={1000}
                height={500}
                className='object-contain'
                onLoadingComplete={handleImageLoad} // Fire once image is loaded
              />
            )}
            {selectedStep === 2 && (
              <Image
                src='/images/apps_step2.png'
                alt='Step 2 Image'
                width={1000}
                height={500}
                className='object-contain'
                onLoadingComplete={handleImageLoad}
              />
            )}
            {selectedStep === 3 && (
              <Image
                src='/images/apps_step3.png'
                alt='Step 3 Image'
                width={1000}
                height={500}
                className='object-contain'
                onLoadingComplete={handleImageLoad}
              />
            )}
          </div>
        </div>

        <div className='w-full md:w-2/5'>
          <VerticalStepper
            activeStep={selectedStep}
            onStepChange={handleStepChange}
          />
        </div>
      </div>

      {/* Download Buttons */}
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
