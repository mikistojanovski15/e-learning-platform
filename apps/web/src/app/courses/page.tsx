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
import CategoryCheckBoxComponent from '../(components)/CategoryCheckBoxComponent';

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

        <CategoryCheckBoxComponent title='CategoryCard' data={categoryTagMockData.courseCategories}/> 
       <CategoryCheckBoxComponent title='Instructors' data={categoryTagMockData.instructors}/> 
        {/* ova da go stavime vo posebna komponenta */}

        <CategoryCheckBoxComponent title='Level' data={categoryTagMockData.level}/> 
        <CategoryCheckBoxComponent title='Price' data={categoryTagMockData.price}/> 
        <CategoryCheckBoxComponent title='Review' data={categoryTagMockData.review}/> 
       
      </div>
    </div>
  );
};

export default Courses;
