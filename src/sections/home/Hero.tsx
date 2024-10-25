import Image from 'next/image';

import '@/styles/custom.css';

import DownloadButton from '@/components/DownloadButton';

export default function Hero() {
  return (
    <section className='relative bg-transparent bg-hero-pattern text-center pt-32 md:pt-48'>
      {/* Title */}
      <h1 className='text-4xl md:text-5xl max-w-2xl mx-auto font-light text-white leading-tight px-4'>
        Lorem <span className='font-extrabold'>ipsum dolor</span> sit amet
        consectetur.
      </h1>

      {/* Subtitle */}
      <p className='text-sm md:text-md text-white mt-4 max-w-2xl mx-auto px-4'>
        Lorem ipsum dolor sit amet consectetur. Scelerisque tellus tortor
        consectetur mattis quis interdum amet. Duis tincidunt lectus nulla enim.
        Gravida tempor volutpat mauris ullamcorper vitae felis. Neque iaculis
        non sed sagittis vitae.
      </p>

      {/* Download buttons */}
      <div className='mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 px-4'>
        <DownloadButton
          platform='App Store'
          background='white'
          className='w-full md:w-auto'
        />
        <DownloadButton
          platform='Play Market'
          background='white'
          className='w-full md:w-auto'
        />
      </div>

      {/* Mockup images */}
      <div className='relative mt-12'>
        {/* Hero Mockup Image */}
        <Image
          src='/images/hero_mockups.png'
          alt='Hero mockup image'
          width={1100}
          height={600}
          className='mockup-image'
        />

        {/* Background Image */}
        <Image
          src='/images/hero_mockups_bg.png'
          alt='Hero mockup background'
          layout='responsive'
          width={1200}
          height={600}
          className='relative bottom-[-5px] w-full mt-[200px] xl:mt-[400px] z-0'
        />
      </div>
    </section>
  );
}
