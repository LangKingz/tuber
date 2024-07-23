import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "John Doe",
    title: "lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.",
    type: "Cloud hosting",
    date: "2022-01-01",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.",
    type: "Cloud hosting",
    date: "2022-01-02",
    rating: 3,
  },
  {
    id: 3,
    name: "Bill Smith",
    title: "lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.",
    type: "Shared hosting",
    date: "2022-01-03",
    rating: 4,
  },
  {
    id: 4,
    name: "Mary Johnson",
    title: "lorem ipsum",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.",
    type: "VPS hosting",
    date: "2022-01-04",
    rating: 5,
  },
];

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const details = data.find((e) => e.id === parseInt(id));
    if (details) {
      return NextResponse.json(details);
    }
  }

  return NextResponse.json({
    message: " success",
    data: data,
  });
};
