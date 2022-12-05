import React from 'react';
import uniqid from 'uniqid';

const ProfessionalDisplay = (props) => {
  const { details } = props;
  return (
    <div>
      {details.experience.map((exp, index) => (
        <React.Fragment key={uniqid()}>
          <div>{exp.role}</div>
          <div>{exp.company}</div>
          <div>{exp.dates}</div>
          <div>{exp.description}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProfessionalDisplay;
