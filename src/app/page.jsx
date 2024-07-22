import Image from "next/image";
import { getData } from "./services";
import Link from "next/link";

export default async function Home() {
  const data = await getData("http://localhost:3000/api/product");
  const dataProduct = data.data;
  // const fitur = dataProduct.fitur;
  console.log(dataProduct);
  return (
    <div className="flex flex-col mt-20">
      <div className="flex justify-center w-full p-8 lg:px-14 py-5 flex-wrap lg:mt-16 mt-8 gap-y-14">
        <div className="container lg:w-2/5 flex flex-col lg:gap-y-12 gap-y-7 gap-x-3">
          <h1 className="font-bold text-5xl text-[#0074A7]">LARNHost</h1>
          <p className="text-[#FF9500] text-xl font-medium">Onlinekan Bisnismu Sekarang dengan LARNHost</p>
          <p className="text-[#0074A7] font-medium">
            Buat website dan email untuk bisnismu dan mulai mendunia dengan layanan web hosting Indonesia dari LARNHost. Dapatkan hosting dengan kecepatan dan keamanan terbaik hanya Rp 99.000/tahun.
          </p>
          <Link href={'#paket'} className="bg-[#0074A7] btn hover:bg-[#085172] text-white py-4 px-5 rounded-2xl w-1/3 font-semibold">Mulai</Link>
        </div>
        <div className=" lg:w-2/4 px-12 flex ">
          <Image src={"/home.png"} alt="" width={900} height={900} />
        </div>
      </div>
      <div className="flex p-4 gap-4 flex-wrap justify-center" id="paket">
        {dataProduct.map((e) => (
          <div key={e.id} className=" gap-4 w-[380px]  h-full flex-col flex bg-gradient-to-b rounded-[20px] from-[#0074A7] p-12  to-[#085172]">
            <div className="flex justify-center">
              <h1 className="text-white w-2/3 text-center h-20 font-bold text-2xl">{e.title}</h1>
            </div>

            <div className="flex">
              <img src={e.image} alt="" className="w-[300px] h-[200px] rounded-xl object-cover" />
            </div>
            <div className="text-white  flex justify-center ">
              <p>
                Rp <span className="font-bold text-4xl">{e.price.toLocaleString("id-ID")}</span>/bln
              </p>
            </div>
            <Link href="" className="btn text-[#0074A7] bg-white">Pilih Paket</Link>
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
        ))}
      </div>
    </div>
  );
}
