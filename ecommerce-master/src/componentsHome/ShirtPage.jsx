import React, { useState } from "react";
import shirtImage from "../images/shirt.png";
import { PiLightningLight } from "react-icons/pi";


const Shirt = () => {
    let [valQantity , setValQantity] = useState('0')
  return (
    <div className="capitalize flex mx-[140px] my-12 ">
      <div>
        <img src={shirtImage} alt="" />
      </div>
      <div className=" mx-10 bg-[#EFEEEE3D] shadow-[0_9px_15px_rgba(0,0,0,0.2)] w-full px-10 rounded-md">
        <div>
          <div>
            <h1 className="text-[50px] font-serif">blazer</h1>
          </div>
          <div>
            <p className="text-[30px] font-serif text-gray-500">
              Slim fit blazer made of premium linen blend.{" "}
            </p>
          </div>
          <div className="mt-2 text-[30px] font-serif">
            <p>us $64.16</p>
          </div>
          <div className="mt-2 text-[30px] font-serif">
            <p>
              <span className="text-gray-500">condition :</span> new with tags{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <select
              className="h-12 border outline-none font-serif w-full rounded px-2 text-[25px]"
              type="text"
            >
              <option
                style={{ fontFamily: "Arial, sans-serif", fontSize: "18px" }}
                value=""
              >
                color : white
              </option>
              <option
                style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}
                value=""
              >
                color : black
              </option>
            </select>
          </div>
          <div className="mt-4">
            <select
              className=" h-12 border outline-none font-serif w-full rounded px-2 text-[25px]"
              type="text"
            >
              <option
                style={{ fontFamily: "Arial, sans-serif", fontSize: "18px" }}
                value=""
              >
                size: xx - large
              </option>
              <option
                style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}
                value=""
              >
                size: xx - large
              </option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex items-center font-serif">
          <div>quantity :</div>
          <div className="mx-2">
            <input
              value={valQantity}
              
              className=" h-12 w-12 outline-none border text-center font-serif text-[25px] rounded-md"
              type="number"
              onChange={(e)=>{setValQantity(e.target.value)}}
            />
          </div>
          <div>
            <p className=" text-red-600 font-serif ">
              last one <span className=" text-gray-400"> . 2 sold </span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <button className=" w-full bg-gray-800 text-white py-2 rounded-full text-[25px] font-serif mt-2 ">
              buy it now
            </button>
          </div>
          <div>
            <button className=" w-full border text-black py-2 rounded-full text-[25px] font-serif mt-2  ">
              add to cart{" "}
            </button>
          </div>
          <div>
            <button className=" w-full border text-black py-2 rounded-full text-[25px] font-serif mt-2 ">
              add to watchlist
            </button>
          </div>
          <div>
            <div className=" bg-[#F7F7F7] w-full my-5 h-14 font-serif flex justify-evenly items-center  ">
              <span className=" border rounded-full bg-white p-2">
                <PiLightningLight size={"30px"} />
              </span>
              <span>
                <span className=" font-bold">people are checking out .</span> 5
                have added this to their watchlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shirt;
