"use client";
import React, { useState } from "react";

const PasswordField = ({ labels, placeholder, icon }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="w-full  mb-1">
        <label htmlFor="" className="text-gray-400 text-sm">{labels}</label>
        <label htmlFor="" className="flex items-center w-full border border-black rounded-md h-10">
          <i className={`fa-solid fa-${icon} p-3`}></i>
          <input type={`${show ? "text" : "password"}`} placeholder={placeholder} className="w-full h-full px-2" />
          <button type="button" onClick={handleShow}>
            {show ? <i className="fa-solid fa-eye-slash p-3"></i> : <i className="fa-solid fa-eye p-3"></i>}
          </button>
        </label>
      </div>
    </div>
  );
};

export default PasswordField;
