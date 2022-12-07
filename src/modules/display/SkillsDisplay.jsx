import React from 'react';
import uniqid from 'uniqid';
import { FaHeadSideVirus } from 'react-icons/fa';

const SkillsDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.skills.length > 0 && (
        <div className="grid grid-cols-2 pl-4 mt-2 gap-1">
          <h3 className="flex items-center gap-2 font-bold col-span-full">
            <FaHeadSideVirus />
            Skills
          </h3>
          {details.skills.map((skill, index) => (
            <React.Fragment key={uniqid()}>
              <div>
                <div className='font-bold text-sm'>{skill.skill}</div>
                <div className='text-sm'>{skill.subSkill}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default SkillsDisplay;
