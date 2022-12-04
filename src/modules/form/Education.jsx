import React from 'react'
import ToggleButton from './utils/ToggleButton';

const Education = (props) => {
  const { details, toggleVisible } = props;
  const toggleState = details.isVisible.education;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 font-extrabold text-xl">
          Education
        </legend>
        <ToggleButton
          stateKey={'education'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
    </fieldset>
  );
}

export default Education