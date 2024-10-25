// src/app/jobs/[id]/page.tsx
import { notFound } from 'next/navigation';

import { jobs } from '@/data/jobs';

import { Hero } from '@/sections/careers';
import { JobDetails } from '@/sections/job-details';

import { Job } from '@/types';

interface JobDetailsProps {
  params: {
    id: string;
  };
}

export default function JobDetailsPage({ params }: JobDetailsProps) {
  const job: Job | undefined = jobs.find((job) => job.id === params.id);

  if (!job) {
    return notFound(); // Handles job not found
  }

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Job Details Section */}
      <JobDetails job={job} />
    </>
  );
}
