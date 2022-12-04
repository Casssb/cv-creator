import React from 'react';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import Professional from './Professional';
import Courses from './Courses';
import Education from './Education';

const Form = (props) => {
  const {
    details,
    handlePersonalInput,
    handleOtherInput,
    toggleVisible,
    handleAdd,
    handleDelete,
  } = props;
  return (
    <form className="w-1/2 p-1">
      <PersonalDetails
        details={details}
        handlePersonalInput={handlePersonalInput}

        toggleVisible={toggleVisible}
      />
      <Skills
        details={details}
        handleOtherInput={handleOtherInput}
        toggleVisible={toggleVisible}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <Professional
        details={details}
        handleOtherInput={handleOtherInput}
        toggleVisible={toggleVisible}
      />
      <Courses
        details={details}
        handleOtherInput={handleOtherInput}
        toggleVisible={toggleVisible}
      />
      <Education
        details={details}
        handleOtherInput={handleOtherInput}
        toggleVisible={toggleVisible}
      />
    </form>
  );
};

export default Form;
