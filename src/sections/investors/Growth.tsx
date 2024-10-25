// src/sections/home/Growth.tsx
import Image from 'next/image';

export default function Growth() {
  return (
    <section className='container mx-auto py-20 bg-white'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div className='relative w-full'>
          <Image
            src='/images/investors_growth2.png'
            alt='Overview Illustration'
            layout='responsive'
            width={500}
            height={500}
            className='mx-auto'
          />
        </div>

        <div className='text-center md:text-left'>
          <h3 className='text-orange-500 text-lg text-center md:text-left'>
            Growth
          </h3>
          <h4 className='text-5xl font-light my-4'>
            <span className='text-blue-600 font-extrabold'>Growth</span> Plans.
          </h4>
          <div className='text-gray-600 px-2 space-y-4 text-left'>
            <p>
              <strong>RUSH Gigs</strong> growth strategy focuses on expanding
              our user base through targeted marketing campaigns and
              partnerships with key industry players.
            </p>
            <p>
              We plan to increase our reach by offering additional features,
              such as premium services for both job seekers and employers, and
              exploring new markets internationally.
            </p>
            <p>
              Our goal is to become a leading platform for job connections
              across multiple sectors and regions, continuously improving the
              user experience and adding value for our users and investors.
            </p>
          </div>
        </div>

        <div className='order-4 lg:order-none'>
          <h3 className='text-orange-500 text-lg text-center md:text-left'>
            Analysis
          </h3>
          <h4 className='text-5xl font-light my-4 text-center md:text-left'>
            <span className='text-blue-600 font-extrabold'>Market</span>{' '}
            Analysis.
          </h4>
          <div className='text-gray-600 px-2 space-y-4'>
            <p>
              The global recruitment market is valued at billions of dollars and
              is expected to continue growing with the rise of remote work, gig
              economies, and flexible employment options.{' '}
              <strong>RUSH Gigs</strong> taps into this evolving market by
              offering an easy-to-use app that connects job seekers and
              employers instantly.
            </p>
            <p>
              Our platform’s focus on location-based searches and direct
              communication gives us a competitive edge in capturing a broad
              user base.
            </p>
            <p>
              The increasing demand for mobile-first, time-saving solutions
              makes <strong>RUSH Gigs</strong> a strong contender in this
              booming industry.
            </p>
          </div>
        </div>

        <div className='relative w-full'>
          <Image
            src='/images/investors_growth1.png'
            alt='Overview Illustration'
            layout='responsive'
            width={400}
            height={500}
            className='mx-auto'
          />
        </div>
      </div>
    </section>
  );
}
