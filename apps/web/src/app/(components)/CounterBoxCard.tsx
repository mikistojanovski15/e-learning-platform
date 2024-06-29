import React from 'react';

interface CounterBoxInterface {
  text: string;
  number: string;
}

const CounterBoxCard = ({ text, number }: CounterBoxInterface) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded">
      <h1 className="text-3xl py-8 text-orange-500 font-bold">{number}</h1>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default CounterBoxCard;
