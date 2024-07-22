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
    "/transaksi/Bill/[id]",
    "/transaksi/Bill/1",
    "/transaksi/Bill/2",
    "/transaksi/Bill/3",
    "/transaksi/Bill/4",
    "/transaksi/Bill/5",
    "/transaksi/Bill/6",
    "/transaksi/Bill/7",
    "/transaksi/Bill/8",
    "/transaksi/Bill/9",
    "/transaksi/Bill/10",
  ];
  return <div>{disable.includes(path) ? null : <Navbar />}</div>;
};

export default NavbarClient;
