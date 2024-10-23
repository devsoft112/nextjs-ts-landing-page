// src/sections/home/Overview.tsx
import Image from 'next/image';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Overview() {
  return (
    <section className='container mx-auto py-20 bg-white'>
      <h2 className='text-orange-500 text-lg text-center'>Overview</h2>
      <h3 className='text-4xl max-w-4xl font-light my-4 mb-16 mx-auto text-center px-2'>
        <span className='font-extrabold'>RUSH Gigs</span> is an{' '}
        <span className='text-blue-600 font-extrabold'>
          innovative mobile app
        </span>{' '}
        designed for anyone looking to{' '}
        <span className='font-extrabold'>easily</span> and
        <span className='font-extrabold'> efficiently</span>{' '}
        <span className='text-blue-600 font-extrabold'>
          {' '}
          find jobs or employees
        </span>
      </h3>
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div className='relative w-full'>
          <Image
            src='/images/qualified_workers.png'
            alt='Overview Illustration'
            layout='responsive'
            width={500}
            height={500}
            className='mx-auto'
          />
        </div>

        <div className='text-center md:text-left'>
          <h4 className='text-2xl font-bold my-4'>
            Easily Find <br />{' '}
            <span className='text-blue-600'>Qualified Workers</span> Fast.
          </h4>
          <p className='text-gray-600 px-2'>
            Looking for a professional to get the job done? RUSH Gigs helps you
            find qualified workers in your area within minutes. Use our map to
            view available candidates nearby or search the list by profession,
            experience, and ratings.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8'>
            <Button variant='primary'>Sign Up Now</Button>
            <span className='mx-2'>Or</span>
            <UnderlineLink href='https://example.com'>
              Explore More
            </UnderlineLink>
          </div>
        </div>

        <div className='text-center md:text-left order-4 lg:order-none'>
          <h4 className='text-2xl font-bold my-4 mt-16 md:mt-0'>
            Find a <span className='text-blue-600'>Job</span> <br />
            That's Right for You.
          </h4>
          <p className='text-gray-600 px-2'>
            Whether you're seeking new career opportunities or just looking for
            a temporary job close to home,
            <strong> RUSH Gigs</strong> is your trusted partner. With the
            geolocation feature, you can view all the latest job openings
            nearby. Use filters to narrow down job offers by profession, work
            schedule, or salary level. Every listing has ratings and reviews,
            helping you find reliable work that meets your needs.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8'>
            <Button variant='primary'>Sign Up Now</Button>
            <span className='mx-2'>Or</span>
            <UnderlineLink href='https://example.com'>
              Explore More
            </UnderlineLink>
          </div>
        </div>

        <div className='relative w-full'>
          <Image
            src='/images/job_seeker.png'
            alt='Overview Illustration'
            layout='responsive'
            width={500}
            height={500}
            className='mx-auto'
          />
        </div>
      </div>
    </section>
  );
}
