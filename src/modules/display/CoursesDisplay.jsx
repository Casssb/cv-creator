import React from 'react';

const CoursesDisplay = (props) => {
  const { details } = props;
  return (
    <div>
      {details.courses.map((course, index) => (
        <>
          <div>{course.course}</div>
          <div>{course.description}</div>
        </>
      ))}
    </div>
  );
};

export default CoursesDisplay;
