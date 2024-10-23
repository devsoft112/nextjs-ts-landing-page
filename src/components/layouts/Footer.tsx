import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='bg-white py-10'>
      <div className='container mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-8 text-center md:text-left'>
        {/* App Section */}
        <div className='w-full lg:w-auto'>
          <h6 className='font-semibold text-lg mb-4'>App</h6>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li>
              <Link href='#'>Features</Link>
            </li>
            <li>
              <Link href='#'>How it works</Link>
            </li>
            <li>
              <Link href='#'>Benefits</Link>
            </li>
          </ul>
        </div>
        {/* Company Section */}
        <div className='w-full lg:w-auto'>
          <h6 className='font-semibold text-lg mb-4'>Company</h6>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li>
              <Link href='#'>Overview</Link>
            </li>
            <li>
              <Link href='#'>Mission & Vision</Link>
            </li>
            <li>
              <Link href='#'>Team</Link>
            </li>
            <li>
              <Link href='#'>For Investors</Link>
            </li>
            <li>
              <Link href='#'>Press and Media</Link>
            </li>
            <li>
              <Link href='#'>FAQ</Link>
            </li>
            <li>
              <Link href='#'>Contacts</Link>
            </li>
          </ul>
        </div>
        {/* Careers Section */}
        <div className='w-full lg:w-auto'>
          <h6 className='font-semibold text-lg mb-4'>Careers</h6>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li>
              <Link href='#'>Link_1</Link>
            </li>
            <li>
              <Link href='#'>Link_2</Link>
            </li>
            <li>
              <Link href='#'>Link_3</Link>
            </li>
          </ul>
        </div>
        {/* Blog & News Section */}
        <div className='w-full lg:w-auto'>
          <h6 className='font-semibold text-lg mb-4'>Blog & News</h6>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li>
              <Link href='#'>Link_1</Link>
            </li>
            <li>
              <Link href='#'>Link_2</Link>
            </li>
          </ul>
        </div>
        {/* Download and Contact Section */}
        <div className='w-full max-w-[430px] px-2 text-center md:text-left'>
          <Image
            src='/images/logo_dark.png'
            alt='RUSH Gigs Logo'
            width={204}
            height={42}
            className='mx-auto md:ml-0'
          />
          <p className='text-sm text-gray-600 mt-4'>
            Lorem ipsum dolor sit amet consectetur. Scelerisque tellus tortor
            consectetur mattis quis interdum amet. Duis tincidunt lectus nulla
            enim.
          </p>
          <div className='mt-4 flex flex-col sm:flex-row items-center'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-3 px-6 bg-[#F5F5F5] border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300 mb-4 sm:mb-0 sm:mr-4'
              required
            />
            <Button variant='dark'>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4'>
          <div className='flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <button
              className={cn(
                'inline-flex items-center text-sm font-semibold bg-white text-gray-700',
              )}
            >
              <Image
                src='/svg/app-store-icon.svg'
                alt='App Store'
                width={35}
                height={35}
                className='mr-2'
              />
              <div className='flex flex-col text-left'>
                <span className='text-xs'>Download in the</span>
                <span className='font-semibold'>App Store</span>
              </div>
            </button>
            <button
              className={cn(
                'inline-flex items-center text-sm font-semibold bg-white text-gray-700',
              )}
            >
              <Image
                src='/svg/play-market-icon.svg'
                alt='Play Store'
                width={35}
                height={35}
                className='mr-2'
              />
              <div className='flex flex-col text-left'>
                <span className='text-xs'>Download in the</span>
                <span className='font-semibold'>Play Market</span>
              </div>
            </button>
          </div>
          <div className='flex space-x-4 mt-4 sm:mt-0'>
            <Image
              src='/svg/Facebook.svg'
              alt='Facebook'
              width={35}
              height={35}
            />
            <Image
              src='/svg/Linkedin.svg'
              alt='LinkedIn'
              width={35}
              height={35}
            />
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4 mt-4'>
          <div className='text-sm text-gray-600 space-x-4'>
            <UnderlineLink href='#'>Terms and Conditions</UnderlineLink>
            <UnderlineLink href='#'>Privacy Policy</UnderlineLink>
          </div>
          <p className='text-sm text-gray-600 mt-4 sm:mt-0'>
            &copy; 2024 <PrimaryLink href='/'>Jovoria LCC.</PrimaryLink> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
