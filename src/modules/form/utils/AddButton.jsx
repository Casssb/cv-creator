import React from 'react';

const AddButton = (props) => {
  const { stateKey, handleAdd } = props;
  return (
    <button
      className='className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-60'
      onClick={(e) => handleAdd(e, stateKey)}
    >
      Add
    </button>
  );
};

export default AddButton;
