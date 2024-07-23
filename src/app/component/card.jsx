'use client';

import React, { useContext, useEffect, useState } from "react";
import { getData } from "../services";
import Link from "next/link";
import { PackagesContext } from "@/context/context";

const CardHome =  () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getData("http://localhost:3000/api/product");
      setData(data.data);
    }
    fetch()
  },[])

  console.log(data)

  


  const { setProduct } = useContext(PackagesContext);
  const dataProduct = data.data;

  const handleClick = (e) =>{
    setProduct(e)
  }
  return (
    <div className="hidden lg:grid lg:grid-cols-3 gap-4">
      {data.map((e) => (
        <div key={e.id} className=" gap-4 h-full flex-col flex bg-gradient-to-b rounded-[20px] from-[#0074A7] p-12  to-[#085172]">
          <div className="flex justify-center">
            <h1 className="text-white w-2/3 text-center h-20 font-bold text-2xl">{e.title}</h1>
          </div>

          <div className="flex justify-center">
            <img src={e.image} alt="" className=" object-fill rounded-xl object-cover" />
          </div>
          <div className="text-white  flex justify-center ">
            <p>
              Rp <span className="font-bold text-4xl">{e.price.toLocaleString("id-ID")}</span>/bln
            </p>
          </div>
          <Link onClick={()=> handleClick(e)} href={`/details/${e.id}`} className="btn text-[#0074A7] bg-white">
            Pilih Paket
          </Link>
          <div className="">
            <p className="text-white text-center">{e.desc}</p>
            <hr className="my-8 font-bold h-1 border-none bg-white " />
            <ul className="text-sm text-white ">
              <li className=" h-10 overflow-hidden">
                <i className="fa-solid fa-star mx-1 text-wrap"></i>
                {e.fitur1}
              </li>
              <li className=" h-10 overflow-hidden">
                <i className="fa-solid fa-star mx-1"></i>
                {e.fitur2}
              </li>
              <li className=" h-10 overflow-hidden">
                <i className="fa-solid fa-star mx-1"></i>
                {e.fitur3}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHome;
