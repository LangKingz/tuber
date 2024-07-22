import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Hosting Unlimited",
    price: 100000,
    image: "https://cdn.pixabay.com/photo/2020/03/06/11/09/digital-4906793_1280.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
  },
  {
    id: 2,
    title: "Cloud Hosting",
    price: 140000,
    image: "https://cdn.pixabay.com/photo/2019/02/20/17/53/bitcoin-4009688_1280.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
    fitur3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam laborum.",
  },
  {
    id: 3,
    title: "Domain",
    price: 200000,
    image: "https://cdn.pixabay.com/photo/2015/12/09/13/48/pinterest-1084757_1280.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium assumenda dolores veniam labo",
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
