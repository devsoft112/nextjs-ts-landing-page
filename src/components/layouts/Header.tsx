// src/components/layouts/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for mobile menu

import '../../styles/custom.css';

import Button from '@/components/buttons/Button';

export default function Header({ isHomePage }: { isHomePage: boolean }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile sidebar
  const textColor = isHomePage ? 'text-gray-100' : 'text-gray-800';
  const logoURL = isHomePage
    ? '/images/logo_light.png'
    : '/images/logo_dark.png';

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`absolute w-full z-20 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}
    >
      <div className='container-fluid mx-auto flex items-center justify-between p-6 px-4 lg:px-24'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center mr-24'>
              <Image src={logoURL} alt='Logo' width={190} height={100} />
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex space-x-10 ${textColor}`}>
              <Link href='/' className={textColor}>
                Home
              </Link>
              <Link href='/about' className={textColor}>
                About
              </Link>
              <Link href='/apps' className={textColor}>
                Application
              </Link>
              <Link href='/investors' className={textColor}>
                Investors
              </Link>
              <Link href='/careers' className={textColor}>
                Careers
              </Link>
            </nav>
          </div>

          {/* Hamburger icon for mobile view */}
          <div className='lg:hidden'>
            <button onClick={toggleMobileMenu} aria-label='Open mobile menu'>
              {isMobileMenuOpen ? (
                <FiX size={28} className={textColor} />
              ) : (
                <FiMenu size={28} className={textColor} />
              )}
            </button>
          </div>

          {/* Sign up button */}
          <div className='hidden lg:block'>
            <Button variant='light' isDarkBg={true}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-10'></div>
      )}

      {/* Mobile Sidebar */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='p-6'>
          <nav className='flex flex-col space-y-6'>
            <Link href='/about' className='text-gray-800'>
              About
            </Link>
            <Link href='/apps' className='text-gray-800'>
              Application
            </Link>
            <Link href='/investors' className='text-gray-800'>
              Investors
            </Link>
            <Link href='/careers' className='text-gray-800'>
              Careers
            </Link>
            <Button variant='primary' isDarkBg={true}>
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
