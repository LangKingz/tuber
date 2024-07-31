import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "1 Bulan",
    price: 10000,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quae?",
  },
  {
    id: 2,
    title: "3 Bulan",
    price: 40000,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quae?",
  },
  {
    id: 3,
    title: "6 Bulan",
    price: 60000,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quae?",
  },
  {
    id: 4,
    title: "1 Tahun",
    price: 80000,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quae?",
  },
  {
    id: 5,
    title: "2 Tahun",
    price: 100000,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quae?",
  },
  // {
  //   id: 6,
  //   title: "48 Bulan",
  //   price: 1000000,
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, quae?",
  // },
];

export const GET = async (request) => {
  return NextResponse.json({
    message: "success",
    data: data,
  });
};
