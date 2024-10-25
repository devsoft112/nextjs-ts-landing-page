import Image from 'next/image';

export default function Hero() {
  return (
    <section className='py-16 bg-white pt-32'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
        {/* Mobile View Title */}
        <div className='md:hidden w-full px-4'>
          <h3 className='text-orange-500 text-xl font-semibold'>About us</h3>
          <h2 className='text-5xl font-light mt-4'>
            Who <span className='font-extrabold'>we</span>{' '}
            <span className='text-blue-600 font-extrabold'>are</span> ?
          </h2>
        </div>
        {/* Left: Image */}
        <div className='lg:w-1/2 my-8 md:mb-0 px-4 md:px-10'>
          <Image
            src='/images/about_hero.jpg'
            alt='People discussing'
            width={800}
            height={500}
            className='rounded-lg'
          />
        </div>

        {/* Right: Text */}
        <div className='lg:w-1/2 text-left px-4 md:px-10'>
          <h3 className='hidden md:block text-orange-500 text-xl font-semibold'>
            About us
          </h3>
          <h2 className='hidden md:block text-5xl font-light mt-4'>
            Who <span className='font-extrabold'>we</span>{' '}
            <span className='text-blue-600 font-extrabold'>are</span> ?
          </h2>
          <p className='mt-6 text-gray-500'>
            At <strong>RUSH Gigs</strong>, we’re changing the way people connect
            with job opportunities and talent. Our platform is designed to
            simplify the job search and hiring process, making it faster and
            more convenient for everyone involved.
          </p>
          <p className='mt-4 text-gray-500'>
            With <strong>RUSH Gigs</strong>, users can instantly find jobs or
            employees, reducing unnecessary steps and creating direct
            interactions that drive results.
          </p>

          {/* Company Overview */}
          <div className='mt-8'>
            <h4 className='text-xl font-semibold'>Company Overview</h4>
            <p className='mt-4 text-gray-500'>
              <strong>RUSH Gigs</strong> is a dynamic mobile platform that
              bridges the gap between job seekers and employers through a
              seamless, location-based experience.
            </p>
            <p className='mt-4 text-gray-500'>
              Whether you're searching for work or looking to hire,{' '}
              <strong>RUSH Gigs</strong> offers an intuitive interface that
              makes the process efficient and user-friendly.
            </p>
            <p className='mt-4 text-gray-500'>
              We’re committed to empowering users with smart job matches and
              instant communication, ensuring a smooth and successful hiring
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
