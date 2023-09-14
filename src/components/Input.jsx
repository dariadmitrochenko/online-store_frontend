import React from "react";

const Input = ({ type, placeholder, value, onChange, label}) => {
  return (
    <div className="flex flex-col px-4 py-1">
        <div>
        {label && <label htmlFor="input">{label}</label>}
          <input
            className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
    </div>
  );
};

export default Input;
