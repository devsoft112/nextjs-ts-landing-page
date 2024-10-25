'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaBookmark, FaShareAlt } from 'react-icons/fa';

export default function JobControls() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className='flex justify-between items-center w-full'>
      {/* Back button */}
      <Link
        href='/careers'
        className='flex items-center text-blue-500 font-medium'
      >
        <FaArrowLeft className='mr-2' /> Back
      </Link>

      <div className='flex space-x-4'>
        {/* Bookmark and Share */}
        <div className='flex space-x-4'>
          <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200'>
            <FaShareAlt />
          </button>
          <button
            className='p-2 rounded-full bg-gray-100 hover:bg-gray-200'
            onClick={toggleBookmark}
          >
            <FaBookmark className={isBookmarked ? 'text-blue-600' : ''} />
          </button>
        </div>

        {/* Sent Request Button */}
        <button className='px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition-all'>
          Sent Request
        </button>
      </div>
    </div>
  );
}
