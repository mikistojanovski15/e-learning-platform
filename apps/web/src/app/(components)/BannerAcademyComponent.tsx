import Image from 'next/image';
import React from 'react';

const BannerAcademyComponent = () => {
  return (
    <div className="relative flex items-center justify-between w-full h-72 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 rounded-2xl mt-10">
      <Image
        className="absolute top-0 right-0 z-20"
        src={'/edu1.svg'}
        alt="Edu 02"
        width={300}
        height={150}
      />

      <Image
        className="absolute bottom-0 left-0 z-20"
        src={'/edu2.svg'}
        alt="Edu 02"
        width={300}
        height={150}
      />
      <div className="flex items-center pt-18 pl-24 space-x-8">
        <div className="bg-white p-8 z-30 rounded-full">
          <Image
            className=""
            src={'/edu-main.svg'}
            alt="Edu 02"
            width={61}
            height={72}
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-600">
          Let’s Start With Academy LMS
        </h2>
      </div>
      <div className="space-x-5 pr-6 z-30">
        <button className="text-orange-500 border-[2px] border-orange-500 px-8 py-4 rounded-full">
          I'm A Student
        </button>
        <button className="text-white bg-orange-500 border-[2px] border-orange-500 px-8 py-4 rounded-full">
          Become An Instructor
        </button>
      </div>
    </div>
  );
};

export default BannerAcademyComponent;
