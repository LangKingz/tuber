"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="px-5 py-3 fixed w-full top-0 bg-[#0074A7] flex justify-between items-center">
      <div className="">
        <Image src={"/logo.png"} alt="Logo" width={150} height={100} className="" />
      </div>
      <div className="lg:flex hidden ">
        <ul className="flex items-center gap-x-7 font-semibold text-white">
          <li>
            <Link className={pathName === "/" ? "text-[#f4e83c]" : ""} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"}>VPS</Link>
          </li>
          <li>
            <Link href={"/"}>Domain</Link>
          </li>
          <li>
            <Link href={"/"}>FAQ</Link>
          </li>
          <li>
            <Link href="/login" className="py-2  px-4 border rounded-2xl">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <label className="btn btn-circle swap swap-rotate lg:hidden">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* hamburger icon */}
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>
  );
};

export default Navbar;
