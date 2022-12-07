import React from 'react';
import uniqid from 'uniqid';
import { FaUniversity } from 'react-icons/fa';

const EducationDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.education.length > 0 && (
        <div className="flex flex-col px-4 py-2 gap-1">
          <h3 className="flex items-center gap-2 font-bold col-span-full">
            <FaUniversity />
            Education
          </h3>
          {details.education.map((edu, index) => (
            <div className="flex justify-between text-sm" key={uniqid()}>
              <div>
                <div className='font-bold'>{edu.qualification}</div>
                <div className='font-style: italic'>{edu.school}</div>
              </div>
              <div>
                <div className='font-bold'>{edu.dates}</div>
                <div>{edu.location}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EducationDisplay;
