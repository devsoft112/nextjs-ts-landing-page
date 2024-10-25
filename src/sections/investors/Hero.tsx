import Image from 'next/image';

export default function InvestorsHero() {
  return (
    <section className='py-16 bg-white pt-32'>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
        {/* Text Section */}
        <div className='lg:w-1/2 text-left'>
          <p className='text-orange-500 font-semibold text-lg text-center md:text-left'>
            For Investors
          </p>
          <h2 className='text-3xl md:text-5xl font-light mt-4 text-center md:text-left'>
            <span className='font-extrabold text-blue-600'>RUSH Gigs</span>{' '}
            offers a unique opportunity to invest in a fast-growing platform
          </h2>
          {/* Image Section */}
          <div className='block md:hidden lg:w-1/2 mt-8 lg:mt-0 lg:pl-16'>
            <Image
              src='/images/investors_hero1.png'
              alt='Investment Image'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
          <p className='mt-6 text-gray-500 font-bold'>
            that is transforming the way job seekers and employers connect.
          </p>
          <p className='mt-4 text-gray-500'>
            Our focus on simplicity, convenience, and location-based job
            matching provides a competitive edge in the recruitment industry. As
            we continue to expand, we invite forward-thinking investors to join
            us on this exciting journey.
          </p>
        </div>

        {/* Image Section */}
        <div className='hidden md:block lg:w-1/2 mt-8 lg:mt-0 lg:pl-16'>
          <Image
            src='/images/investors_hero1.png'
            alt='Investment Image'
            width={600}
            height={400}
            className='rounded-lg'
          />
        </div>
      </div>

      {/* Second Section */}
      <div className='container mx-auto px-4 mt-16 flex flex-col lg:flex-row items-center'>
        {/* Image Section */}
        <div className='hidden md:block lg:w-1/2 lg:pr-16'>
          <Image
            src='/images/investors_hero2.png'
            alt='Investment Meeting'
            width={600}
            height={400}
            className='rounded-lg'
          />
        </div>

        {/* Text Section */}
        <div className='lg:w-1/2 text-left mt-0'>
          <p className='text-orange-500 font-semibold text-lg text-center md:text-left'>
            Investment Opportunity
          </p>
          <h2 className='text-3xl md:text-5xl font-light mt-4 text-center md:text-left'>
            Investing in{' '}
            <span className='font-extrabold text-blue-600'>RUSH Gigs</span>{' '}
            means being part of a scalable, innovative platform
          </h2>
          <div className='block md:hidden lg:w-1/2 lg:pr-16 mt-4'>
            <Image
              src='/images/investors_hero2.png'
              alt='Investment Meeting'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
          <p className='mt-6 text-gray-500 font-bold'>
            designed to solve common challenges in the job market.
          </p>
          <p className='mt-4 text-gray-500'>
            With a user-friendly interface and advanced matching technology,
            Jovoria is positioned to grow rapidly as more users adopt our
            streamlined approach to job searching and hiring. We offer
            attractive opportunities for investors looking to support a
            cutting-edge solution in a high-demand industry.
          </p>
        </div>
      </div>
    </section>
  );
}
