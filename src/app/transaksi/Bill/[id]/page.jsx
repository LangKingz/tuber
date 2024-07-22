import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  const date = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div>
      <nav className="p-4 flex px-8 items-center justify-between ">
        <div className="">
          <Image src={"/logo.png"} alt="" width={120} height={120} className="bg-[#0074A7] p-2 rounded-full" />
        </div>
        <div className="">
          <Link href="/" className="text-[#0074A7] flex gap-3 items-center text-lg font-medium">
            <i className="fa-solid  fa-arrow-right"></i>Back
          </Link>
        </div>
      </nav>
      <div className="flex p-8 justify-center items-center flex-col">
        <Image src={"/success.png"} alt="" width={100} height={100} className="bg-center" />
        <h1 className="text-3xl font-bold text-[#0074A7] my-3">TRANSAKSI BERHASIL</h1>
        <p className="text-gray-500 font-bold ">{date}</p>
        <div className="w-2/4 p-10 bg-gradient-to-b from-[#0074A7] to-[#085172] rounded-xl mt-8 text-white">
          <div className="flex justify-between items-center my-4">
            <p>ID Transaksi</p>
            <p>{params.id}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center my-4">
            <p>Paket</p>
            <p>{params.id}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center my-4">
            <p>Pembayaran</p>
            <p>{params.id}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center my-4">
            <p>Alamat Email</p>
            <p>{params.id}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center my-4">
            <p className="font-bold text-2xl">Total</p>
            <p className="font-bold text-2xl">100000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
