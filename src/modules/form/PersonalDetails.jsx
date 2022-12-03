import React from 'react';
import Input from './utils/Input';

const PersonalDetails = (props) => {
  const { handleTextInput } = props;
  return (
    <fieldset>
      <legend className="mb-2 text-cyan-700">Personal Details</legend>
      <div className="grid md:grid-cols-2 md:gap-2 mt-4">
        <Input
          name={'name'}
          handleTextInput={handleTextInput}
          stateKey={'name'}
        />
        <Input
          name={'job title'}
          handleTextInput={handleTextInput}
          stateKey={'role'}
        />
        <Input
          name={'Email'}
          handleTextInput={handleTextInput}
          stateKey={'email'}
        />
        <Input
          name={'Phone Number'}
          handleTextInput={handleTextInput}
          stateKey={'phone'}
        />
      </div>
      <Input
        name={'location'}
        handleTextInput={handleTextInput}
        stateKey={'location'}
      />
      <div className="grid md:grid-cols-2 md:gap-2 mt-4">
        <Input
          name={'github'}
          handleTextInput={handleTextInput}
          stateKey={'github'}
        />
        <Input
          name={'website'}
          handleTextInput={handleTextInput}
          stateKey={'site'}
        />
      </div>
    </fieldset>
  );
};

export default PersonalDetails;
