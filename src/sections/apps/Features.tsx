import Image from 'next/image';

import Button from '@/components/buttons/Button';

export default function Features() {
  return (
    <section className='py-16 px-2 bg-white'>
      <div className='container mx-auto text-center'>
        {/* Section Title */}
        <h2 className='text-orange-500 font-semibold text-xl'>Features</h2>
        <h3 className='text-5xl font-light mt-4 max-w-2xl mx-auto'>
          <span className='font-extrabold'>Features</span> that makes{' '}
          <span className='font-extrabold'>people</span>{' '}
          <span className='text-blue-600 font-extrabold'>love us</span>
        </h3>
        <p className='mt-6 max-w-3xl mx-auto text-gray-500'>
          Jovoria is an innovative mobile app designed for anyone looking to
          easily and efficiently find jobs or employees in their local area. Our
          app simplifies the search process by offering an interactive map,
          filters, and a built-in messaging system, ensuring that you’re always
          connected. Here’s what makes Jovoria unique:
        </p>

        {/* Features Grid */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-12'>
          {FEATURES.map((item) => (
            <div key={item.id} className='text-left'>
              <div className='relative'>
                <Image
                  src={item.mock_image}
                  alt={item.title}
                  width={700}
                  height={300}
                  className='rounded-lg'
                />
              </div>
              <h4 className='text-xl font-semibold mt-4'>{item.title}</h4>
              <p className='mt-2 text-gray-500 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>

        <Button variant='primary' className='mt-8 px-8 py-4'>
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    id: 0,
    title: 'Map Based Search',
    description:
      'With our geolocation feature, you can instantly view job openings or available workers near your current location. This allows you to respond quickly to opportunities that are most relevant to you. No more scrolling through long lists of jobs in far-off places – everything you need is right at your fingertips! Use filters to narrow your search by profession, experience, or work schedule.',
    mock_image: '/images/apps_features0.jpg',
  },
  {
    id: 1,
    title: 'Job and Worker List View',
    description:
      'For those who prefer a traditional view, you can switch to a convenient list of jobs or workers. This allows you to see more details about each opportunity or candidate, including job descriptions, requirements, experience, salary, and reviews. Sort by relevance, pay, or rating to find the best matches for your needs.',
    mock_image: '/images/apps_features1.jpg',
  },
  {
    id: 2,
    title: ' Easy Interaction',
    description:
      'With RUSH Gigs, you can communicate directly with employers or candidates through the built-in messaging system. This helps you avoid delays and quickly negotiate details. No intermediaries – just you and your potential employer or worker. Receive notifications about new messages or updates in real-time.',
    mock_image: '/images/apps_features2.jpg',
  },
  {
    id: 3,
    title: 'Flexible Account Settings',
    description:
      'You can switch your account type at any time – choose between "Looking for a job" or "Looking for employees" depending on your needs. Customize your profile by adding information about your experience, candidate requirements, or a brief company description. This makes the app highly versatile for all types of users.',
    mock_image: '/images/apps_features3.jpg',
  },
  {
    id: 4,
    title: 'Ratings and Reviews',
    description:
      'WJovoria allows users to leave and receive reviews after completing a job or hire. This helps build trust between employers and workers, and makes choosing the right option easier and more reliable. Check out the rating before sending an application or accepting an offer.',
    mock_image: '/images/apps_features4.jpg',
  },
];
