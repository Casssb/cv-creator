import React from 'react';
import uniqid from 'uniqid';

const ProfessionalDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.experience.length > 0 && (
        <div>
          {details.experience.map((exp, index) => (
            <div key={uniqid()}>
              <div>{exp.role}</div>
              <div>{exp.company}</div>
              <div>{exp.dates}</div>
              <div>{exp.description}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProfessionalDisplay;
