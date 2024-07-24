import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-4 bg-black text-white flex gap-8">
      <div className="flex w-1/3 p-3 flex-col flex-wrap gap-2">
        <Image src={"/logo.png"} alt="" width={150} height={150} />
        <div className="caption gap-4 flex flex-col text-[#C1D3AC]">
          <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt nostrum aliquam expedita aliquid voluptatem aut tempora blanditiis ipsam saepe!</p>
          <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt nostrum aliquam expedita aliquid voluptatem aut tempora blanditiis ipsam saepe!</p>
        </div>
        <div className="medsos flex gap-3 text-xl text-[#C1D3AC]">
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-8 w-full text-[#C1D3AC]">
        <div className="flex gap-4 flex-col">
          <h1 className="text-md  font-bold ">Hosting</h1>
          <ul className="flex flex-col">
            <li>
              <Link href={"/"}>Web hosting</Link>
            </li>
            <li>
              <Link href={"/"}>VPS Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Cloud Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Wordpress Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Hosting Murah</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-md  font-bold ">Hosting</h1>
          <ul className="flex flex-col">
            <li>
              <Link href={"/"}>Web hosting</Link>
            </li>
            <li>
              <Link href={"/"}>VPS Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Cloud Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Wordpress Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Hosting Murah</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-md  font-bold ">Hosting</h1>
          <ul className="flex flex-col">
            <li>
              <Link href={"/"}>Web hosting</Link>
            </li>
            <li>
              <Link href={"/"}>VPS Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Cloud Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Wordpress Hosting</Link>
            </li>
            <li>
              <Link href={"/"}>Hosting Murah</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
