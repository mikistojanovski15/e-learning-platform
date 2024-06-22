import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between pt-5">
      <div className="flex items-center justify-start space-x-4">
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            src={'./hero-logo.svg'}
            alt={'Hero logo'}
          />
          <Link href={'/'}>Blush</Link>
        </div>
        <Link href={'/'}>Collections</Link>
        <Link href={'/'}>Arts</Link>
      </div>

      <div className="border border-stone-200 rounded-md p-2 w-2/3">
        <input className="outline-none flex-1 ex-grow flw-full" />
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 bg-blue-500 text-white rounded-md font-semibold">
          Sign in
        </button>
        <button className="p-2 border rounded-md font-semibold">
          Download
        </button>
      </div>
    </header>
  );
};

export default Header;
