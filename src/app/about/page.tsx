'use client';

import {
  Career,
  ContactUs,
  DownloadApps,
  Hero,
  MissionVision,
  OurTeam,
  Testimonials,
} from '@/sections/about';

export default function About() {
  return (
    <>
      <Hero />
      <OurTeam />
      <MissionVision />
      <Career />
      <ContactUs />
      <Testimonials />
      <DownloadApps />
    </>
  );
}
