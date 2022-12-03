import React from 'react';
import Header from './Header';

const Display = (props) => {
  const { details } = props;
  return (
    <section className="bg-zinc-200 border-r-8 sticky">
      <Header details={details} />
    </section>
  );
};

export default Display;
