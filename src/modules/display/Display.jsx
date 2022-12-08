import React from 'react';
import Header from './Header';
import SkillsDisplay from './SkillsDisplay';
import ProjectsDisplay from './ProjectsDisplay';
import ProfessionalDisplay from './ProfessionalDisplay';
import CoursesDisplay from './CoursesDisplay';
import EducationDisplay from './EducationDisplay';
import InterestsDisplay from './InterestsDisplay';

const Display = (props) => {
  const { details, pdfRef } = props;
  return (
    <>
      {(details.personal.name || details.personal.role) && (
        <section className="sticky top-4 w-full lg:w-3/5 h-full shadow-black shadow-md dark:shadow-slate-500">
          <div ref={pdfRef} className=" w-full h-full bg-zinc-200">
            <Header details={details} />
            <SkillsDisplay details={details} />
            <ProjectsDisplay details={details} />
            <ProfessionalDisplay details={details} />
            <CoursesDisplay details={details} />
            <EducationDisplay details={details} />
            <InterestsDisplay details={details} />
          </div>
        </section>
      )}
    </>
  );
};

export default Display;
