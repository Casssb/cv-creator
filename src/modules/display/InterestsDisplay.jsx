import React from 'react';
import { FaBook } from 'react-icons/fa';

const InterestsDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.personal.interests && (
        <div className="flex flex-col pl-4 py-2 gap-1">
          <h3 className="flex items-center gap-2 font-bold">
            <FaBook />
            Hobbies & Interests
          </h3>
          <p className='text-sm'>{details.personal.interests}</p>
        </div>
      )}
    </>
  );
};

export default InterestsDisplay;
