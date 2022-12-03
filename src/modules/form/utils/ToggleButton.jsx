import React from 'react';

const ToggleButton = (props) => {
  const { toggleVisible, stateKey, toggleState } = props;
  return (
    <button
      type="button"
      className="text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-60"
      onClick={(e) => toggleVisible(e,stateKey)}
    >
      {`${toggleState ? 'Hide': 'Show'}`}
    </button>
  );
};

export default ToggleButton;
