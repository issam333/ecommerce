import React from "react";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";


// pages imports
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Header from "./pages/Header"
import Shop from "./pages/Shop";


function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/E-commerce_store" element={<HomePage />} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignIn" element={<Signin names={"issam"} />} />
        </Routes>

    </div>
  );
}

export default App;
