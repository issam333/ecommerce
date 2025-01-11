import React, { useState,useEffect } from "react";
import TaskFilter from "../componentsShope/taskFilter";
import TaskProducts from "../componentsShope/taskProducts";

function Shop() {
  const [responsiveComponent, setResponsiveComponent] = useState( window.innerWidth >= 800);
  console.log(responsiveComponent);
  useEffect(() => {
      const handleResize = () => {
        setResponsiveComponent(window.innerWidth >= 800);
      };
  
      // إضافة حدث الاستماع
      window.addEventListener("resize", handleResize);
  
      // تنظيف الحدث عند تفكيك الكومبوننت
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
  return (
    <div className="text-5xl bg-[#415a77] text-slate-950 h-[100vh] w-[100%] overflow-hidden ">
      {!responsiveComponent === false ? (
        <div className="mt-[56px] grid grid-cols-4 ">
          <TaskFilter />
          <TaskProducts />
        </div>
      ) : (
        <div className="mt-[30px] flex flex-col gap-2 ">
          <TaskFilter/>
          <TaskProducts />
        </div>
      )}
    </div>
  );
}

export default Shop;
