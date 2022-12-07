import React from 'react';
import uniqid from 'uniqid';
import { FaBriefcase } from 'react-icons/fa';

const ProfessionalDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.experience.length > 0 && (
        <div className="flex flex-col px-4 py-2 gap-1">
          <h3 className="flex items-center gap-2 font-bold col-span-full">
            <FaBriefcase />
            Professional Experience
          </h3>
          {details.experience.map((exp, index) => (
            <div className="text-sm flex justify-between" key={uniqid()}>
              <div>
                <h4 className="font-bold">
                  {exp.role}
                  <span className="ml-1 font-normal font-style: italic">
                    {exp.company}
                  </span>
                </h4>
                <p>{exp.description}</p>
              </div>

              <div className='flex flex-col items-end'>
                <p className='font-semibold'>{exp.dates}</p>
                <p>{exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProfessionalDisplay;
