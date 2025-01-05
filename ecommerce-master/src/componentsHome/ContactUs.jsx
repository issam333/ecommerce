import React from "react";
import bgcontactus from "../images/bg-contact-us.jpeg"

export default function ContactUs() {
  return (
    <div  class="test bg-no-repeat w-full h-[500px] bg-[length:100%_500px] flex justify-center py-2.5 ">
      <form class="h-[463px] rounded-[5px] text-xl p-[20px] w-[560.14px] backdrop-blur-[5px] bg-[#bbbbbb4c] flex flex-col gap-[20px] justify-center bg-[rgba(255, 255, 255, 0.16)]">
        <h1 className="font-[Roboto-Serif] text-white leading-10 font-semibold text-center">Contact Us</h1>
        <input
          className="h-10 outline-none p-2 rounded-md capitalize"
          placeholder="name"
          type="text"
        ></input>
        <input
          className="h-10 outline-none p-2 rounded-md capitalize"
          placeholder="number"
          type="tel"
        ></input>
        <input
          className="h-10 outline-none p-2 rounded-md capitalize"
          placeholder="email"
          type="email"
        ></input>
        <input
          className="h-[100px] outline-none pb-[70px] pl-2 rounded-md capitalize"
          placeholder="messages"
          type='text'
        ></input>
        
        <button className="bg-black text-white rounded-md p-1">send</button>
      </form>
    </div>
  );
}
