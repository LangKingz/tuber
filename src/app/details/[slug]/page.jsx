import CardTypes from "@/app/component/cardType";
import { getData } from "@/app/services";
import Link from "next/link";
import React from "react";

const Detailspages = async ({params}) => {
  const data = await getData("http://localhost:3000/api/product?id="+params.slug);
  console.log(data)
  return (
    <>
      <div className="flex justify-center mt-32 gap-5 flex-wrap">
        <div className=" w-full p-3 lg:w-1/2 gap-10 lg:gap-0 flex flex-col justify-evenly">
          <div className="">
            <h1 className="text-6xl font-bold text-[#0074A7]">{data.data.title}</h1>
            <p className="font-normal text-[#FF9500]">{data.data.desc}</p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              <img src="/check.png" alt="" srcset="" />
              <p className="font-normal text-[#0074A7]">{data.data.fitur1}</p>
            </li>
            <li className="flex items-center gap-2">
              <img src="/check.png" alt="" srcset="" />
              <p className="font-normal text-[#0074A7]">{data.data.fitur2}</p>
            </li>
            <li className="flex items-center gap-2">
              <img src="/check.png" alt="" srcset="" />
              <p className="font-normal text-[#0074A7]">{data.data.fitur3}</p>
            </li>
          </ul>
        </div>
        <div className="flex  lg:">
          <img className="lg:w-[500px] w-[400px] h-[300px rounded-2xl" src={data.data.image} alt={data.data.image}  srcset="" />
        </div>
      </div>
      <section className="mt-20 p-5 flex flex-col items-center">
        <div className="flex flex-col max-w-fit  ">
          <h1 className="text-4xl  font-medium mb-5 text-[#0074A7]">Pilih Paket</h1>
          <div className="flex gap-3 flex-wrap">
            <CardTypes />
            <CardTypes />
            <CardTypes />
            <CardTypes />
            <CardTypes />
          </div>
          <div className="flex mt-4 justify-end  w-full">
            <Link href={""} className="btn btn-wide text-white bg-[#0074A7] hover:bg-[#085172]">
              Beli
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailspages;
