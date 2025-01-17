"use client";
import InputField from "@/app/component/input";
import PasswordField from "@/app/component/password";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { push } = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (!username || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      })
      return;
    }

    console.log(username, email, password);

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    push("/login");
    e.target.reset();
  };

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
          <form onSubmit={handleSubmit} action="" className="lg:shadow-2xl rounded-xl lg:border w-full lg:w-2/3 lg:ml-5 p-10 lg:p-16 flex flex-col gap-3">
            <h1 className="text-3xl text-center font-bold text-[#085172]">Register</h1>
            <InputField labels="Username" name="username" type="text" placeholder="Masukan nama anda" icon="user" />
            <InputField labels="Email" name="email" type="text" placeholder="Masukan email anda" icon="envelope" />
            <PasswordField labels="Password" name="password" placeholder="Password" icon="key" />
            <label htmlFor="" className="flex items-center gap-3 mt-2 text-sm">
              <input type="checkbox" name="" className="h-4 w-4" id="" />
              <p>
                I agree with LARNHost&apos;s <span className="text-[#0074A7]">Terms and Conditions</span>
              </p>
            </label>
            <button type="submit" className="bg-[#0074A7] btn hover:bg-[#085172] text-white py-4 px-5 rounded-2xl  font-semibold mt-5">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
