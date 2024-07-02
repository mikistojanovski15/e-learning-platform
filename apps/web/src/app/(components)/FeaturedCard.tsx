import Image from 'next/image';
import React from 'react';

interface FeaturedCardInterface {
  image: string; // this is Required
  category?: string; // not Required
  title: string;
  instructor?: string;
  duration: string;
  students?: number;
  price?: string;
  original_price?: string;
  status?: string;
  viewMoreBtn?: boolean;
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
  viewMoreBtn = true, // ova znaci ako nemu pushtam preku prosps false ova sekogash ke bide by default true
}: FeaturedCardInterface) => {
  return (
    <div className="relative p-5 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer">
      {/* {category ? (
        <div className="absolute top-0 left-4 bg-black px-4 py-2 text-white rounded-md">
          {category}
        </div>
      ) : (
        <></>
      )} */}

      {category && (
        <div className="absolute top-0 left-4 bg-black px-4 py-2 text-white rounded-md">
          {category}
        </div>
      )}

      <Image
        className="w-full object-auto h-40 rounded-lg"
        src={image}
        alt={title}
        width={400}
        height={400}
      />
      <div>
        {instructor && <h4>By {instructor}</h4>}

        <h2 className="text-2xl">{title}</h2>
        <div className="flex items-center space-x-2 mt-4">
          <span>⏰ {duration}</span>
          {students && <span>🎓 {students}</span>}
        </div>
        <div className="border-b border-gray-200 m-5" />
        <div className="flex items-center justify-between">
          <span className="">
            {original_price && (
              <span className="line-through px-1">{original_price}</span>
            )}
            {/* One way */}
            {/* {price === 'Free' ? (
              <span className="text-green-500">{price}</span>
            ) : (
              <span className="text-orange-500">{price}</span>
            )} */}

            {/* Another way */}
            {price && (
              <span
                className={
                  price === 'Free' ? 'text-green-500' : 'text-orange-500'
                }
              >
                {price}
              </span>
            )}
          </span>
          {viewMoreBtn && <button>View More</button>}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
