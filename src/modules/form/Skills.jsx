import React from 'react';
import Input from './utils/Input';
import ToggleButton from './utils/ToggleButton';
import AddButton from './utils/AddButton';
import DeleteButton from './utils/DeleteButton';

const Skills = (props) => {
  const { details, toggleVisible, handleOtherInput, handleAdd, handleDelete } =
    props;
  const toggleState = details.isVisible.skills;
  const lastIndex = details.skills.length - 1;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 dark:text-cyan-500 font-extrabold text-xl">
          Skills
        </legend>
        <ToggleButton
          stateKey={'skills'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.skills && (
        <>
          {details.skills.length === 0 && (
            <AddButton stateKey={'skills'} handleAdd={handleAdd} />
          )}
          {details.skills.map((skill, index) => (
            <React.Fragment key={index}>
              <Input
                name={'Skill'}
                handleInput={handleOtherInput}
                stateKey={'skill'}
                stateId={'skills'}
                index={index}
                key={index}
                value={details.skills[index].skill}
              />
              <Input
                name={'Sub-Skills'}
                handleInput={handleOtherInput}
                stateKey={'subSkill'}
                stateId={'skills'}
                index={index}
                value={details.skills[index].subSkill}
              />
              <div className="flex justify-start">
                {lastIndex === index && (
                  <AddButton stateKey={'skills'} handleAdd={handleAdd} />
                )}

                <DeleteButton
                  stateKey={'skills'}
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

export default Skills;
