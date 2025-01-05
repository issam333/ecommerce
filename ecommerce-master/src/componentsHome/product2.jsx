import React from "react";
import { useState } from "react";
import imgPant from "../images/imgPant.png";
import imgJacket from "../images/imgJacket.png";
import imgJacketGree from "../images/imgJacketGree.png";
import { Link } from "react-router-dom";

export default function Product2() {
  const dataPrt = [
    {
      img: imgPant,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
    {
      img: imgJacket,

      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
    {
      img: imgJacketGree,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
  ];

  // Use state to track hover status for each card
  const [hoverIndex, setHoverIndex] = useState(null);
  console.log(hoverIndex);

  return (
    <div className="w-[100%] px-2.5 mb-20 capitalize">
      <h1 className="ml-[5%] text-4xl font-bold">Our Bestseller</h1>
      <div className="  flex gap-10 flex-wrap justify-around mt-7">
        {dataPrt.map((el, index) => (
          <Link
            to="/shirt"
            key={index}
            className="cursor-pointer bg-gray-200 flex flex-col gap-2.5 h-[350px] w-[250px] rounded-lg justify-center items-center p-7.5 shadow-[1px_5px_20px_0px_#0B0B0B]"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className=" h-[100%] flex justify-center items-center">
              <img
                className={
                  "h-[100PX] transition-opacity duration-[1s] ease-in-out "
                }
                src={el.img}
              />
            </div>

            <div className="px-10 py-2 text-center">
              <div className="font-medium leading-[23.74px]">{el.title}</div>
              <div className="font-serif font-normal text-base leading-[18.74px] mt-3">
                {el.disc}
              </div>

              <div className="flex justify-center mt-[20px] cursor-pointer gap-4  w-[100%] ">
                <div className="hover:scale-125 duration-500 bg-blue-700 h-5 w-5 rounded-[50%] "></div>
                <div className="hover:scale-125 duration-500 bg-black h-5 w-5 rounded-[50%] border-black border-[1px]"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
