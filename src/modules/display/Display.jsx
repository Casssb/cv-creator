import React from 'react';
import Header from './Header';
import SkillsDisplay from './SkillsDisplay';
import ProjectsDisplay from './ProjectsDisplay';
import ProfessionalDisplay from './ProfessionalDisplay';
import CoursesDisplay from './CoursesDisplay';
import EducationDisplay from './EducationDisplay';

const Display = (props) => {
  const { details, pdfRef } = props;
  return (
    <section className="sticky top-4 w-full lg:w-3/5 h-full shadow-black shadow-md dark:shadow-white">
      <div ref={pdfRef} className=" w-full h-full bg-zinc-200">
        <Header details={details} />
        <SkillsDisplay details={details} />
        <ProjectsDisplay details={details} />
        <ProfessionalDisplay details={details} />
        <CoursesDisplay details={details} />
        <EducationDisplay details={details} />
      </div>
    </section>
  );
};

export default Display;
