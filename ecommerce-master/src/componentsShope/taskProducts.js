import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TaskProducts() {

  const [imagesUrl, setImagesUrl] = useState([]);
  const [imgName, setImgName] = useState([]);
  const [imgDescription, setImgDescription] = useState([]);
  const [scaledImage, setScaledImage] = useState(null);
  const [imgPrice, setImgPrice] = useState([]);

  const [imgCategories, setImgCategories] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/images");

        // التأكد من وجود البيانات ومعالجتها
        if (response.data && Array.isArray(response.data)) {
          const dataUrl = response.data.map((el) => el.imageData.url);
          const imgName = response.data.map((el) => el.name);
          const imgDescription = response.data.map((el) => el.description);
          const imgPrice = response.data.map((el) => el.price);
          const categories = response.data.map((el) => el.categories);
          setImagesUrl(dataUrl);
          setImgName(imgName);
          setImgDescription(imgDescription);
          setImgPrice(imgPrice);
          setImgCategories(categories);
        }
      } catch (error) {
        console.error("Error fetching images:", error); // طباعة الخطأ إذا حدث
      }
    };

    fetchImages(); // استدعاء الدالة
  }, []);
  const lopCards = () => {
    return imagesUrl.map((url, id) => (
      <Link
        to={"/Shop"}
        key={id}
        className="  cursor-pointer max-w-sm h-[250px] w-[170px] rounded-lg shadow-lg bg-white overflow-hidden"
      >
        {/* صورة المنتج */}
        <div className="h-[70%] rounded-md overflow-hidden">
          <img
            className={
              scaledImage === id
                ? "w-full duration-1000 transition-all scale-125 h-[100%] object-cover"
                : "w-full h-[100%] object-cover"
            }
            src={url}
            alt="Product"
            onMouseEnter={() => {
              setScaledImage(id);
            }}
            onMouseLeave={() => {
              setScaledImage(null);
            }}
          />
        </div>
        <div className=" px-2 py-1 flex flex-wrap">
          {/* العنوان */}
          <div className="text-center w-[100%]">
            <h2 className="capitalize text-sm font-bold text-gray-800">
              {imgName[id]}
            </h2>
          </div>

          {/* الوصف القصير */}
          <div className="text-start w-[100%]">
            <p className="text-[8px] text-gray-600 ">{imgDescription[id]}</p>
          </div>

          {/* السعر */}
          <div className="text-center w-[100%]">
            <p className="text-xl font-semibold text-green-500 ">{imgPrice[id]}</p>
          </div>
        </div>

        {/* مراجعات العملاء */}
        <div className={`text-shadow-xl relative right-[50px] bottom-[232px]`}>
          <div className=" w-[100%] flex justify-center transition-opacity">
            <div
              style={{ boxShadow: "black 0px 0px 18px 1px" }}
              className="bg-gray-600 py-[1px] px-[3px] rounded-xl w-fit flex shadow-[1] justify-center items-center"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index} // أضف key باش ما يكونوش تحذيرات ف React
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "#ffcc00" : "#e0e0e0"} // 4 نجوم ذهبية ونجمة رمادية
                  viewBox="0 0 24 24"
                  width="7"
                  height="7"
                  className="mr-1"
                >
                  <path d="M12 .587l3.668 7.431 8.201 1.144-5.938 5.794 1.4 8.145-7.131-3.746-7.131 3.746 1.4-8.145-5.938-5.794 8.201-1.144z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </Link>
    ));
  };
  return (
    <div className=" flex justify-center pb-[100px] flex-wrap gap-y-10 gap-x-3 w-[100%] col-span-3 p-5 text-center h-[90.5vh] overflow-y-scroll">
      {lopCards()}
    </div>
  );
}

export default TaskProducts;
