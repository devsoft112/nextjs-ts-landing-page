import Button from '@/components/buttons/Button';

export default function Mission() {
  return (
    <section className='text-center py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-lg text-orange-500'>Our Mission</h2>
        <h3 className='text-3xl lg:text-5xl font-light my-4 leading-9'>
          We're <span className='font-extrabold'>Changing the Way</span> You
          Find <br className='hidden sm:block' />
          <span className='text-blue-600 font-extrabold'> Jobs</span> and{' '}
          <span className='text-blue-600 font-extrabold'>Employees</span>
        </h3>
        <p className='max-w-2xl mx-auto text-gray-600'>
          Our <strong>mission</strong> is to simplify the job search and hiring
          process by focusing on convenience, speed, and direct interaction
          between users. <strong>RUSH Gigs</strong> enables everyone to quickly
          find jobs or employees without unnecessary steps or delays.
        </p>

        {/* Icons Section */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='text-center max-w-[300px] mx-auto'>
            <img
              src='/images/icon1.svg'
              alt='Fast Search'
              className='mx-auto mb-4 w-36 h-36'
            />
            <h4 className='text-xl font-bold'>Fast Search</h4>
            <p className='text-gray-600'>
              Quickly find jobs or workers near you with our real-time map
              feature.
            </p>
          </div>
          <div className='text-center max-w-[300px] mx-auto mt-24'>
            <img
              src='/images/icon2.svg'
              alt='Easy Interaction'
              className='mx-auto mb-4 w-36 h-36'
            />
            <h4 className='text-xl font-bold'>Easy Interaction</h4>
            <p className='text-gray-600'>
              Communicate directly with employers or employees without
              intermediaries.
            </p>
          </div>
          <div className='text-center max-w-[300px] mx-auto'>
            <img
              src='/images/icon3.svg'
              alt='Flexible Settings'
              className='mx-auto mb-4 w-36 h-36'
            />
            <h4 className='text-xl font-bold'>Flexible Settings</h4>
            <p className='text-gray-600'>
              Switch between job seeker or employer mode anytime from your
              account settings.
            </p>
          </div>
        </div>

        <Button className='mt-8' variant='primary'>
          Learn More
        </Button>
      </div>
    </section>
  );
}
