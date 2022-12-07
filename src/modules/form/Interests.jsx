import React from 'react';
import Textarea from './utils/Textarea';
import ToggleButton from './utils/ToggleButton';

const Interests = (props) => {
  const { details, handlePersonalInput, toggleVisible } = props;
  const toggleState = details.isVisible.personal;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 dark:text-cyan-500 font-extrabold text-xl">
          Hobbies & Interests
        </legend>
        <ToggleButton
          stateKey={'interests'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.interests && (
        <Textarea
          name={'Hobbies & Interests'}
          handleInput={handlePersonalInput}
          stateKey={'interests'}
          value={details.personal.interests}
        />
      )}
    </fieldset>
  );
};

export default Interests;
