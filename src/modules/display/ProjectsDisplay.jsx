import React from 'react';
import uniqid from 'uniqid';

const ProjectsDisplay = (props) => {
  const { details } = props;
  return (
    <div>
      {details.projects.map((project, index) => (
        <React.Fragment key={uniqid()}>
          <div>{project.title}</div>
          <div>{project.repo}</div>
          <div>{project.live}</div>
          <div>{project.description}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectsDisplay;
