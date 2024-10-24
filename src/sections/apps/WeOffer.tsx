import Image from 'next/image';
import React from 'react';

// Use your icon components or import them

export default function WeOfferSection() {
  return (
    <section className='py-16 bg-white px-4'>
      <div className='container mx-auto text-center'>
        {/* Section Heading */}
        <div className='mb-12'>
          <p className='text-orange-500 font-bold'>We Offer</p>
          <h2 className='text-5xl font-light my-6'>
            Exclusive{' '}
            <span className='text-blue-600 font-extrabold'>Benefits</span>
          </h2>
          <p className='text-gray-600 mt-4 max-w-3xl mx-auto'>
            Explore a range of exclusive features designed to enhance your
            job-seeking or hiring experience, making it easier and more
            efficient than ever to connect with the right opportunities and
            talent.
          </p>
        </div>

        {/* Features List */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {OFFERS.map((item) => (
            <div key={item.id} className='text-center'>
              <Image
                src={item.icon_path}
                alt={item.title}
                width={90}
                height={90}
                className='mx-auto'
              />
              <h3 className='font-bold text-lg'>{item.title}</h3>
              <p className='text-gray-600 mt-2'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OFFERS = [
  {
    id: 1,
    title: 'Tailored Job Matches',
    description:
      'Receive personalized job recommendations based on your skills, experience, and location. Our smart matching algorithm ensures you find opportunities that fit your profile perfectly.',
    icon_path: '/images/apps_offer1.png',
  },
  {
    id: 2,
    title: 'In-App Chat Feature',
    description:
      'Communicate directly with employers or candidates through our secure in-app chat. Ask questions, discuss job details, and establish connections without needing to exchange personal contact information.',
    icon_path: '/images/apps_offer2.png',
  },
  {
    id: 3,
    title: 'User-Friendly Interface',
    description:
      "Enjoy a seamless user experience with our intuitive design. Navigating the app is easy, whether you're searching for jobs or hiring workers, making your journey smooth and efficient.",
    icon_path: '/images/apps_offer3.png',
  },
  {
    id: 4,
    title: 'Dual Functionality',
    description:
      "Whether you're looking for a job or hiring talent, our app offers a comprehensive platform for both. Easily switch between job-seeking and recruitment, streamlining your experience on one app.",
    icon_path: '/images/apps_offer4.png',
  },
];
