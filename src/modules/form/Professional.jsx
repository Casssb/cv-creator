import React from 'react';
import ToggleButton from './utils/ToggleButton';
import AddButton from './utils/AddButton';
import DeleteButton from './utils/DeleteButton';
import Input from './utils/Input';
import Textarea from './utils/Textarea';

const Professional = (props) => {
  const { details, toggleVisible, handleOtherInput, handleAdd, handleDelete } =
    props;
  const toggleState = details.isVisible.experience;
  const lastIndex = details.experience.length - 1;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 dark:text-cyan-500 font-extrabold text-xl">
          Professional Experience
        </legend>
        <ToggleButton
          stateKey={'experience'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.experience && (
        <>
          {details.experience.length === 0 && (
            <AddButton stateKey={'experience'} handleAdd={handleAdd} />
          )}
          {details.experience.map((exp, index) => (
            <React.Fragment key={index}>
              <Input
                name={'Role'}
                handleInput={handleOtherInput}
                stateKey={'role'}
                stateId={'experience'}
                index={index}
                key={index}
                value={details.experience[index].role}
              />
              <div className="grid md:grid-cols-2 md:gap-2 mt-4">
                <Input
                  name={'Company'}
                  handleInput={handleOtherInput}
                  stateKey={'company'}
                  stateId={'experience'}
                  index={index}
                  value={details.experience[index].company}
                />
                <Input
                  name={'Dates'}
                  handleInput={handleOtherInput}
                  stateKey={'dates'}
                  stateId={'experience'}
                  index={index}
                  value={details.experience[index].dates}
                />
              </div>
              <Textarea
                name={'Description'}
                handleInput={handleOtherInput}
                stateKey={'description'}
                stateId={'experience'}
                index={index}
                value={details.experience[index].description}
              />
              <div className="flex justify-start">
                {lastIndex === index && (
                  <AddButton stateKey={'experience'} handleAdd={handleAdd} />
                )}
                <DeleteButton
                  stateKey={'experience'}
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

export default Professional;
