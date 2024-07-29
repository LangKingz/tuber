"use client";
import React, { useContext, useEffect, useState } from "react";
import { getData } from "../services";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PackagesContext } from "@/context/context";

const CardMobile = () => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData("http://localhost:3000/api/type");
      setData(response.data);
    };
    fetchData();
  }, []);

  const {setProduct} = useContext(PackagesContext)

  const handleSelect = () => {
    setSelect(!select);
  };
  console.log(data);
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }} 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <div key={e.id} className="w-[200px] text-white ">
              <div onClick={handleSelect} className={`cursor-pointer ${select ? "border border-yellow-500" : ""}`}>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardMobile;
