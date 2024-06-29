import Image from 'next/image';
import React from 'react';

interface StudentFeedbackInterface {
  text: string;
  student: string;
  major: string;
}

const StudentFeedbackCard = ({
  text,
  student,
  major,
}: StudentFeedbackInterface) => {
  return (
    <div className="rounded border border-gray-200 mt-10">
      <div className="m-8">
        <Image src="/crtki.svg" alt="" width={40} height={40} />
        <p className="py-4">{text}</p>
        <h4 className="font-bold">{student}</h4>
        <p>{major}</p>
      </div>
    </div>
  );
};

export default StudentFeedbackCard;
