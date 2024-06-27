import Image from 'next/image';
import React from 'react';

interface FeaturedCardInterface {
  image: string;
  category: string;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  price: string;
  original_price: string;
  status: string;
}

const FeaturedCard = ({
  image,
  category,
  title,
  instructor,
  duration,
  students,
  price,
  original_price,
  status,
}: FeaturedCardInterface) => {
  return (
    <div className="relative p-5 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer">
      <Image
        className="w-full object-auto h-40 rounded-lg"
        src={image}
        alt={title}
        width={400}
        height={400}
      />
      <div>
        <h4>By {instructor}</h4>
        <h2 className="text-2xl">{title}</h2>
        <div className="flex items-center space-x-2 mt-4">
          <span>⏰ {duration}</span>
          <span>🎓 {students}</span>
        </div>
        <div className="border-b border-gray-200 m-5" />
        <div className="flex items-center justify-between">
          <span className="">
            <span className="line-through px-1">{original_price}</span>
            {price}
          </span>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
