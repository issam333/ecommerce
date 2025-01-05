import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordR, setPasswordR] = useState("");
  let [active, setActive] = useState(false);
  let navigate = useNavigate();
  let [flag, setFlag] = useState(false);
  let [checkemail, setCheckEmail] = useState(false);

  async function submit(e) {
    e.preventDefault();

    if (
      passwordR !== password ||
      password.length < 8 ||
      email === "" ||
      name === ""
    ) {
      setFlag = false;
    } else {
      setFlag = true;
    }
    if (!flag) {
      try {
        const response = await axios.post("http://localhost:8080/api/signin", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        });

        if (response.status === 201) {
          alert("Registration successful! ✅ ");

          navigate("/E-commerce_store");
          setCheckEmail(false);
        } else if (response.status === 401) {
          console.log("User already exists ❌");
        }

        console.log("Response status:", response.status);
      } catch (error) {
        if (error.response) {
          setCheckEmail(true);
          console.log("Server Error:", error.response.data);
          

        } else {
          console.log("Request Error:", error.message);
          alert("Unable to connect to the server. Please try again later.");
        }
      }
    }
    setActive(true);
  }

  return (
    <div className="bg-[#191919] h-screen">
      <div className="border border-black h-24 shadow-[inset_0px_0px_1000px_10px_black] border-solid  bottom-2 bg-[#222226] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
            Sign In
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            {/* part user name */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                User name
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="user name"
                  className="p-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* part email */}
            <div>
              <label
                htmlFor="email"
                className=" mt-[-10px] block text-sm font-medium leading-6 text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email"
                  className="p-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!checkemail ? (
                ""
              ) : (
                <div className="text-red-600 text-[13px] pl-2 mt-1 capitalize ">
                  Email already exists !
                </div>
              )}
            </div>
            {/* part password */}
            <div>
              <label
                htmlFor="email"
                className="mt-[-10px] block text-sm font-medium leading-6 text-gray-200"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                  className="p-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {password.length < 8 && active && (
                <p className="text-red-600 mt-2">
                  Password must be more than 8 characters
                </p>
              )}
            </div>
            {/* part passR */}
            <div>
              <label
                htmlFor="email"
                className="mt-[-10px] block text-sm font-medium leading-6 text-gray-200"
              >
                Repeat password
              </label>
              <div className="mt-2">
                <input
                  value={passwordR}
                  required
                  onChange={(e) => setPasswordR(e.target.value)}
                  type="password"
                  placeholder="Repeat password"
                  className="p-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {password !== passwordR && active && (
                  <p className="text-red-600 mt-2">Password dose not must</p>
                )}
              </div>
            </div>

            {/* part btn login */}

            <div>
              <button
                onClick={submit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>

          <div className=" mt-3 flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
