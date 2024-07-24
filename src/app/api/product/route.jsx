import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Domain",
    price: 20000,
    image: "/Globe.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam labo",
    fitur1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
  },
  {
    id: 2,
    title: "Hosting Unlimited",
    price: 1000000,
    image: "/Wifi.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
  },
  {
    id: 3,
    title: "Cloud Hosting",
    price: 50000,
    image: "/Cast.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
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
