import React, { useState } from "react";
import '../index.js';

function TaskFilter() {
  const [minPrice, setMinPrice] = useState(100); // قيمة السعر الأدنى
  const [maxPrice, setMaxPrice] = useState(500); // قيمة السعر الأعلى
  const [currentPrice, setCurrentPrice] = useState(300); // السعر الحالي

  return (
    <>
      <div className="capitalize rounded-xl h-[100vh] w-[100%] pt-8 pb-[90px] px-3 ">
        <div className=" shadow-2xl overflow-y-scroll overflow-x-hidden bg-gray-800 h-[100%] rounded-3xl border-[10px] border-gray-800 ">
          <div className="py-3 px-3">
            <h1 className="text-lg font-bold text-white text-center">
              Product Categories
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-1 mt-6">
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Men
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Women
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Kids
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Bags
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Accessories
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Casual Wear
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Formal Wear
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Winter Wear
            </button>
            <button className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-lg font-semibold text-white hover:bg-gray-600">
              Ethnic Wear
            </button>
          </div>
          <div>
            <div className="w-full max-w-xl mx-auto mt-10 p-4">
              {/* العنوان */}
              <h2 className="text-lg font-semibold mb-4 text-center text-white">
                Filter by Price
              </h2>

              {/* الشريط */}
              <div className="flex flex-col gap-y-3 justify-center items-center ">
                {/* السعر الأدنى */}
                <input
                  type="number"
                  value={minPrice}
                  min="0"
                  max="1000"
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-20 h-10 text-sm overflow-hidden border-2 border-gray-500 rounded-lg p-2 text-center bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* الشريط المنزلق */}
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={currentPrice}
                  onChange={(e) => setCurrentPrice(Number(e.target.value))}
                  className="flex-1 appearance-none bg-gray-600 h-2 rounded-lg cursor-pointer accent-blue-500"
                />

                {/* السعر الأعلى */}
                <input
                  type="number"
                  value={maxPrice}
                  min="0"
                  max="1000"
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className=" w-20 h-10 text-sm overflow-hidden border-2 border-gray-500 rounded-lg p-2 text-center bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* عرض القيم */}
              <div className="mt-4 text-sm text-center text-white">
                <p>
                  Selected Price:{" "}
                  <span className="font-bold text-blue-500">
                    {currentPrice} USD
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskFilter;
