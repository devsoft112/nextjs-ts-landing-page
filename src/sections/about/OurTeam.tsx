import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import Button from '@/components/buttons/Button';

export default function OurTeam() {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto text-center'>
        {/* Section Title */}
        <h2 className='text-orange-500 font-semibold text-xl'>Our Team</h2>
        <h3 className='text-5xl font-light mt-4 max-w-2xl mx-auto'>
          Meet <span className='font-extrabold'>our</span>{' '}
          <span className='text-blue-600 font-extrabold'>team</span>
        </h3>
        <p className='mt-6 max-w-3xl mx-auto text-gray-500'>
          RUSH Gigs is led by a passionate team of professionals who believe in
          innovation and efficiency.
        </p>

        {/* Team Grid */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className='bg-white rounded-lg shadow-lg p-6 text-center'
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className='rounded-md mx-auto'
              />
              <h4 className='text-xl font-semibold mt-4'>{member.name}</h4>
              <p className='text-gray-500'>{member.position}</p>

              {/* Social Icons */}
              <div className='mt-4 flex justify-center space-x-4'>
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    className='text-black hover:text-gray-500'
                  >
                    <FaFacebookF />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className='text-black hover:text-gray-500'
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Button */}
        <Button variant='primary' className='mt-10'>
          Join Our Team
        </Button>
      </div>
    </section>
  );
}

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Member Name',
    position: 'Position',
    image: '/images/about_team1.png', // Update with your image path
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 2,
    name: 'Member Name',
    position: 'Position',
    image: '/images/about_team2.png', // Update with your image path
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 3,
    name: 'Member Name',
    position: 'Position',
    image: '/images/about_team3.png', // Update with your image path
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 4,
    name: 'Member Name',
    position: 'Position',
    image: '/images/about_team4.png', // Update with your image path
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
];
