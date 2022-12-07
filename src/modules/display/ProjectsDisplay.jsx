import React from 'react';
import uniqid from 'uniqid';
import { FaGithub, FaMousePointer, FaFolder } from 'react-icons/fa';

const ProjectsDisplay = (props) => {
  const { details } = props;
  return (
    <>
      {details.projects.length > 0 && (
        <div className="grid grid-cols-2 pl-4 py-2 gap-1">
          <h3 className="flex items-center gap-2 font-bold col-span-full">
            <FaFolder />
            Projects
          </h3>
          {details.projects.map((project, index) => (
            <div className="text-sm" key={uniqid()}>
              <div className="font-bold">{project.title}</div>
              <div className="flex items-center gap-1 py-1">
                <FaGithub /> {project.repo}
              </div>
              <div className="flex items-center gap-1">
                <FaMousePointer /> {project.live}
              </div>
              <div className='font-style: italic'>{project.description}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsDisplay;
