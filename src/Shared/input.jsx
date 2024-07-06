import React from 'react';

function Input({ inputClass, inputText, onChange, value }) {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        className={inputClass}
        placeholder={inputText}
        value={value}
      />
    </div>
  );
}

export default Input;
