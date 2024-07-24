"use client";
import React, { useState } from "react";
import Accordion from "../component/Accordion";

const FaqPages = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-14 bg-[#0074A7] h-screen ">
      <div className="relative h-1/5 flex justify-center">
        <h1 className="p-4 bg-white border border-black font-medium text-[#085172]  bottom-[-10%] absolute">Telusuri Informasi yang dibutuhkan</h1>
      </div>
      <div className="bg-white p-4 ">
        {/* accordion */}
        <Accordion label="Apakah aplikasi ini berfungsi?" description="Aplikasi ini berfungsi sampai 99% pada server yang berjalan normal." />
        <Accordion label="Apakah aplikasi ini berfungsi?" description="Aplikasi ini berfungsi sampai 99% pada server yang berjalan normal." />
        <Accordion label="Apakah aplikasi ini berfungsi?" description="Aplikasi ini berfungsi sampai 99% pada server yang berjalan normal." />
        <Accordion label="Apakah aplikasi ini berfungsi?" description="Aplikasi ini berfungsi sampai 99% pada server yang berjalan normal." />
        <Accordion label="Apakah aplikasi ini berfungsi?" description="Aplikasi ini berfungsi sampai 99% pada server yang berjalan normal." />
      </div>
      <div className="flex justify-around text-white p-5 bg-[#0074A7]">
        <h1 className="font-medium text-xl">
          Beri Kami Saran <i className="fa-solid fa-envelope"></i>
        </h1>
        <div className="w-80 flex flex-col justify-center items-center">
          <p className="text-center">Tidak menemukan informasi yang sesuai? Kirim saran informasi atau panduan yang Anda inginkan.</p>
            <button className="btn bg-white text-[#0074A7] rounded-full mt-3 btn-sm w-1/2">Kirim saran</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPages;
