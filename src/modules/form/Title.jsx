import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Title = () => {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = (e) => {
    e.preventDefault();
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    darkmode === true
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkmode]);

  return (
    <div className="flex justify-start gap-12 mb-8">
      <div className="flex justify-start gap-2">
        <span className="bg-purple-100 text-purple-800 text-3xl font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800">
          CV
        </span>
        <h1 className="flex items-center text-4xl font-extrabold dark:text-white">
          Creator
        </h1>
      </div>
      <button
        onClick={(e) => toggleDarkmode(e)}
        className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 font-medium rounded-md text-xl px-4 py-2 text-center mr-2 mb-1 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-60"
      >
        {darkmode ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Title;
