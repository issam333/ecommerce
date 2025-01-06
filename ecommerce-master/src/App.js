import React from "react";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";

// pages imports
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="">
      <div>
        <Routes>
          <Route
            path="/E-commerce_store"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
          <Route
            path="/Shop"
            element={
              <>
                <Header />
                <Shop names={"issam"} />
              </>
            }
          />
        </Routes>
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<Signin names={"issam"} />} />
      </Routes>
    </div>
  );
}

export default App;
