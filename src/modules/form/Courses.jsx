import React from 'react';
import Input from './utils/Input';
import Textarea from './utils/Textarea';
import ToggleButton from './utils/ToggleButton';
import AddButton from './utils/AddButton';
import DeleteButton from './utils/DeleteButton';

const Courses = (props) => {
  const { details, toggleVisible, handleOtherInput, handleAdd, handleDelete } =
    props;
  const toggleState = details.isVisible.courses;
  const lastIndex = details.courses.length - 1;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 dark:text-cyan-500 font-extrabold text-xl">
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
          {details.courses.length === 0 && (
            <AddButton stateKey={'courses'} handleAdd={handleAdd} />
          )}
          {details.courses.map((course, index) => (
            <React.Fragment key={index}>
              <div className="mt-4">
                <Input
                  name={'Course'}
                  handleInput={handleOtherInput}
                  stateKey={'course'}
                  stateId={'courses'}
                  index={index}
                  key={index}
                  value={details.courses[index].course}
                />
                <Textarea
                  name={'Description'}
                  handleInput={handleOtherInput}
                  stateKey={'description'}
                  stateId={'courses'}
                  index={index}
                  value={details.courses[index].description}
                />
              </div>
              <div className="flex justify-start">
                {lastIndex === index && (
                  <AddButton stateKey={'courses'} handleAdd={handleAdd} />
                )}

                <DeleteButton
                  stateKey={'courses'}
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

export default Courses;
