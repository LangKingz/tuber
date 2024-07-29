"use client";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getData } from "../services";
import CardHome from "./card";
import Link from "next/link";
import Image from "next/image";
import { PackagesContext } from "@/context/context";

const Slider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData("http://localhost:3000/api/product");
      setData(response.data);
    };
    fetchData();
  }, []);

  const { setProduct } = useContext(PackagesContext);
  const handleClick = (e) => {
    setProduct(e);
  };

  console.log(data);
  return (
    <div className="my-12 justify-center flex">
      <Swiper
        className=""
        // install Swiper modules
        modules={[Navigation, FreeMode, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        centerInsufficientSlides={true}
      >
        {data.map((e) => (
          <SwiperSlide key={e.id} className="text-center">
            <div key={e.id} className=" gap-4 h-full flex-col flex bg-gradient-to-b rounded-[20px] from-[#0074A7] p-12  to-[#085172]">
              <div className="flex justify-center">
                <h1 className="text-white w-2/3 text-center h-20 font-bold text-2xl">{e.title}</h1>
              </div>

              <div className="flex justify-center">
                <Image width={200} height={200} src={e.image} alt="" className=" rounded-xl object-cover" />
              </div>
              <div className="text-white  flex justify-center ">
                <p>
                  Rp <span className="font-bold text-4xl">{e.price.toLocaleString("id-ID")}</span>/bln
                </p>
              </div>
              <Link onClick={() => handleClick(e)} href={`/details/${e.id}`} className="btn text-[#0074A7] bg-white">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
