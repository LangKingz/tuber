'use client'

import Link from "next/link";
import React, { useState } from "react";

const CardTypes = () => {
  const [select ,setSelect] = useState(false)

  const handleSelect = () => {
    setSelect(!select)
  }
  return (
    <div className="w-[200px] text-white flex flex-col">
      
      <div onClick={handleSelect} className={`cursor-pointer ${select ? "border border-yellow-500" :""}`}>
        <div className="bg-[#085172] p-3 rounded-t-xl text-center">
          <h1 className="font-bold">1 BULAN</h1>
        </div>
        <div className="bg-gradient-to-b from-[#0074A7] rounded-b-xl to-[#085172] p-3">
          <div className="flex flex-col items-center">
            <h1 className=" text-2xl font-bold">99.000</h1>
            <p className="text-[10px]">IDR/bulan</p>
          </div>
          <p className="w-full h-[130px] overflow-hidden text-[11px] p-2 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis fugit laboriosam accusamus ipsum, officia accusantium vel cumque alias non.</p>
        </div>
      </div>
    </div>
  );
};

export default CardTypes;
