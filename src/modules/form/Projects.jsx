import React from 'react';
import ToggleButton from './utils/ToggleButton';
import AddButton from './utils/AddButton';
import DeleteButton from './utils/DeleteButton';
import Input from './utils/Input';
import Textarea from './utils/Textarea';
import uniqid from 'uniqid';

const Projects = (props) => {
  const { details, toggleVisible, handleOtherInput, handleAdd, handleDelete } =
    props;
  const toggleState = details.isVisible.projects;
  const lastIndex = details.projects.length - 1;
  return (
    <fieldset>
      <div className="flex justify-start gap-8">
        <legend className="mb-2 text-cyan-700 dark:text-cyan-500 font-extrabold text-xl">
          Projects
        </legend>
        <ToggleButton
          stateKey={'projects'}
          toggleVisible={toggleVisible}
          toggleState={toggleState}
        />
      </div>
      {details.isVisible.projects && (
        <>
          {details.projects.length === 0 && (
            <AddButton stateKey={'projects'} handleAdd={handleAdd} />
          )}
          {details.projects.map((exp, index) => (
            <React.Fragment key={uniqid()}>
              <Input
                name={'Title'}
                handleInput={handleOtherInput}
                stateKey={'title'}
                stateId={'projects'}
                index={index}
                key={index}
                value={details.projects[index].title}
              />
              <div className="grid md:grid-cols-2 md:gap-2 mt-4">
                <Input
                  name={'Repo Link'}
                  handleInput={handleOtherInput}
                  stateKey={'repo'}
                  stateId={'projects'}
                  index={index}
                  value={details.projects[index].repo}
                />
                <Input
                  name={'Live Link'}
                  handleInput={handleOtherInput}
                  stateKey={'live'}
                  stateId={'projects'}
                  index={index}
                  value={details.projects[index].live}
                />
              </div>
              <Textarea
                name={'Description'}
                handleInput={handleOtherInput}
                stateKey={'description'}
                stateId={'projects'}
                index={index}
                value={details.projects[index].description}
              />
              <div className="flex justify-start">
                {lastIndex === index && (
                  <AddButton stateKey={'projects'} handleAdd={handleAdd} />
                )}
                <DeleteButton
                  stateKey={'projects'}
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

export default Projects;
