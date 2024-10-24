import React, { useState } from 'react';

import Button from '@/components/buttons/Button';

export default function ContactUs() {
  const [message, setMessage] = useState('');
  const maxChars = 400;

  return (
    <section className='py-32 bg-[#F3F4FB] px-4'>
      <div className="relative container bg-white shadow-2xl bg-[url('/images/about_contact_bg.png')] py-16 px-8 md:px-64 rounded-[40px] mx-auto">
        {/* Left Section - Contact Info */}
        <div className='text-left'>
          <h2 className='text-orange-500 font-semibold text-xl'>Contact Us</h2>
          <h3 className='text-5xl font-light mt-4'>
            Contact{' '}
            <span className='font-extrabold text-blue-600'>Investor</span>{' '}
            Relations
          </h3>
          <p className='mt-4 text-gray-500'>
            We welcome inquiries from investors interested in learning more
            about our growth strategy, financial outlook, and partnership
            opportunities. Please contact our Investor Relations team at [email]
            or fill out the form below to schedule a meeting with our leadership
            team. Together, we can explore how you can be part of{' '}
            <strong>RUSH Gigs</strong> continued success.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className='mt-16'>
          <form className='space-y-6'>
            <div>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full border border-gray-200 rounded-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Your Mail'
                className='w-full border border-gray-200 rounded-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
              />
            </div>
            <div>
              <textarea
                placeholder='Message'
                className='w-full border border-gray-200 rounded-3xl px-6 py-4 h-32 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
                maxLength={maxChars}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className='text-right text-gray-400 text-sm'>
                {message.length}/{maxChars}
              </div>
            </div>

            {/* Send Button */}
            <div className='flex justify-end'>
              <Button variant='primary'>Send</Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className='mt-24 text-gray-600 space-y-2'>
          <p className='font-bold'>company@mail.com</p>
          <p className='font-bold'>1 - 000 - 111 - 111</p>
          <p className='font-bold'>
            82441 Sporer Crest, North Brain 49243-7508
          </p>
        </div>
      </div>
    </section>
  );
}
