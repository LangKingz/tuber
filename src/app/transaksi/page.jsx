"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import InputForm from "../component/inputForm";
import { useRouter } from "next/navigation";
import { PackagesContext } from "@/context/context";

const FormPages = () => {
  const { selected } = useContext(PackagesContext);
  const { setMethod } = useContext(PackagesContext);
  const { setEmail } = useContext(PackagesContext);
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    push("/transaksi/bill");
  };

  const handleMethod = (e) => {
    setMethod(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-[#085172] h-screen  to-white">
      <nav className="flex p-6">
        <Link href={"/"}>
          {" "}
          <i className="fa-solid text-white fa-arrow-left text-xl"></i>
        </Link>
      </nav>
      <div className=" flex p-5 gap-5 flex-wrap">
        <div className="flex flex-col w-full lg:w-1/5 h-fit bg-white p-4 rounded-xl gap-3 ">
          <h1>Metode Pembayaran</h1>
          <label htmlFor="radio" className="flex justify-between h-10">
            <div className="flex gap-3 items-center">
              <input type="radio" name="select" id="" value="Credit Card" onChange={handleMethod} className="" />
              Credit Card
            </div>
            <Image src={"/kartu.svg"} alt="" width={50} height={50} />
          </label>
          <label htmlFor="radio" className="flex justify-between h-10">
            <div className="flex gap-3 items-center">
              <input type="radio" name="select" id="" value={"Dana"} onChange={handleMethod} className="" />
              Dana
            </div>
            <Image src={"/dana.svg"} alt="" width={50} height={50} />
          </label>
          <label htmlFor="radio" className="flex justify-between h-10">
            <div className="flex gap-3 items-center">
              <input type="radio" name="select" id="" value={"ShopeePay"} onChange={handleMethod} className="" />
              Shopeepay
            </div>
            <Image src={"/shope.svg"} alt="" width={50} height={50} />
          </label>
          <label htmlFor="radio" className="flex justify-between h-10">
            <div className="flex gap-3 items-center">
              <input type="radio" name="select" id="" value={"Indomaret"} onChange={handleMethod} className="" />
              Indomaret
            </div>
            <Image src={"/indo.svg"} alt="" width={50} height={50} />
          </label>
        </div>
        <form onSubmit={handleSubmit} action="" className="bg-white  flex-1 rounded-xl p-5 px-8 py-9 shadow-xl">
          <InputForm label="nama" type="text" placeholder="Masukkan nama anda" icon="user" />
          <InputForm label="No. Hp " type="tel" placeholder="Masukkan nomor anda" icon="phone" />
          <InputForm label="Email " type="email" onChange={handleEmail} placeholder="Masukkan Email anda" icon="envelope" />
          <div className="flex w-full items-center gap-8">
            <div className="w-1/2">
              <label htmlFor="">Provinsi</label>
              <label htmlFor="select" className="flex items-center  border rounded-lg border-black ">
                <i className="fa-solid fa-location-dot  p-2"></i>
                <select name="" id="" className="w-full p-2" placeholder="Masukkan Provinsi anda">
                  <option value="">Pilih Provinsi</option>
                  <option value="">Kalimantan Barat</option>
                  <option value="">Kalimantan timur</option>
                  <option value="">Kalimantan selatan</option>
                  <option value="">Kalimantan tengah</option>
                </select>
              </label>
            </div>
            <InputForm cls="w-1/2" label="kota " type="text" placeholder="Masukkan Kota anda" icon="city" />
          </div>
          <div className="flex  gap-5">
            <InputForm label="Alamat" type="text" placeholder="Masukkan kota anda" icon="map" cls="w-1/2" />
            <InputForm label="Kecamatan" type="text" placeholder="Masukkan kecamatan anda" icon="map" cls="w-1/2" />
          </div>
          <div className="mt-10">
            <div className="flex justify-between my-5">
              <h1 className="font-bold text-xl ">TOTAL</h1>
              <h1 className="font-bold text-xl ">Rp. {selected?.price.toLocaleString("id-ID") || 0}</h1>
            </div>
            <hr className="border-none h-[2px] bg-black" />
            <div className="my-4 flex justify-center items-center flex-col">
              <button type="submit" className="btn bg-[#084E72] text-white font-bold hover:bg-[#0074A7]">
                Buat Tagihan Pembayaran
              </button>
              <label htmlFor="checkbox" className="flex gap-3 items-center mt-3">
                <input type="checkbox" name="" id="" />
                Dengan checkout, anda setuju dengan Ketentuan Penggunaan kami dan mengonfirmasi bahwa anda telah membaca Kebijakan Privasi kami. Anda dapat membatalkan biaya perpanjangan layanan kapan saja.
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPages;
