import React from "react";
import tiger from "../images/tiger.png";

export default function PartTiger() {
  return (
    <div className="flex items-center gap-6 flex-col">
      <h1 className="text-[#760B0B] text-[20px] font-medium text-center">
        La Société des Ambianceurs et des Personnes Elégantes (the Society of
        Ambiance-Makers and Elega)
      </h1>
      <button className="w-fit hover:bg-transparent hover:text-[#760B0B] hover:border-[2px] border-white border-[2px] hover:font-medium hover:border-[#760B0B] bg-[#760B0B] text-white px-[30px] py-[10px] rounded-[5px] ">
        Shop Now
      </button>
      <img src={tiger} className="h-[200px]"></img>
    </div>
  );
}
