import React from 'react';
import uniqid from 'uniqid';
import { FaBookOpen } from 'react-icons/fa';

const CoursesDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.courses.length > 0 && (
        <div className="grid grid-cols-2 pl-4 py-2 gap-1">
          <h3 className="flex items-center gap-2 font-bold col-span-full">
            <FaBookOpen />
            Courses
          </h3>
          {details.courses.map((course, index) => (
            <div className="text-sm" key={uniqid()}>
              <div className="font-bold">{course.course}</div>
              <div className="font-style: italic">{course.description}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CoursesDisplay;
