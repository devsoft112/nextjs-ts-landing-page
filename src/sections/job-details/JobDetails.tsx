// src/sections/job-details/JobDetailsSection.tsx
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

import JobControls from '@/components/jobs/JobControls';

import { Job } from '@/types';

interface JobDetailsSectionProps {
  job: Job;
}

export default function JobDetailsSection({ job }: JobDetailsSectionProps) {
  return (
    <section className='container mx-auto'>
      {/* Breadcrumbs */}
      <div className='py-8 px-2'>
        <nav className='text-sm'>
          <Link href='/careers' className='text-gray-500 hover:text-gray-700'>
            Careers
          </Link>
          <span className='mx-2 text-gray-500'>/</span>
          <span className='font-bold text-black'>{job.title}</span>
        </nav>
      </div>

      <div className='py-12 px-4 md:px-16 mb-10 shadow-xl rounded-lg'>
        <div className='px-6'>
          <div className='mb-8 flex items-center justify-between'>
            <JobControls />
          </div>
          {/* Tags */}
          <div className='flex space-x-2 mb-4'>
            {job.isNew && (
              <span className='text-xs font-semibold bg-green-100 text-green-700 rounded-full px-3 py-1'>
                NEW
              </span>
            )}
            {job.isHot && (
              <span className='text-xs font-semibold bg-orange-100 text-orange-700 rounded-full px-3 py-1'>
                Hot
              </span>
            )}
            {job.isRemote && (
              <span className='text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-3 py-1'>
                Remote
              </span>
            )}
          </div>

          {/* Job Title and Tags */}
          <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>

          <div className='flex items-center mb-4 space-x-2'>
            <p className='text-lg font-semibold'>{job.company}</p>
            <FaMapMarkerAlt className='text-blue-600' />
            <p className='text-lg text-gray-600'>{job.location}</p>
          </div>

          {/* Job Categories */}
          <div className='flex space-x-2 mb-8'>
            {job.categories.map((category, index) => (
              <span
                key={index}
                className='text-xs font-semibold bg-blue-100 text-blue-700 rounded-full px-3 py-1'
              >
                {category}
              </span>
            ))}
          </div>

          {/* Qualifications */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                Minimum Qualifications
              </h3>
              <ul className='list-disc list-inside text-gray-600'>
                {job.minimumQualification?.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                Preferred Qualifications
              </h3>
              <ul className='list-disc list-inside text-gray-600'>
                {job.preferredQualification?.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className='mt-8'>
            <h3 className='text-lg font-semibold mb-4'>Job Description</h3>
            <p className='text-gray-600'>{job.description}</p>
          </div>
        </div>

        {/* Note */}
        {job.note && (
          <div className='mt-6 p-10 bg-gray-100 rounded-xl'>
            <p className='text-gray-600'>{job.note}</p>
          </div>
        )}

        <div className='my-10 flex items-center justify-between'>
          <JobControls />
        </div>
      </div>
    </section>
  );
}
