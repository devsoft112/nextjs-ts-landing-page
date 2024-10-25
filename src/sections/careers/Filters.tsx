// src/sections/careers/FilterSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaFilter } from 'react-icons/fa';

const technologyOptions = [
  { label: 'Facebook', value: 'facebook' },
  { label: 'Messenger', value: 'messenger' },
  { label: 'Instagram', value: 'instagram' },
];

const advertisingOptions = [
  { label: 'Advertising Technology', value: 'adtech' },
  { label: 'AR/VR', value: 'ar-vr' },
  { label: 'Instagram', value: 'instagram' },
];

export default function FilterSection() {
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);
  const [selectedTechnologyLabels, setSelectedTechnologyLabels] = useState<
    string[]
  >([]);
  const [isAdvertisingOpen, setIsAdvertisingOpen] = useState(false);
  const [selectedAdvertisingLabels, setSelectedAdvertisingLabels] = useState<
    string[]
  >([]);

  const technologyRef = useRef<HTMLDivElement>(null);
  const advertisingRef = useRef<HTMLDivElement>(null);

  // Toggle dropdowns
  const toggleTechnology = () => setIsTechnologyOpen(!isTechnologyOpen);
  const toggleAdvertising = () => setIsAdvertisingOpen(!isAdvertisingOpen);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        technologyRef.current &&
        !technologyRef.current.contains(event.target as Node)
      ) {
        setIsTechnologyOpen(false);
      }
      if (
        advertisingRef.current &&
        !advertisingRef.current.contains(event.target as Node)
      ) {
        setIsAdvertisingOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update selected items for each dropdown (based on label)
  const handleTechnologyChange = (label: string) => {
    setSelectedTechnologyLabels((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const handleAdvertisingChange = (label: string) => {
    setSelectedAdvertisingLabels((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  // Get comma-separated labels or default text
  const technologyDisplay =
    selectedTechnologyLabels.length > 0
      ? selectedTechnologyLabels.join(', ')
      : 'Company';
  const advertisingDisplay =
    selectedAdvertisingLabels.length > 0
      ? selectedAdvertisingLabels.join(', ')
      : 'Technology';

  return (
    <div className='w-full flex justify-center mt-6 px-4'>
      <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full md:w-auto justify-center'>
        {/* Technology Dropdown */}
        <div className='relative w-full md:w-auto' ref={technologyRef}>
          <button
            onClick={toggleTechnology}
            className='w-full md:w-96 py-3 px-8 rounded-full bg-white border text-gray-600 flex justify-between items-center'
          >
            <span className='truncate'>{technologyDisplay}</span>
            <FaChevronDown />
          </button>
          {isTechnologyOpen && (
            <div className='absolute mt-2 w-full md:w-96 p-8 bg-white shadow-xl rounded-2xl z-50'>
              {technologyOptions.map((option) => (
                <label
                  key={option.value}
                  className='flex items-center space-x-2 mt-2'
                >
                  <input
                    type='checkbox'
                    checked={selectedTechnologyLabels.includes(option.label)}
                    onChange={() => handleTechnologyChange(option.label)}
                    className='custom-checkbox'
                  />
                  <span>{option.label}</span>
                </label>
              ))}
              <div className='text-blue-600 mt-2 cursor-pointer'>Show More</div>
            </div>
          )}
        </div>

        {/* Advertising Technology / AR/VR Dropdown */}
        <div className='relative w-full md:w-auto' ref={advertisingRef}>
          <button
            onClick={toggleAdvertising}
            className='w-full md:w-96 py-3 px-8 rounded-full bg-white border text-gray-600 flex justify-between items-center'
          >
            <span className='truncate'>{advertisingDisplay}</span>
            <FaChevronDown />
          </button>
          {isAdvertisingOpen && (
            <div className='absolute mt-2 w-full md:w-96 p-8 bg-white shadow-xl rounded-2xl z-50'>
              {advertisingOptions.map((option) => (
                <label
                  key={option.value}
                  className='flex items-center space-x-2 mt-2'
                >
                  <input
                    type='checkbox'
                    checked={selectedAdvertisingLabels.includes(option.label)}
                    onChange={() => handleAdvertisingChange(option.label)}
                    className='custom-checkbox'
                  />
                  <span>{option.label}</span>
                </label>
              ))}
              <div className='text-blue-600 mt-2 cursor-pointer'>Show More</div>
            </div>
          )}
        </div>

        {/* Role Type Dropdown */}
        <div className='relative w-full md:w-auto'>
          <select className='w-full md:w-48 py-3 px-8 rounded-full bg-white border text-gray-600 focus:outline-none shadow-sm appearance-none'>
            <option value='full-time'>Role Type</option>
            <option value='full-time'>Full-Time</option>
            <option value='part-time'>Part-Time</option>
            <option value='contract'>Contract</option>
          </select>
        </div>

        {/* Filters Button */}
        <button className='w-full md:w-auto flex items-center justify-center px-6 py-3 rounded-full bg-white border text-blue-600 border-blue-600 hover:bg-blue-100'>
          <FaFilter className='mr-2' />
          Filters
        </button>
      </div>
    </div>
  );
}
