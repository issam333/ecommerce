import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SingUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [passIncorect, setPassIncorect] = useState(false);

  const Submit = async () => {
    if (form.email && form.password) {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          email: form.email,
          password: form.password,
        });
        if (response.status === 200) {
          setPassIncorect(false);
          console.log("Response:", response.data); // عرض البيانات القادمة من السيرفر
          // navigate("/E-commerce_store");
        } else if (response.status === 400) {
          setPassIncorect(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setPassIncorect(true); // عرض رسالة الخطأ عند فشل تسجيل الدخول
          console.error("Incorrect password or email");
        }else if(error.response.status === 404){
          alert("Email not found");
        } else {
          console.error("Error:", error.message); // عرض الأخطاء الأخرى
        }
      }
    }
  };
  return (
    <div className="bg-[#191919] h-screen">
      <div className="border border-black h-24 shadow-[inset_0px_0px_1000px_10px_black] bg-[#222226] w-[100%]  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="p-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                  placeholder="password"
                  autoComplete="current-password"
                  className="p-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>{" "}
              {!passIncorect ? (
                ""
              ) : (
                <div className="text-red-600 text-[13px] pl-2 mt-1 capitalize ">
                  the password is incorrect !
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={Submit}
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={Submit}
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
