import React from 'react';

const Header = (props) => {
  const { details } = props;
  return (
    <header>
      <h1>{details.personal.name}</h1>
      <h2>{details.personal.role}</h2>
      <ul>
        <li>{details.personal.email}</li>
        <li>{details.personal.phone}</li>
        <li>{details.personal.location}</li>
        <li>{details.personal.github}</li>
        <li>{details.personal.site}</li>
      </ul>
    </header>
  );
};

export default Header;
