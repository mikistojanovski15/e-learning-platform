'use client';
import React, { useState } from 'react';
import CoursesHeaderComponent from '../(components)/CoursesHeaderComponent';
import { featuredCoursesMockData } from '../(mock-data)/featured-coureses';
import FeaturedCard from '../(components)/FeaturedCard';
import {
  categoryTagMockData,
  CourseCategory,
  Instructor,
  Level,
  Price,
  Review,
} from '../(mock-data)/category';

// rafce -- react, arrow, functional --> export.
const Courses = () => {
  const [viewMethod, setViewMethod] = useState('grid');

  return (
    <div className="flex">
      <div className="w-2/3">
        <CoursesHeaderComponent
          viewMethod={viewMethod}
          setViewMethod={setViewMethod}
        />
        <div
          className={
            viewMethod === 'grid'
              ? 'grid grid-cols-2 gap-4'
              : 'flex flex-col gap-4'
          }
        >
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
                viewMethod={viewMethod}
              />
            );
          })}
        </div>
      </div>

      <div className="w-1/3 px-8 space-y-1">
        {/* od tuka  */}
        {/* trena da pushtite naslov text */}
        {/* Treba da pushtite tip na kategorija intrukir -- ova e array */}

        <h4 className="text-xl font-semibold">Category Card</h4>

        {categoryTagMockData.courseCategories.map((course: CourseCategory) => (
          <div>
            <input type="checkbox" />
            <span>
              {course.name}
              {course.count}
            </span>
          </div>
        ))}
        {/* do tuka */}
        {/* ova da go stavime vo posebna komponenta */}

        <h4 className="text-xl font-semibold text-gray-600">Instructors</h4>
        {categoryTagMockData.instructors.map((instructor: Instructor) => (
          <div>
            <input type="checkbox" />
            <span>
              {instructor.name}
              {instructor.count}
            </span>
          </div>
        ))}
        <h4 className="text-xl font-semibold text-gray-600">Level</h4>
        {categoryTagMockData.level.map((level: Level) => (
          <div>
            <input type="checkbox" />
            <span>
              {level.name}
              {level.count}
            </span>
          </div>
        ))}
        <h4 className="text-xl font-semibold text-gray-600">Price</h4>
        {categoryTagMockData.price.map((price: Price) => (
          <div>
            <input type="checkbox" />
            <span>
              {price.name}
              {price.count}
            </span>
          </div>
        ))}
        <h4 className="text-xl font-semibold text-gray-600">Review</h4>
        {categoryTagMockData.review.map((review: Review) => (
          <div>
            <input type="checkbox" />
            <span>
              {review.stars}
              {review.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
