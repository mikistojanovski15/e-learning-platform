import React from 'react';
import FeaturedCard from './FeaturedCard';
import { featuredCoursesMockData } from '../(mock-data)/featured-coureses';

const FeaturedCoursesComponent = () => {
  return (
    <div className="pt-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Top Categories</h2>
          <h4>Explore our Popular Categories</h4>
        </div>
        <button className="px-4 py-2 border border-slate-400 text-dark rounded">
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {featuredCoursesMockData.map((course, i) => {
          return (
            <FeaturedCard
              key={i}
              image={course.image}
              category={course.category}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              students={course.students}
              price={course.price}
              original_price={course.original_price}
              status={course.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCoursesComponent;
