import React from 'react';
import Header from './Header';
import Skills from './Skills';

const Display = (props) => {
  const { details } = props;
  return (
    <section className="bg-zinc-200 border-r-8 sticky top-4 w-1/2 p-1 h-full">
      <Header details={details} />
      <Skills details={details} />
    </section>
  );
};

export default Display;
