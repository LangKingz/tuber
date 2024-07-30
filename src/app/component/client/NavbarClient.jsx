"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../Navbar";

const NavbarClient = () => {
  const path = usePathname();
  const disable = [
    "/login",
    "/register",
    "/payment",
    "/bill",
    '/transaksi',
    "/transaksi/bill",
    "/forget"
  ];
  return <div>{disable.includes(path) ? null : <Navbar />}</div>;
};

export default NavbarClient;
