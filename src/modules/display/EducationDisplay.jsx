import React from 'react';
import uniqid from 'uniqid';

const EducationDisplay = (props) => {
    const { details } = props;
  return (
    <div>
      {details.education.map((edu, index) => (
        <React.Fragment key={uniqid()}>
          <div>{edu.qualification}</div>
          <div>{edu.school}</div>
          <div>{edu.location}</div>
          <div>{edu.dates}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EducationDisplay;
