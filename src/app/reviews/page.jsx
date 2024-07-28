import Image from "next/image";
import React from "react";
import { getData } from "../services";

const ReviewsPages = async () => {
  const data = await getData("http://localhost:3000/api/reviews");
  const comment = data.data;
  
  console.log(comment);
  return (
    <div className="mt-20 lg:px-20 p-6">
      <h1 className="text-4xl  text-[#0074A7] font-bold">REVIEWS</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-4 z-0">
        {comment.map((e) => (
          <div key={e.id} className="card my-6  p-8 bg-gray-200 rounded-xl">
            <div className="flex">
              {Array.from({ length: e.rating }).map((e) => (
                <img key={e} src="star.svg" alt="" srcset="" />
              ))}
            </div>
            <div className="my-3">
              <h1 className="font-bold  text-2xl">{e.type}</h1>
              <p>{e.comment}</p>
            </div>
            <div className="flex items-center">
              <div className="pofile">
                <img src={e.image} alt="" srcset="" className="rounded-full" width={50} height={50} />
              </div>
              <div className="ml-3">
                <h1 className="font-bold">{e.name}</h1>
                <p>{e.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPages;
