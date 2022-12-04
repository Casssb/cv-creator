import React from 'react';

const ProfessionalDisplay = (props) => {
  const { details } = props;
  return (
    <div>
      {details.experience.map((exp, index) => (
        <>
          <div>{exp.role}</div>
          <div>{exp.company}</div>
          <div>{exp.dates}</div>
          <div>{exp.description}</div>
        </>
      ))}
    </div>
  );
};

export default ProfessionalDisplay;
