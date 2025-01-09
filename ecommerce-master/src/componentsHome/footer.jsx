import React from "react";

export default function Footer() {
  return (
    <div className="mt-[100px]">
      <div className="bg-[#0B0B0B] text-white p-[30px] capitalize ">
        <div className="flex gap-2 justify-around flex-wrap text-center">
          <div className="w-[250px] ">
            <h2 className=" leading-[70px] font-[Roboto-Serif] text-2xl w-auto font-bold ">
              la sape
            </h2>
            <p className=" font-[Roboto-Serif] font-normal ">
              Société des Ambianceurs et des Personnes Élégantes{" "}
            </p>
          </div>

          <ul>
            <h2 className="leading-[70px] font-[Roboto-Serif] text-2xl w-auto font-bold ">
              home
            </h2>
            <li className=" font-[Roboto-Serif] font-normal ">abut us</li>
            <li className=" font-[Roboto-Serif] font-normal ">categories</li>
            <li className=" font-[Roboto-Serif] font-normal ">
              our bestsellers
            </li>
            <li className=" font-[Roboto-Serif] font-normal ">contact us</li>
          </ul>
          <div>
            <ul>
              <h2 className="leading-[70px] font-[Roboto-Serif] text-2xl w-auto font-bold ">
                important links
              </h2>
              <li>abut us</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className=" leading-[70px] font-[Roboto-Serif] text-2xl w-auto font-bold ">
                contact us
              </h2>
              <li className=" font-[Roboto-Serif] font-normal ">0506134451</li>
              <li className=" font-[Roboto-Serif] font-normal ">
                sales@selecthous
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex p-1 justify-center gap-6 ">
        <p>All rights reserved to the lasape house</p>
        <p>2024.</p>
      </div>
    </div>
  );
}
