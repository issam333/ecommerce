import React from "react";
import TaskFilter from "../componentsShope/taskFilter";
import TaskProducts from "../componentsShope/taskProducts";

function Shop() {
  return (
    <div className="text-5xl text-slate-950 bg-amber-600 h-[100vh] w-[100%] overflow-hidden ">
      <div className="mt-[56px] grid grid-cols-4 ">
        <TaskFilter />
        <TaskProducts />
      </div>
    </div>
  );
}

export default Shop;
