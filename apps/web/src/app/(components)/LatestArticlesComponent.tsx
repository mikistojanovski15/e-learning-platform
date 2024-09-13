import React from 'react';
import { featuredCoursesMockData } from '../(mock-data)/featured-coureses';
import FeaturedCard from './FeaturedCard';
import { latestArchivesMockData } from '../(mock-data)/latest-archives';

const LatestArticlesComponent = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-3xl font-semibold">Latest articles</h4>
          <p className="text-xl font-normal text-gray-600">
            Explore our Free Acticles
          </p>
        </div>
        <button className="border border-gray-600 rounded-full px-8 py-4">
          All articles
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {latestArchivesMockData.map((course, i) => {
          return (
            <FeaturedCard viewMethod='grid'
              key={i}
              image={course.image}
              title={course.title}
              duration={course.duration}
              viewMoreBtn={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestArticlesComponent;
