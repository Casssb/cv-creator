import React from 'react';

const Skills = (props) => {
  const { details } = props;
  return (
    <div>
      {details.skills.map((skill, index) => (
        <>
          <div>{skill.skill}</div>
          <div>{skill.subSkill}</div>
        </>
      ))}
    </div>
  );
};

export default Skills;
