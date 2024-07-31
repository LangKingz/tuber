import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Beli Domain",
    price: 10000,
    image: "/Globe.png",
    desc: "Daftarkan nama dan ide bisnis Anda dg berbagai pilihan ekstensi domain yang sesuai bidang bisnis",
    fitur1: ".ONLINE",
    fitur2: ".STORE",
    fitur3: "dan lain lain",
  },
  {
    id: 2,
    title: "Hosting Web",
    price: 15000,
    image: "/Wifi.png",
    desc: "Web hosting Indonesia yang sesuai untuk website dan email bisnis kecil hingga menengah",
    fitur1: "Gratis Migrasi Website",
    fitur2: "SSL Gratis  UNLIMITED",
    fitur3: "Bandwidth 100 GB",
  },
  {
    id: 3,
    title: "Cloud Hosting",
    price: 100000,
    image: "/Cast.png",
    desc: "Hosting dengan dedicated CPU, RAM, & storage, reliable untuk website dengan kunjungan tinggi",
    fitur1: "Dedicated Resource",
    fitur2: "cPanel & LiteSpeed Included",
    fitur3: "Managed Server",
  },
];

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if(id){
    const detailsId = data.find((item)=>item.id === parseInt(id))
    if(detailsId){
      return NextResponse.json({message: "success" , data : detailsId})
    }
  }

  return NextResponse.json({ message: "success", status: 200, data: data });
};
