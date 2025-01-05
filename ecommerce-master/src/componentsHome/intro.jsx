import React from "react";

function intro() {
  return (
    <div id="intro">
      <div  className="w-[90%] mx-auto h-[500px] z-1 ">
        <div className="absolute top-1/3">
          <h2 className="text-[64px] text-white font-bold">La Sape</h2>
          <p className="text-[32px] text-white">
            Société des Ambianceurs et des Personnes Élégantes
          </p>
          <button className="bg-white mt-4 duration-700  transition-all hover:bg-black hover:text-white  p-3 px-8 gap-4 text-black rounded-md">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default intro;
