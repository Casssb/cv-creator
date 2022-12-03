import React from 'react';
import Header from './Header';

const Display = (props) => {
  const { details } = props;
  return (
    <section className="bg-zinc-200 border-r-8 sticky w-1/2 p-1">
      <Header details={details} />
    </section>
  );
};

export default Display;
