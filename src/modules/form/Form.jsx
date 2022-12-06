import React from 'react';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import Projects from './Projects';
import Professional from './Professional';
import Courses from './Courses';
import Education from './Education';
import Title from './Title';

const Form = (props) => {
  const {
    details,
    handlePersonalInput,
    handleOtherInput,
    toggleVisible,
    handleAdd,
    handleDelete,
    resetStateData,
    appendDemoData,
  } = props;
  return (
    <form className="w-1/2 p-1">
      <Title resetStateData={resetStateData} appendDemoData={appendDemoData} />
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
      <Projects
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
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <Courses
        details={details}
        handleOtherInput={handleOtherInput}
        toggleVisible={toggleVisible}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <Education
        details={details}
        handleOtherInput={handleOtherInput}
        toggleVisible={toggleVisible}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
    </form>
  );
};

export default Form;
