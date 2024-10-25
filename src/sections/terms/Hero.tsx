// src/sections/terms/Hero.tsx

import { FaSearch } from 'react-icons/fa';

import '@/styles/custom.css';

export default function CareerHero() {
  return (
    <section className='relative bg-gradient-to-r pt-36 from-purple-500 to-blue-500 flex flex-col justify-center items-center'>
      <h1 className='text-white text-3xl md:text-5xl font-extrabold mb-6 mt-10'>
        Terms <span className='font-light'>and</span> Conditions
      </h1>
      <div className='w-full flex justify-center my-10'>
        <div className='relative w-11/12 max-w-4xl'>
          {/* Search input */}
          <input
            type='text'
            placeholder='Search...'
            className='w-full py-3 md:py-4 pl-6 pr-10 md:pr-20 rounded-full bg-white text-gray-700 border-none shadow-md focus:outline-none text-sm md:text-base'
          />

          {/* Search Button */}
          <div className='absolute inset-y-0 right-2 flex items-center'>
            <button className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition'>
              <FaSearch className='text-sm md:text-base' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const countries = [
  { name: 'Sweden', value: 'sweden' },
  { name: 'United States', value: 'united-states' },
  { name: 'Canada', value: 'canada' },
  { name: 'United Kingdom', value: 'united-kingdom' },
  { name: 'Germany', value: 'germany' },
  { name: 'Australia', value: 'australia' },
  { name: 'India', value: 'india' },
];
