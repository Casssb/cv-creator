import React from 'react';

const EducationDisplay = (props) => {
    const { details } = props;
  return (
    <div>
      {details.education.map((edu, index) => (
        <>
          <div>{edu.qualification}</div>
          <div>{edu.school}</div>
          <div>{edu.location}</div>
          <div>{edu.dates}</div>
        </>
      ))}
    </div>
  );
};

export default EducationDisplay;
