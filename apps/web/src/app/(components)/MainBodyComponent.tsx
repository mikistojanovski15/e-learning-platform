'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const MainBodyComponent = () => {
  const router = useRouter();

  return (
    <div className="bg-[url('/body-img.png')] w-full h-[500px] bg-auto md:bg-contain bg-no-repeat">
      <div className="pt-20 md:pt-40 px-10">
        <h4 className="bold text-3xl">Build Skills with Online Course</h4>
        <p className="pt-10 text-xl md:w-1/2">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>

        <button
          onClick={() => router.push('/sign-in')}
          className="m-8 p-2 bg-orange-500 text-white rounded-md font-semibold"
        >
          Join us
        </button>
      </div>
    </div>
  );
};

export default MainBodyComponent;
