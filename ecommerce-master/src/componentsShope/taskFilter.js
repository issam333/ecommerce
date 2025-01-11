import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTag } from "@fortawesome/free-solid-svg-icons";

function TaskFilter() {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);
  const [currentPrice, setCurrentPrice] = useState(300);

  const [handleTaskFilter, setHandleTaskFilter] = useState(
    window.innerWidth > 800
  ); // الحالة الافتراضية
  const [handleCategoryMedium, setHandleCategoryMedium] = useState(false);
  const [handlePriceMedium, setHandlePriceMedium] = useState(false);

  // if (handleCategoryMedium === true) {
  //   setHandlePriceMedium(false)
  // } if(handlePriceMedium === true) {
  //   setHandleCategoryMedium(false)
  // }

  // تحديث handleTaskFilter بناءً على حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setHandleTaskFilter(window.innerWidth > 800);
    };

    // إضافة حدث الاستماع
    window.addEventListener("resize", handleResize);

    // تنظيف الحدث عند تفكيك الكومبوننت
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {handleTaskFilter ? (
        <div className="capitalize rounded-xl w-[100%] pt-8 pb-[90px] px-3 ">
          <div className="shadow-2xl h-[80vh] overflow-y-scroll overflow-x-hidden bg-gray-800 rounded-3xl border-[10px] border-gray-800">
            <div className="flex justify-center items-center gap-3 py-3 px-3">
              <h1 className="text-lg font-bold text-white text-center">
                Product Categories
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 px-1 mt-6">
              {[
                "Men",
                "Women",
                "Kids",
                "Bags",
                "Accessories",
                "Casual Wear",
                "Formal Wear",
                "Winter Wear",
                "Ethnic Wear",
              ].map((category) => (
                <button
                  key={category}
                  className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-sm md:text-lg font-semibold text-white hover:bg-gray-600"
                >
                  {category}
                </button>
              ))}
            </div>
            <div>
              <div className="w-full max-w-xl mx-auto mt-10 p-4">
                <h2 className="text-lg font-semibold mb-4 text-center text-white">
                  Filter by Price
                </h2>
                <div className="flex flex-col gap-y-3 justify-center items-center">
                  <input
                    type="number"
                    value={minPrice}
                    min="0"
                    max="1000"
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-20 h-10 text-sm overflow-hidden border-2 border-gray-500 rounded-lg p-2 text-center bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(Number(e.target.value))}
                    className="flex-1 appearance-none bg-gray-600 h-2 rounded-lg cursor-pointer accent-blue-500"
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    min="0"
                    max="1000"
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-20 h-10 text-sm overflow-hidden border-2 border-gray-500 rounded-lg p-2 text-center bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
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
      ) : (
        <div className="capitalize rounded-xl w-[100%] pt-8  px-3 ">
          <div className="shadow-2xl bg-gray-800 rounded-3xl border-[10px] border-gray-800">
            <div className="flex justify-center items-center gap-3 py-1 px-3">
              <FontAwesomeIcon
                onClick={() => {setHandlePriceMedium((prevState) => !prevState) ; setHandleCategoryMedium(false)}}
                icon={faTag}
                className="cursor-pointer md:hidden h-[20px] text-white"
              />
              <FontAwesomeIcon
                onClick={() =>
                  {setHandleCategoryMedium((prevState) => !prevState) ; setHandlePriceMedium(false)}
                }
                className="cursor-pointer md:hidden h-[20px] text-white"
                icon={faList}
              />
            </div>
            {handleCategoryMedium && (
              <div className="flex flex-wrap justify-center gap-2 px-1 mt-6">
                {[
                  "Men",
                  "Women",
                  "Kids",
                  "Bags",
                  "Accessories",
                  "Casual Wear",
                  "Formal Wear",
                  "Winter Wear",
                  "Ethnic Wear",
                ].map((category) => (
                  <button
                    key={category}
                    className="bg-gray-700 text-center px-4 py-2 rounded-full flex text-sm md:text-lg font-semibold text-white hover:bg-gray-600"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
            {handlePriceMedium && (
              <div className="w-full max-w-xl mx-auto mt-10 p-4">
                <h2 className="text-lg font-semibold mb-4 text-center text-white">
                  Filter by Price
                </h2>
                <div className="flex flex-col gap-y-3 justify-center items-center">
                  <input
                    type="number"
                    value={minPrice}
                    min="0"
                    max="1000"
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-20 h-10 text-sm overflow-hidden border-2 border-gray-500 rounded-lg p-2 text-center bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(Number(e.target.value))}
                    className="flex-1 appearance-none bg-gray-600 h-2 rounded-lg cursor-pointer accent-blue-500"
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    min="0"
                    max="1000"
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-20 h-10 text-sm overflow-hidden border-2 border-gray-500 rounded-lg p-2 text-center bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mt-4 text-sm text-center text-white">
                  <p>
                    Selected Price:{" "}
                    <span className="font-bold text-blue-500">
                      {currentPrice} USD
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TaskFilter;
