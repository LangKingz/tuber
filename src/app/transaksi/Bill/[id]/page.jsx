import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
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
        
      </div>
    </div>
  );
};

export default page;
