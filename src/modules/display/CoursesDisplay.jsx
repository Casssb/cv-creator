import React from 'react';
import uniqid from 'uniqid';

const CoursesDisplay = (props) => {
  const { details } = props;
  return (
    <div>
      {details.courses.map((course, index) => (
        <React.Fragment key={uniqid()}>
          <div>{course.course}</div>
          <div>{course.description}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CoursesDisplay;
