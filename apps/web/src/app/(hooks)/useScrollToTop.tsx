'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const UseScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition > 500 && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="sticky bottom-14 left-[92%] px-4 py-2 rounded bg-black z-50"
        >
          <Image alt="arrow up" width={18} height={18} src={'arrowUp.svg'} />
        </button>
      )}
    </>
  );
};

export default UseScrollToTop;

// window.scroll({
//   top: 0,
//   behavior: 'smooth',
// });
