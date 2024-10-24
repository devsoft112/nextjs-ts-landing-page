import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className='py-16 bg-white px-4'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        {/* Text Block */}
        <div className='lg:w-1/2 text-left'>
          <h2 className='text-orange-500 font-semibold text-xl'>
            Our Mission & Vision
          </h2>
          <h3 className='text-5xl font-light mt-4'>
            The <span className='font-extrabold'>Way</span> You Find{' '}
            <span className='text-blue-600 font-extrabold'>Jobs</span> and{' '}
            <span className='text-blue-600 font-extrabold'>Employees</span>
          </h3>
          <p className='mt-6 text-gray-500'>
            To revolutionize the way people find jobs and employees by creating
            a platform where opportunities and talent meet instantly.
          </p>
          <p className='mt-4 text-gray-500'>
            Our mission is to make the job search and hiring process as simple
            and fast as possible. We focus on direct interaction between users,
            eliminating barriers and delays so that everyone can connect
            effortlessly.
          </p>

          {/* Features */}
          <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
              <h4 className='text-blue-600 font-semibold'>Fast Search</h4>
              <p className='text-gray-500 mt-2'>
                Quickly find jobs or workers near you with our real-time map
                feature.
              </p>
            </div>
            <div>
              <h4 className='text-blue-600 font-semibold'>Easy Interaction</h4>
              <p className='text-gray-500 mt-2'>
                Communicate directly with employers or employees without any
                intermediaries.
              </p>
            </div>
            <div>
              <h4 className='text-blue-600 font-semibold'>Flexible Settings</h4>
              <p className='text-gray-500 mt-2'>
                Switch between job seeker or employer mode anytime from your
                account settings.
              </p>
            </div>
          </div>
        </div>

        {/* Image Block */}
        <div className='lg:w-1/2 mt-8 lg:mt-0 lg:ml-12'>
          <Image
            src='/images/about_vision.png'
            alt='Our Team Meeting'
            width={700}
            height={500}
            className='rounded-lg'
          />
        </div>
      </div>
    </section>
  );
}
