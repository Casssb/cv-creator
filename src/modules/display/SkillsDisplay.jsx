import React from 'react';
import uniqid from 'uniqid';

const SkillsDisplay = (props) => {
  const { details } = props;
  return (
    <div>
      {details.skills.map((skill, index) => (
        <React.Fragment key={uniqid()}>
          <div>{skill.skill}</div>
          <div>{skill.subSkill}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillsDisplay;
