import Image from "next/image";
import { getData } from "./services";
import Link from "next/link";
import CardHome from "./component/card";
import ReviewCardHome from "./component/Reviews";
import Slider from "./component/slider";
import Footer from "./component/footer";

const Home = async () => {
  return (
    <>
      <div className="flex flex-col mt-12 p-8 lg:p-12 ">
        <div className="flex justify-center w-full  flex-wrap  mt-8 gap-y-14">
          <div className=" lg:w-2/5 flex flex-col lg:gap-y-12 gap-y-7 gap-x-3">
            <h1 className="font-bold text-5xl text-[#0074A7]">LARNHost</h1>
            <p className="text-[#FF9500] text-xl font-medium">Onlinekan Bisnismu Sekarang dengan LARNHost</p>
            <p className="text-[#0074A7] font-medium">
              Buat website dan email untuk bisnismu dan mulai mendunia dengan layanan web hosting Indonesia dari LARNHost. Dapatkan hosting dengan kecepatan dan keamanan terbaik hanya Rp 99.000/tahun.
            </p>
            <Link href={"#paket"} className="bg-[#0074A7] btn hover:bg-[#085172] text-white py-4 px-5 rounded-2xl w-1/3 font-semibold">
              Mulai
            </Link>
          </div>
          <div className=" lg:w-2/4 px-12 flex ">
            <Image src={"/home.svg"} alt="" width={900} height={900} />
          </div>
        </div>
        <section className="lg:flex my-8 gap-4 flex-wrap justify-center" id="paket">
          <div className="hidden lg:block">
            <CardHome />
          </div>
          <div className="lg:hidden">
            <Slider />
          </div>
        </section>
        <section className="my-12 lg:px-12 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-[#0074A7] font-semibold">Latest Review</h1>
            <Link href={"/reviews"}>see all</Link>
          </div>

          <ReviewCardHome />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
