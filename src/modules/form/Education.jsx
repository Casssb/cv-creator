import React from 'react';
import Input from './utils/Input';
import ToggleButton from './utils/ToggleButton';
import AddButton from './utils/AddButton';
import DeleteButton from './utils/DeleteButton';
import uniqid from 'uniqid';

const Education = (props) => {
  const { details, toggleVisible, handleOtherInput, handleAdd, handleDelete } =
    props;
  const toggleState = details.isVisible.education;
  const lastIndex = details.education.length - 1;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 dark:text-cyan-500 font-extrabold text-xl">
          Education
        </legend>
        <ToggleButton
          stateKey={'education'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.education && (
        <>
          {details.education.length === 0 && (
            <AddButton stateKey={'education'} handleAdd={handleAdd} />
          )}
          {details.education.map((skill, index) => (
            <React.Fragment key={uniqid()}>
              <div className="grid md:grid-cols-2 md:gap-2 mt-4">
                <Input
                  name={'Qualification'}
                  handleInput={handleOtherInput}
                  stateKey={'qualification'}
                  stateId={'education'}
                  index={index}
                  key={index}
                  value={details.education[index].qualification}
                />
                <Input
                  name={'School'}
                  handleInput={handleOtherInput}
                  stateKey={'school'}
                  stateId={'education'}
                  index={index}
                  value={details.education[index].school}
                />
                <Input
                  name={'Location'}
                  handleInput={handleOtherInput}
                  stateKey={'location'}
                  stateId={'education'}
                  index={index}
                  value={details.education[index].location}
                />
                <Input
                  name={'Dates'}
                  handleInput={handleOtherInput}
                  stateKey={'dates'}
                  stateId={'education'}
                  index={index}
                  value={details.education[index].dates}
                />
              </div>
              <div className="flex justify-start">
                {lastIndex === index && (
                  <AddButton stateKey={'education'} handleAdd={handleAdd} />
                )}

                <DeleteButton
                  stateKey={'education'}
                  index={index}
                  handleDelete={handleDelete}
                />
              </div>
            </React.Fragment>
          ))}
        </>
      )}
    </fieldset>
  );
};

export default Education;
