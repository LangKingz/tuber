"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { getData } from "../services";
import { PackagesContext } from "@/context/context";

const CardTypes = () => {
  const { setSelected } = useContext(PackagesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getData("http://localhost:3000/api/type");
      setData(res.data);
    };
    fetch();
  }, []);

  const handleSelect = (e) => {
    setSelected(e);
  }

  console.log(data);

  return (
    <>
      {data.map((e) => (
        <Link href={`/transaksi`} key={e.id} className="w-[200px] text-white flex flex-col">
          <div onClick={()=> handleSelect(e)} className={`cursor-pointer`}>
            <div className="bg-[#085172] p-3 rounded-t-xl text-center">
              <h1 className="font-bold">{e.title}</h1>
            </div>
            <div className="bg-gradient-to-b from-[#0074A7] rounded-b-xl to-[#085172] p-3">
              <div className="flex flex-col items-center">
                <h1 className=" text-2xl font-bold">{e.price.toLocaleString("id-ID")}</h1>
                <p className="text-[10px]">IDR/bulan</p>
              </div>
              <p className="w-full h-[130px] overflow-hidden text-[11px] p-2 mt-3">{e.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardTypes;
