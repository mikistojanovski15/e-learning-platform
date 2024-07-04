'use client';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface CoursesHeaderInterface {
  viewMethod: string;
  setViewMethod: Dispatch<SetStateAction<string>>;
}

const CoursesHeaderComponent = ({
  viewMethod,
  setViewMethod,
}: CoursesHeaderInterface) => {
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-3xl font-bold">All Courses</h4>

      <div className="flex items-center space-x-2">
        {/* search bar */}
        <div className="flex items-center border-b-2 pb-1">
          <input className="outline-none" placeholder="Search" />
          <Image src={'/search-icon.svg'} alt="search" width={20} height={20} />
        </div>
        {/* i dvete ikonki */}

        <ListBulletIcon
          onClick={() => setViewMethod('list')}
          className={`size-6 ${
            viewMethod === 'list' ? 'text-orange-500' : 'text-gray-500'
          }`}
        />
        <Squares2X2Icon
          onClick={() => setViewMethod('grid')}
          className={`size-6 ${
            viewMethod === 'grid' ? 'text-orange-500' : 'text-gray-500'
          }`}
        />
      </div>
    </div>
  );
};

export default CoursesHeaderComponent;
