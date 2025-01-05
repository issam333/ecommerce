import React, { useState } from "react";
import imgBelt from "../images/imgBelt.png";
import imgShirt from "../images/imgShirt.png";
import imgGravata from "../images/imgGravata.png";
import imgShoe from "../images/imgShoe.png";

export default function Product1() {
  let [hover, setHover] = useState(null);


  let imgs = [
    {
      img: imgBelt,
    },
    {
      img: imgShirt,
    },
    {
      img: imgGravata,
    },
    {
      img: imgShoe,
    },
  ];
  return (
    <div className=" w-[100%] px-2.5 mb-[30px] capitalize">
      <h1 className="ml-[5%] text-4xl font-bold">Our Bestseller</h1>

      <div className="py-[20px] flex gap-[20px] flex-wrap justify-around mt-7 ">
        {imgs.map((el, id) => (
          <img
            
            className={`h-[100px] cursor-pointer duration-[0.5s] ${
              hover === id ? "scale-125" : "scale-1"
            }`}
            onMouseEnter={() => setHover(id)}
            onMouseLeave={() => setHover(null)}
            key={id}
            src={el.img}
          ></img>
        ))}
      </div>
    </div>
  );
}
