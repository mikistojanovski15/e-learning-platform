import React from 'react';
import { CounterBoxData } from '../(mock-data)/counter-box-data';
import CounterBoxCard from './CounterBoxCard';

const CounterBoxComponent = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {CounterBoxData.map((data, index) => (
        <CounterBoxCard key={index} number={data.number} text={data.text} />
      ))}
    </div>
  );
};

export default CounterBoxComponent;
