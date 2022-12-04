import React from 'react'
import ToggleButton from './utils/ToggleButton';

const Professional = (props) => {
  const { details, toggleVisible } = props;
  const toggleState = details.isVisible.professional;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 font-extrabold text-xl">
          Professional Experience
        </legend>
        <ToggleButton
          stateKey={'professional'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
    </fieldset>
  );
}

export default Professional