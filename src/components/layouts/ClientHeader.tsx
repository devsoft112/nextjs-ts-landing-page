'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/layouts/Header';

export default function ClientHeader() {
  const pathname = usePathname();

  // Check if pathname matches exactly or starts with '/jobs'
  const isHomePage = homePaths.some(
    (path) =>
      path === pathname || (path === '/jobs' && pathname.startsWith('/jobs')),
  );

  return <Header isHomePage={isHomePage} />;
}

const homePaths = ['/', '/apps', '/careers', '/jobs'];
