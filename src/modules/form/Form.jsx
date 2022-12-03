import React from 'react';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import Professional from './Professional';
import Courses from './Courses';
import Education from './Education';

const Form = (props) => {
  const { details, handlePersonalInput } = props;
  return (
    <form className='w-1/2 p-1'>
      <PersonalDetails details={details} handlePersonalInput={handlePersonalInput} />
      <Skills />
      <Professional />
      <Courses />
      <Education />
    </form>
  );
};

export default Form;
