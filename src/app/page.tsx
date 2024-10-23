'use client';

import {
  DownloadApps,
  FAQs,
  Hero,
  Missions,
  Overview,
  Testimonials,
} from '@/sections/home';

export default function Home() {
  return (
    <>
      <Hero />
      <Missions />
      <Overview />
      <FAQs />
      <Testimonials />
      <DownloadApps />
    </>
  );
}
