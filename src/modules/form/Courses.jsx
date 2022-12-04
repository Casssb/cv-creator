import React from 'react'
import ToggleButton from './utils/ToggleButton';

const Courses = (props) => {
  const { details, toggleVisible } = props;
  const toggleState = details.isVisible.courses;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 font-extrabold text-xl">
          Courses
        </legend>
        <ToggleButton
          stateKey={'courses'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.courses && (
        <>
        </>
      )}
    </fieldset>
  );
}

export default Courses