import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Name Surname',
    role: 'Worker',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Name Surname',
    role: 'Employer',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Name Surname',
    role: 'Worker',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Name Surname',
    role: 'Employer',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Name Surname',
    role: 'Worker',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Name Surname',
    role: 'Employer',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className='py-20 bg-white'>
      {' '}
      {/* Background color matching design */}
      <div className='text-center'>
        <p className='text-orange-500 font-semibold'>Testimonials</p>
        <h2 className='text-5xl font-bold my-4 mb-10'>
          What <span className='text-blue-600'>People Say</span> About{' '}
          <span className='text-blue-600'>Jovoria</span>?
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-2'>
        {' '}
        {/* Grid layout */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-lg p-6'
            style={{ borderRadius: '20px' }} // To match rounded card design
          >
            <div className='flex items-center mb-4'>
              {/* Display 5 stars */}
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className='text-yellow-500 mr-1' />
              ))}
            </div>
            <p className='text-gray-600 italic mb-4 leading-relaxed'>
              "{testimonial.feedback}"
            </p>
            <div className='flex items-center'>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className='w-12 h-12 rounded-full mr-4'
              />
              <div>
                <h4 className='font-bold'>{testimonial.name}</h4>
                <p className='text-gray-500'>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-10'>
        <button className='bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition'>
          View All Reviews
        </button>
      </div>
    </section>
  );
}
