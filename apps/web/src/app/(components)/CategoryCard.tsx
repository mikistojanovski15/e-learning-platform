'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CategoryCardInterface {
  image: string;
  title: string;
  description: number;
}

const CategoryCard = ({ image, title, description }: CategoryCardInterface) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/courses/${title.toLowerCase()}`)}
      className="border border-gray-200 flex flex-col items-center justify-center rounded-lg h-40 hover:shadow-md cursor-pointer"
    >
      <div>{image}</div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description} Courses</p>
    </div>
  );
};

export default CategoryCard;
