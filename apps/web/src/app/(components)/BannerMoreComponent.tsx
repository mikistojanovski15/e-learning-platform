import React from 'react';

const BannerMoreComponent = () => {
  return (
    <div className="mt-10 bg-[url('/banner-more.svg')] w-full bg-auto md:bg-contain bg-no-repeat">
      <div className="pt-20 px-10">
        <h6 className="text-amber-900 text-xl">GET MORE POWER FROM</h6>
        <h4 className="bold text-3xl">LearnPress Add-Ons</h4>
        <p className="pt-2 text-md text-gray-500 md:w-1/3">
          The next level of LearnPress - LMS WordPress Plugin. More Powerful,
          Flexible and Magical Inside.
        </p>

        <button className="m-8 p-2 bg-orange-500 text-white rounded-md font-semibold">
          Explorer course
        </button>
      </div>
    </div>
  );
};

export default BannerMoreComponent;
