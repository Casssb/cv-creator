import React from 'react';
import Input from './utils/Input';

const PersonalDetails = (props) => {
  const { handlePersonalInput } = props;
  return (
    <fieldset>
      <legend className="mb-2 text-cyan-700">Personal Details</legend>
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
    </fieldset>
  );
};

export default PersonalDetails;
