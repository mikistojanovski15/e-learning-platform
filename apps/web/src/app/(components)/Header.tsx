'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between pt-5 pb-4 shadow-sm">
      <div className="flex items-center justify-start space-x-4">
        <div className="flex items-center space-x-2">
          <Image
            width={40}
            height={40}
            src={'./hero-logo.svg'}
            alt={'Hero logo'}
          />
          <Link className="font-bold" href={'/'}>
            EduPress
          </Link>
        </div>
      </div>

      <div className="items-center space-x-4 hidden md:flex">
        <Link
          className={
            pathname === '/'
              ? 'text-orange-500 font-semibold underline underline-offset-4'
              : 'text-slate-600'
          }
          href={'/'}
        >
          Home
        </Link>
        <Link
          className={
            pathname === '/courses'
              ? 'text-orange-500 font-semibold underline underline-offset-4'
              : 'text-slate-600'
          }
          href={'/courses'}
        >
          Courses
        </Link>
        <Link
          className={
            pathname === '/blog'
              ? 'text-orange-500 font-semibold underline underline-offset-4'
              : 'text-slate-600'
          }
          href={'/blog'}
        >
          Blog
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 bg-orange-500 text-white rounded-md font-semibold">
          Sign in
        </button>
        <button className="p-2 border rounded-md font-semibold">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
