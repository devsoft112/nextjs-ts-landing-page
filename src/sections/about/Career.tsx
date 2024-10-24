import Button from '@/components/buttons/Button';

export default function Career() {
  return (
    <section className='py-16 bg-white px-4'>
      <div className='container mx-auto text-center'>
        {/* Section Header */}
        <h2 className='text-orange-500 font-semibold text-xl'>Career</h2>
        <h3 className='text-5xl font-light mt-4 max-w-2xl mx-auto'>
          <span className='font-extrabold'>Open</span>{' '}
          <span className='text-blue-600 font-extrabold'>Positions</span>
        </h3>
        <p className='mt-6 max-w-3xl mx-auto text-gray-500'>
          Join the RUSH Gigs team and be part of a company that’s redefining the
          future of job search and hiring.
        </p>

        {/* Positions Grid */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {POSITIONS.map((position) => (
            <div
              key={position.id}
              className='bg-white shadow-xl rounded-lg p-6 text-left hover:shadow-2xl transition'
            >
              <h4 className='text-lg font-semibold'>{position.title}</h4>
              <p className='text-gray-400'>{position.location}</p>
              <p className='mt-4 text-gray-500'>{position.description}</p>
              <a
                href={position.link}
                className='mt-4 block text-orange-500 hover:underline'
              >
                Details
              </a>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className='block md:flex justify-between mt-16'>
          <p className='max-w-3xl text-gray-500 text-left'>
            We’re always looking for talented, driven individuals who are
            passionate about making a difference in the way people find work and
            hire. If you’re ready to make an impact and grow with us, explore
            our open positions and apply today!
          </p>

          {/* Join Button */}
          <Button variant='primary' className='mt-8'>
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}

const POSITIONS = [
  {
    id: 1,
    title: 'Position Name',
    location: 'Location, City',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    link: '#',
  },
  {
    id: 2,
    title: 'Position Name',
    location: 'Location, City',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    link: '#',
  },
  {
    id: 3,
    title: 'Position Name',
    location: 'Location, City',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    link: '#',
  },
  {
    id: 4,
    title: 'Position Name',
    location: 'Location, City',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    link: '#',
  },
  {
    id: 5,
    title: 'Position Name',
    location: 'Location, City',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    link: '#',
  },
  {
    id: 6,
    title: 'Position Name',
    location: 'Location, City',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    link: '#',
  },
];
