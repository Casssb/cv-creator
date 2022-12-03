import React from 'react';
import Input from './utils/Input';
import Textarea from './utils/Textarea';
import ToggleButton from './utils/ToggleButton';

const PersonalDetails = (props) => {
  const { details, handlePersonalInput, toggleVisible } = props;
  const toggleState = details.isVisible.personal;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 font-extrabold text-xl">
          Personal Details
        </legend>
        <ToggleButton
          stateKey={'personal'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.personal && (
        <>
          <div className="grid md:grid-cols-2 md:gap-2 mt-4">
            <Input
              name={'name'}
              handleInput={handlePersonalInput}
              stateKey={'name'}
            />
            <Input
              name={'job title'}
              handleInput={handlePersonalInput}
              stateKey={'role'}
            />
            <Input
              name={'Email'}
              handleInput={handlePersonalInput}
              stateKey={'email'}
            />
            <Input
              name={'Phone Number'}
              handleInput={handlePersonalInput}
              stateKey={'phone'}
            />
          </div>
          <Textarea
            name={'Profile'}
            handleInput={handlePersonalInput}
            stateKey={'statement'}
          />
          <Input
            name={'location'}
            handleInput={handlePersonalInput}
            stateKey={'location'}
          />
          <div className="grid md:grid-cols-2 md:gap-2 mt-4">
            <Input
              name={'github'}
              handleInput={handlePersonalInput}
              stateKey={'github'}
            />
            <Input
              name={'website'}
              handleInput={handlePersonalInput}
              stateKey={'site'}
            />
          </div>
        </>
      )}
    </fieldset>
  );
};

export default PersonalDetails;
