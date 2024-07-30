"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const username = localStorage.getItem("username");

  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-5 py-3 fixed w-full z-10 top-0 bg-[#0074A7] flex justify-between items-center">
      <div className="">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={150} height={100} className="" />
        </Link>
      </div>
      <div className="lg:flex hidden ">
        <ul className="flex items-center gap-x-7 font-semibold text-white">
          <li>
            <Link className={pathName === "/" ? "text-[#f4e83c]" : ""} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={pathName === "/reviews" ? "text-[#f4e83c]" : ""} href={"/reviews"}>
              Reviews
            </Link>
          </li>
          <li>
            <Link className={pathName === "/faq" ? "text-[#f4e83c]" : ""} href={"/faq"}>
              FAQ
            </Link>
          </li>
          <li className={!username ? "hidden" : ""}>
            <h1>{username}</h1>
          </li>
          <li>
            {username ? (
              <Link href={"/"} onClick={() => localStorage.clear()} className="py-2  px-4 border rounded-2xl">
                logout
              </Link>
            ) : (
              <Link href="/login" className="py-2  px-4 border rounded-2xl">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
      <label className="btn btn-circle swap swap-rotate lg:hidden">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />

        {/* hamburger icon */}
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      <div className={`transition delay-200 ease-in absolute top-[4.5rem] right-0  bg-white w-full z-10 h-screen ${isOpen ? "block lg:hidden" : "hidden"}`}>
        <ul className="text-center w-full  ">
          <li className={`w-full p-8 text-[#0074A7] font-medium text-xl border hover:bg-gray-300 ${pathName === "/" ? "bg-slate-300 text-white" : ""} `}>
            <Link href={"/"} className={`w-full `}>
              Home
            </Link>
          </li>
          <li className={`w-full p-8 text-[#0074A7] font-medium text-xl border hover:bg-gray-300 ${pathName === "/reviews" ? "bg-slate-300" : ""} `}>
            <Link href={"/reviews"} className={`w-full `}>
              Reviews
            </Link>
          </li>
          <li className={`w-full p-8 text-[#0074A7] font-medium text-xl border hover:bg-gray-300 ${pathName === "/faq" ? "bg-slate-300" : ""} `}>
            <Link href={"/faq"} className={`w-full`}>
              FAQ
            </Link>
          </li>
          <li className={`w-full p-8 text-[#0074A7] font-medium text-xl border hover:bg-gray-300 ${pathName === "/login" ? "bg-slate-300" : ""} `}>
            <Link href={"/login"} className={`w-full`}>
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
