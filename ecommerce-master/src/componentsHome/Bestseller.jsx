import React, { useState } from "react";
import product1type1 from "../images/product-1-type-1.png";
import product1type2 from "../images/product-1-type-2.png";
import product2type1 from "../images/product-2-type-1.png";
import product2type2 from "../images/product-2-type-2.png";
import product3type1 from "../images/product-3-type-1.png";
import product3type2 from "../images/product-3-type-2.png";

function Bestseller() {
  const dataPrt = [
    {
      img: product1type1,
      img2: product1type2,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
    {
      img: product2type1,
      img2: product2type2,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
    {
      img: product3type1,
      img2: product3type2,
      title: "blazer",
      disc: "Slim fit blazer made of premium linen blend",
      price: "$89.00",
    },
  ];

  // Use state to track hover status for each card
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="w-[100%] px-2.5 mb-20 capitalize">
      <h1 className="ml-[5%] text-4xl font-bold">Our Bestseller</h1>
      <div className="flex sm:gap-2.5 gap-[50px] flex-wrap justify-around mt-7">
        {dataPrt.map((el, index) => (
          <div
            key={index}
            className= " overflow-hidden bg-gray-300 flex flex-col h-[350px] w-[250px] rounded-lg justify-center items-center p-7.5 shadow-[1px_5px_20px_0px_#0B0B0B] "
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="bg-slate-100 rounded-md w-[100%] h-[100%] flex justify-center items-center">
              <img
                className={`h-[100PX] transition-opacity duration-[1s] ease-in-out ${
                  hoverIndex === index ? "opacity-0" : "opacity-100"
                }`}
                src={el.img}
                alt={el.title}
              />
              <img
                className={`h-[100PX] transition-opacity duration-[1s] ease-in-out ${
                  hoverIndex === index ? "opacity-100" : "opacity-0"
                }`}
                src={el.img2}
                alt={el.title}
                style={{ position: "absolute" }}
              />
            </div>

            <div className="  px-10 py-2 text-center">
              <div className="font-medium leading-[23.74px]">{el.title}</div>
              <div className="font-serif font-normal text-base leading-[18.74px] mt-3">
                {el.disc}
              </div>
              <div className=" mt-2 bg-yellow-400 rounded-lg font-serif font-semibold text-lg leading-[23.42px]">
                {el.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
