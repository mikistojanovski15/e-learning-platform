import React from 'react';

const BannerGrowComponent = () => {
  return (
    <div className="mt-10 bg-[url('/banner-grow.svg')] w-full bg-auto bg-left md:bg-contain bg-no-repeat">
      <div className="px-10 flex flex-col items-end w-full">
        <div className="flex flex-col items-start w-1/3">
          <h4 className="bold text-3xl">
            Grow us your skill with LearnPress LMS
          </h4>
          <p className="pt-2 text-md text-gray-500">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <p>✅ Certification</p>
          <p>✅ Certification</p>
          <p>✅ Certification</p>
          <p>✅ Certification</p>

          <button className="m-8 p-2 bg-orange-500 text-white rounded-md font-semibold">
            Explorer course
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerGrowComponent;
