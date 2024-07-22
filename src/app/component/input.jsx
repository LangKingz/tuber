import React from "react";

const InputField = ({ labels, type, placeholder, icon }) => {
  return (
    <div>
      <div className="w-full ">
        <label htmlFor="" className="text-gray-400 text-sm">{labels}</label>
        <label htmlFor="" className="flex items-center w-full border rounded-md border-black h-10">
          <i className={`fa-solid fa-${icon} p-3`}></i>
          <input type={type} placeholder={placeholder} className="w-full h-full px-2" />
        </label>
      </div>
    </div>
  );
};

export default InputField;
