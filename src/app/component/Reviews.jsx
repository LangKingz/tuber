"use client";

import React, { useEffect, useState } from "react";
import { getData } from "../services";

const ReviewCardHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getData("http://localhost:3000/api/reviews");
      const result = res.data;
      setData(result.slice(0, 3));
    };
    fetch();
  }, []);

  return (
    <div className="my-7 grid lg:grid-cols-3 grid-cols-1 gap-4">
      {data.map((e) => (
        <div key={e.id} className="card p-6 bg-gray-200 gap-4">
          <div className="flex">
            {Array.from({length:e.rating}).map((e)=>(
                <img key={e} src="/star.svg" alt="" />
            ))}
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-[#0074A7]">{e.type}</h1>
            <p className="text-[#0074A7] ">{e.comment}</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="profile">
              <img src={e.image} alt="" width={50} height={50} className="rounded-full" />
            </div>
            <div className="">
              <h1>{e.name}</h1>
              <p>{e.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCardHome;
