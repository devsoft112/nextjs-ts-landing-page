'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaBookmark, FaMapMarkerAlt } from 'react-icons/fa';

import ArrowLink from '@/components/links/ArrowLink';

import { Job } from '@/types';

export default function JobItem({
  id,
  company,
  location,
  title,
  tags,
  categories,
  isNew,
  isHot,
  isRemote,
}: Job) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className='bg-white shadow-xl rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0'>
      <div className='flex-grow'>
        {/* Tags */}
        <div className='flex space-x-2 mb-2'>
          {isNew && (
            <span className='text-xs font-semibold bg-green-100 text-green-700 rounded-full px-3 py-1'>
              NEW
            </span>
          )}
          {isHot && (
            <span className='text-xs font-semibold bg-orange-100 text-orange-700 rounded-full px-3 py-1'>
              Hot
            </span>
          )}
          {isRemote && (
            <span className='text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-3 py-1'>
              Remote
            </span>
          )}
        </div>

        {/* Company and Location */}
        <div className='flex items-center space-x-2 mb-4'>
          <Image
            src='/svg/google-icon.svg' // replace with actual company logo
            width={40}
            height={40}
            alt={company}
            className='w-6 h-6'
          />
          <p className='text-sm font-semibold'>{company}</p>
          <FaMapMarkerAlt className='text-blue-600' />
          <p className='text-sm text-gray-600'>{location}</p>
        </div>

        {/* Job Title */}
        <h2 className='text-xl md:text-2xl font-bold mb-4'>{title}</h2>

        {/* Categories */}
        <div className='flex flex-wrap space-x-2'>
          {categories.map((category, index) => (
            <span
              key={index}
              className='text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-3 py-1 mb-2'
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Bookmark and Details */}
      <div className='flex justify-between md:flex-col items-center md:items-end w-full md:w-auto'>
        <button onClick={toggleBookmark} className='md:mb-4'>
          <FaBookmark
            className={`${
              isBookmarked ? 'text-blue-600' : 'text-gray-400'
            } text-xl`}
          />
        </button>

        {/* Link to dynamic job details page using the job's ID */}
        <ArrowLink href={`/jobs/${id}`}>View Details</ArrowLink>
      </div>
    </div>
  );
}
