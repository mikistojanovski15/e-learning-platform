import React from 'react';
import { studentFeedbackMocData } from '../(mock-data)/student-feedback';
import StudentFeedbackCard from './StudentFeedbackCard';

const StudentFeedBackComponent = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Student feedbacks</h2>
        <p className="text-sm text-gray-600">
          What Students Say About Academy LMS
        </p>
      </div>

      <div className="grid grid-cols-4 gap-9">
        {studentFeedbackMocData.map((data) => (
          <StudentFeedbackCard
            text={data.text}
            student={data.student}
            major={data.major}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentFeedBackComponent;
