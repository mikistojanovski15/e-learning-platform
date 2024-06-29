import Image from 'next/image';
import React from 'react';

const BannerEducationComponent = () => {
  return (
    <div className="relative w-full h-72 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-2xl mt-10">
      <Image
        className="absolute bottom-0 right-0 z-30"
        src={'/edu-01.png'}
        alt="Edu 01"
        width={300}
        height={150}
      />

      <Image
        className="absolute top-0 right-12 z-20"
        src={'/edu-02.png'}
        alt="Edu 02"
        width={300}
        height={150}
      />
      <Image
        className="absolute bottom-10 right-0 z-10"
        src={'/edu-03.png'}
        alt="Edu 03"
        width={110}
        height={80}
      />

      <Image
        className="absolute bottom-0 left-0 z-10"
        src={'/edu-04.png'}
        alt="Edu 04"
        width={210}
        height={80}
      />

      <Image
        className="absolute top-0 left-0 z-10"
        src={'/edu-05.png'}
        alt="Edu 04"
        width={210}
        height={80}
      />

      <Image
        className="absolute top-10 left-10 z-20"
        src={'/edu-06.png'}
        alt="Edu 04"
        width={280}
        height={100}
      />
      <div className="flex flex-col h-full items-center justify-center">
        <h4 className="text-xl">PROVIDING AMAZING</h4>
        <h2 className="text-2xl">Education Wordpress Theme</h2>
        <p className="text-lg">
          The next level of LMS WordPress Theme. Learn anytime and anywhere.
        </p>
        <button className="m-8 p-2 bg-orange-500 text-white rounded-md font-semibold">
          Explorer course
        </button>
      </div>
    </div>
  );
};

export default BannerEducationComponent;
