import React from 'react';

const Header = (props) => {
  const { details } = props;
  return (
    <header>
      <h1>{details.name}</h1>
      <h2>{details.role}</h2>
      <ul>
        <li>{details.email}</li>
        <li>{details.phone}</li>
        <li>{details.location}</li>
        <li>{details.github}</li>
        <li>{details.site}</li>
      </ul>
    </header>
  );
};

export default Header;
