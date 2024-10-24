'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/layouts/Header';

export default function ClientHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/apps';

  return <Header isHomePage={isHomePage} />;
}
