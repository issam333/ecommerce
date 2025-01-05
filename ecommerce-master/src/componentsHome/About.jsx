import React from "react";
import img from "../images/photo1.png";
import acc1 from "../images/acc-1.png";
import acc2 from "../images/acc-2.png";
import acc3 from "../images/acc-3.png";
import acc4 from "../images/acc-4.png";
import bougie from "../images/bougie-3.png";
const About = () => {
  return (
    <div className=" bg-white py-10">
      <div className="w-[90%] mx-auto">
        {/* part about us */}
        <h2 className="text-[48px] mb-4 font-bold">abut us</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <img src={img} className="w-full h-full" alt="image" />
          <p className="font-normal text-[24px]">
            La Société des Ambianceurs et des Personnes Elégantes (the Society
            of Ambiance-Makers and Elegant People, commonly shortened to la
            Sape) is a social movement of well-dressed men that began in the two
            Congos in the 1980s. Sapeurs members of la Sape, spend large sums of
            money on designer clothes, which they show off at social gatherings
            and use as signifier of identity and community.
          </p>
        </div>

        {/* part accessiors */}

        <h2 className="text-[48px] mt-10 mb-4 font-bold">accessisors</h2>
        <div className="md:grid flex flex-wrap  grid-cols-1 items-center justify-center  gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="h-max-[350px] md:w-[230px] w-[250px] relative flex justify-center rounded-[10px] group overflow-hidden">
            <img
              className="h-[330px] w-full group-hover:scale-110 group-hover:blur-[2px] duration-700 transition-all sm:w-[300px] "
              src={acc1}
            />
            <button className="absolute translate-y-full transition-all duration-700 opacity-0 group-hover:translate-y-5  group-hover:opacity-100 bottom-20 rounded-md backdrop-blur-lg bg-white/20 px-16 text-white py-3">
              <h2>Scarf</h2>
            </button>
          </div>

          <div className="h-[330px] md:w-[230px] w-[250px] relative flex justify-center rounded-[10px] group overflow-hidden">
            <img
              className="h-[380px] w-full group-hover:scale-110 group-hover:blur-[2px] duration-700 transition-all "
              src={acc2}
            />
            <button className="absolute translate-y-full transition-all duration-700 opacity-0 group-hover:translate-y-5  group-hover:opacity-100 bottom-20 rounded-md backdrop-blur-lg bg-white/20 px-16 text-white py-3">
              <h2>Scarf</h2>
            </button>
          </div>

          <div className="h-max-[350px] md:w-[230px] w-[250px] relative flex justify-center rounded-[10px] group overflow-hidden">
            <img
              className="h-[330px] w-full group-hover:scale-110 group-hover:blur-[2px] duration-700 transition-all sm:w-[300px]"
              src={acc3}
            />
            <button className="absolute translate-y-full transition-all duration-700 opacity-0 group-hover:translate-y-5  group-hover:opacity-100 bottom-20 rounded-md backdrop-blur-lg bg-white/20 px-16 text-white py-3">
              <h2>Scarf</h2>
            </button>
          </div>

          <div className="h-max-[350px] md:w-[230px] w-[250px] relative flex justify-center rounded-[10px] group overflow-hidden">
            <img
              className="h-[330px] w-full group-hover:scale-110 group-hover:blur-[2px] duration-700 transition-all sm:w-[300px]"
              src={acc4}
            />
            <button className="absolute translate-y-full transition-all duration-700 opacity-0 group-hover:translate-y-5  group-hover:opacity-100 bottom-20 rounded-md backdrop-blur-lg bg-white/20 px-16 text-white py-3">
              <h2>Scarf</h2>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[50px] bg-gradient-to-l h-full  flex flex-col sm:flex-row items-center justify-between from-[#D8C5B9] to-[#726862] sm:h-[500px]">
        <div className="pl-[5%]">
          <h2 className="text-[64px] uppercase">explore unique</h2>
          <p className="text-[32px] text-white">
            Société des Ambianceurs et des Personnes Élégantes
          </p>
          <button className="bg-white mt-4 duration-700  transition-all hover:bg-black hover:text-white  p-3 px-8 gap-4 text-black rounded-md">
            shop now
          </button>
        </div>
        <img src={bougie} className="object-cover h-full" />
      </div>
    </div>
  );
};

export default About;
