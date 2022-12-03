import React from 'react';
import Input from './utils/Input';

const PersonalDetails = () => {
  return (
    <fieldset >
      <legend className='mb-2 text-cyan-700'>Personal Details</legend>
      <div className="grid md:grid-cols-2 md:gap-2 mt-4">
        <Input name={'name'}/>
        <Input name={'job title'}/>
        <Input name={'Email'}/>
        <Input name={'Phone Number'}/>
      </div>
      <Input name={'location'}/>
      <div className="grid md:grid-cols-2 md:gap-2 mt-4">
        <Input name={'github'}/>
        <Input name={'website'}/>
      </div>
    </fieldset>
  );
};

export default PersonalDetails;
