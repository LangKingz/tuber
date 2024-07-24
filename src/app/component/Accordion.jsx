"use client";

import React, { useState } from "react";

const Accordion = ({ label, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:px-8 py-2 ">
      <div className="flex items-center py-4 transition delay-75 ease-in">
        <label className="swap swap-rotate p-2">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />

          {/* sun icon */}
          <i className="fa-solid fa-chevron-down swap-off"></i>

          {/* moon icon */}
          <i className="fa-solid fa-chevron-up swap-on"></i>
        </label>
        <p>{label}</p>
      </div>
      <div className={`p-4 transition-all ${isOpen ? "" : "hidden"}`}>
        <p>{description}</p>
      </div>
      <hr className="border-none h-[1px] bg-black" />
    </div>
  );
};

export default Accordion;
