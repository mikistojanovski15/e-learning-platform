import React from 'react';
import { topCategoryMockData } from '../(mock-data)/top-categories';
import CategoryCard from './CategoryCard';

const TopCategoriesComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Top Categories</h2>
          <h4>Explore our Popular Categories</h4>
        </div>
        <button className="px-4 py-2 border border-slate-400 text-dark rounded">
          View All
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {topCategoryMockData.map((category, i) => (
          <CategoryCard
            key={i}
            image={category.icon}
            title={category.category}
            description={category.courses}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCategoriesComponent;
