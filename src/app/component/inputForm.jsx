import React from "react";

const InputForm = ({label, type, placeholder ,icon, cls,onChange,value}) => {
  return (
    <div className={cls}>
      <span>{label}</span>
      <label htmlFor="text" className="flex items-center my-2 rounded-lg border-black border">
        <i className={`fa-solid fa-${icon} p-3`}></i>
        <input type={type} placeholder={placeholder} onChange={onChange} className="w-full h-10  p-2" required/>
      </label>
    </div>
  );
};

export default InputForm;
