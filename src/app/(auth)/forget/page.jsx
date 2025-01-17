import InputField from "@/app/component/input";
import PasswordField from "@/app/component/password";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="lg:flex hidden w-1/3 bg-[#085172] relative ">
        <Image className="absolute right-[-10%] h-[80%] w-[80%] top-20" src={"/Regis.svg"} alt="" width={150} height={150} />
      </div>
      <div className="flex-1 p-2 ">
        <div className="header flex justify-end ">
          <Link href="/">
            <Image src={"/logo.png"} alt="" className="bg-[#0074A7] p-2 rounded-full" width={150} height={150} />
          </Link>
        </div>
        <div className=" flex flex-col my-6 h-[80%] p-3 justify-center">
          <form action="" className="lg:shadow-2xl rounded-xl lg:border w-full lg:w-2/3 lg:ml-5 p-10 lg:p-16 flex flex-col gap-3">
            <h1 className="text-3xl text-center font-bold text-[#085172]">Forget Password</h1>
            <InputField labels="Username" type="text" placeholder="Masukan nama anda" icon="user" />

            <PasswordField labels="Password Lama" placeholder="Password lama" icon="key" />
            <PasswordField labels="Password Baru" placeholder="Password baru" icon="key" />

            <button className="bg-[#0074A7] btn hover:bg-[#085172] text-white py-4 px-5 rounded-2xl  font-semibold mt-5">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
