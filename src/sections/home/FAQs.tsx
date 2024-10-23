import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

const faqs = [
  {
    question: 'How does RUSH Gigs work?',
    answer:
      'Jovoria connects job seekers and employers by displaying available jobs or workers based on your location...',
  },
  {
    question: 'Can I switch between job seeker and employer modes?',
    answer: 'Yes, you can switch between modes from your account settings...',
  },
  {
    question: 'How do I apply for a job?',
    answer:
      'To apply for a job, simply browse available listings and click on the apply button...',
  },
  {
    question: 'What locations are available?',
    answer:
      'Our service is available in multiple regions. You can select your region from your account settings...',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'You can delete your account by navigating to the account settings and selecting the delete option...',
  },
  {
    question: 'How do I reset my password?',
    answer:
      'To reset your password, go to the login page and click on “Forgot password”...',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='py-10 bg-[#F3F5FB]'>
      <div className='text-center'>
        <p className='text-orange-500 font-semibold'>FAQ's</p>
        <h2 className='text-4xl font-bold my-4'>
          Frequently Asked <span className='text-blue-600'>Questions</span>
        </h2>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-2'>
        {' '}
        {/* Grid Layout */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 transition-all duration-300 ${
              activeIndex === index ? 'bg-white shadow-lg' : 'bg-[#ECEFF7]'
            }`}
            style={{
              borderWidth: '1px',
              borderRadius: '20px',
              height: 'fit-content',
            }} // Matching rounded corners
            onClick={() => handleToggle(index)}
          >
            <div className='flex justify-between items-center'>
              <h3 className='font-semibold text-lg'>{faq.question}</h3>
              {activeIndex === index ? (
                <FaMinus className='text-black text-xl' />
              ) : (
                <FaPlus className='text-black text-xl' />
              )}
            </div>
            {activeIndex === index && (
              <p className='mt-4 text-black leading-relaxed border-t pt-4'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className='mt-10 text-center'>
        <h4>
          <span className='text-blue-600'>Didn't find</span> an answer to your
          questions?
        </h4>
        <div className='mt-8'>
          <Button variant='primary'>Sign Up Now</Button>
          <span className='mx-4'>Or</span>
          <UnderlineLink href='https://example.com'>
            View All FAQ's
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
