import Image from 'next/image';

import DownloadButton from '@/components/DownloadButton'; // Assuming this component already exists

export default function AppsHero() {
  return (
    <section className='relative bg-gradient-to-r from-purple-600 to-blue-500 text-white pt-20'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-4'>
        {/* Text Section */}
        <div className='lg:w-2/5 text-center lg:text-left max-w-xl'>
          <h1 className='text-4xl md:text-5xl font-light leading-tight mt-24'>
            A <span className='font-extrabold'>New Era</span> of{' '}
            <span className='font-extrabold'>Job</span> and{' '}
            <span className='font-extrabold'>Employee</span> Search with{' '}
            <span className='font-extrabold'>RUSH Gigs!</span>
          </h1>
          <p className='mt-4 text-sm max-w-sm'>
            RUSH Gigs is an innovative mobile app designed for anyone looking to
            easily and efficiently find jobs or employees.
          </p>
          <div className='mt-6 block md:flex items-center justify-center lg:justify-start space-x-0 md:space-x-8 my-20'>
            <div className='flex items-center justify-center md:justify-start'>
              {/* User Avatars */}
              {[...Array(3)].map((_, idx) => (
                <Image
                  key={idx}
                  src={`/images/user${idx}.jpeg`} // Replace with actual image path
                  alt={`User ${idx}`}
                  width={50}
                  height={50}
                  className='rounded-full border-2 border-white mr-[-15px]'
                />
              ))}
            </div>
            <div className='ml-4 mt-4 md:mt-0'>
              <span className='text-2xl font-bold'>310K+</span>
              <p className='text-sm'>
                Will successfully use RUSH Gigs.
                <br />
                Join today and get the most out of the service.
              </p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className='mt-8 block md:flex justify-center lg:justify-start space-x-0 md:space-x-4 my-20'>
            <DownloadButton
              platform='App Store'
              background='white'
              className='mb-4 md:mb-0 w-full md:w-auto'
            />
            <DownloadButton
              platform='Play Market'
              background='white'
              className='w-full md:w-auto'
            />
          </div>
        </div>

        {/* Phone Mockups */}
        <div className='lg:w-3/5 mt-10 lg:mt-auto relative bottom-0'>
          <Image
            src='/images/app_hero_phones.png' // Replace with actual image path
            alt='Phone mockup left'
            width={1200}
            height={600}
            className='relative z-4'
          />
        </div>
      </div>
    </section>
  );
}
