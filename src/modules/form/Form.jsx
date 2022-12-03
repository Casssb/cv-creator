import React from 'react';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import Professional from './Professional';
import Courses from './Courses';
import Education from './Education';

const Form = (props) => {
  const { details, handleTextInput } = props;
  return (
    <form>
      <PersonalDetails details={details} handleTextInput={handleTextInput} />
      <Skills />
      <Professional />
      <Courses />
      <Education />
    </form>
  );
};

export default Form;
