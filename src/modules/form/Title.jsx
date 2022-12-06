import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaWpforms, FaUndo } from 'react-icons/fa';

const Title = (props) => {
  const { resetStateData, appendDemoData } = props;
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
    <div className="flex flex-col lg:flex-row justify-start gap-6 lg:gap-4 mb-8">
      <div className="flex justify-center sm:justify-start gap-2">
        <span className="bg-purple-100 text-purple-800 text-3xl font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800">
          CV
        </span>
        <h1 className="flex items-center text-4xl font-extrabold dark:text-white">
          Creator
        </h1>
      </div>
      <div className="flex justify-center sm:justify-start rounded-md shadow-sm" role="group">
        <button
          onClick={(e) => toggleDarkmode(e)}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-purple-900 bg-transparent rounded-l-lg border border-purple-900 hover:bg-purple-900 hover:text-white focus:z-10  focus:ring-purple-500 focus:bg-purple-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-purple-700 dark:focus:bg-purple-700"
        >
          {darkmode ? (
            <>
              <FaMoon />
              &nbsp;Dark
            </>
          ) : (
            <>
              <FaSun />
              &nbsp;Light
            </>
          )}
        </button>
        <button
          onClick={(e) => appendDemoData(e)}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-emerald-900 bg-transparent border-t border-b border-emerald-900 hover:bg-emerald-900 hover:text-white focus:z-10  focus:ring-emerald-500 focus:bg-emerald-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-emerald-700 dark:focus:bg-emerald-700"
        >
          {
            <>
              <FaWpforms />
              &nbsp;Demo
            </>
          }
        </button>
        <button
          onClick={(e) => resetStateData(e)}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-red-900 bg-transparent rounded-r-md border border-red-900 hover:bg-red-900 hover:text-white focus:z-10  focus:ring-red-500 focus:bg-red-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:bg-red-700"
        >
          {
            <>
              <FaUndo />
              &nbsp;Reset
            </>
          }
        </button>
      </div>
    </div>
  );
};

export default Title;
