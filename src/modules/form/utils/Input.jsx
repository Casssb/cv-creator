import React from 'react';

const Input = (props) => {
  const { name, handleInput, stateKey, stateId, index, value } = props;
  return (
    <div className="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name={stateKey}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
        placeholder=" "
        onChange={(e) => handleInput(e, stateKey, stateId, index)}
        value={value}
      />
      <label
        htmlFor={stateKey}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-transform: capitalize"
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
