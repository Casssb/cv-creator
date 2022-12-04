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
              value={details.personal.name}
            />
            <Input
              name={'job title'}
              handleInput={handlePersonalInput}
              stateKey={'role'}
              value={details.personal.role}
            />
            <Input
              name={'Email'}
              handleInput={handlePersonalInput}
              stateKey={'email'}
              value={details.personal.email}
            />
            <Input
              name={'Phone Number'}
              handleInput={handlePersonalInput}
              stateKey={'phone'}
              value={details.personal.phone}
            />
          </div>
          <Textarea
            name={'Profile'}
            handleInput={handlePersonalInput}
            stateKey={'statement'}
            value={details.personal.statement}
          />
          <Input
            name={'location'}
            handleInput={handlePersonalInput}
            stateKey={'location'}
            value={details.personal.location}
          />
          <div className="grid md:grid-cols-2 md:gap-2 mt-4">
            <Input
              name={'github'}
              handleInput={handlePersonalInput}
              stateKey={'github'}
              value={details.personal.github}
            />
            <Input
              name={'website'}
              handleInput={handlePersonalInput}
              stateKey={'site'}
              value={details.personal.site}
            />
          </div>
        </>
      )}
    </fieldset>
  );
};

export default PersonalDetails;
