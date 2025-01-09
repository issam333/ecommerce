import React from "react";
import Index from "../componentsHome/index";
import { Route, Routes } from "react-router-dom";
const HomePage = () => {
  return (
    <div className=" overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
};

export default HomePage;
