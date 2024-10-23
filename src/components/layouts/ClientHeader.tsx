'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/layouts/Header';

export default function ClientHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return <Header isHomePage={isHomePage} />;
}
