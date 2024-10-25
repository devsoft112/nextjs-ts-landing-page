// src/sections/careers/JobSection.tsx

import { jobs } from '@/data/jobs';

import JobItem from '@/components/jobs/JobItem';

export default function JobSection() {
  return (
    <section className='container space-y-4 mx-auto py-10 px-4'>
      {jobs.map((job, index) => (
        <JobItem key={index} {...job} />
      ))}
    </section>
  );
}
