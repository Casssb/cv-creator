import React from 'react';

const DeleteButton = (props) => {
  const { stateKey, index, handleDelete } = props;
  return (
    <button
      className='className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-60'
      onClick={(e) => handleDelete(e, stateKey, index)}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
