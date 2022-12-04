import React from 'react';
import Header from './Header';
import SkillsDisplay from './SkillsDisplay';
import ProfessionalDisplay from './ProfessionalDisplay';
import CoursesDisplay from './CoursesDisplay';
import EducationDisplay from './EducationDisplay';

const Display = (props) => {
  const { details } = props;
  return (
    <section className="bg-zinc-200 border-r-8 sticky top-4 w-1/2 p-1 h-full">
      <Header details={details} />
      <SkillsDisplay details={details} />
      <ProfessionalDisplay details={details} />
      <CoursesDisplay details={details} />
      <EducationDisplay details={details} />
    </section>
  );
};

export default Display;
