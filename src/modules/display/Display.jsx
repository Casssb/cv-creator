import React from 'react';
import Header from './Header';
import SkillsDisplay from './SkillsDisplay';
import ProjectsDisplay from './ProjectsDisplay';
import ProfessionalDisplay from './ProfessionalDisplay';
import CoursesDisplay from './CoursesDisplay';
import EducationDisplay from './EducationDisplay';

const Display = (props) => {
  const { details } = props;
  return (
    <section className="bg-zinc-200 border-r-8 sticky top-4 w-full sm:w-1/2 p-1 h-full shadow-black shadow-md dark:shadow-white">
      <Header details={details} />
      <SkillsDisplay details={details} />
      <ProjectsDisplay details={details} />
      <ProfessionalDisplay details={details} />
      <CoursesDisplay details={details} />
      <EducationDisplay details={details} />
    </section>
  );
};

export default Display;
