import React from "react";
import Hero from "../assets/hero.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const home = () => {
  return (
    <>
      <div
        name="home"
        className=" h-screen w-full bg-gradient-to-b from-[#081b29] to-[#05121a]"
      >
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

          <div className=" flex flex-col justify-center h-full animate-slidein">
            <h1 className=" text-4xl sm:text-8xl font-jp text-white my-7">
              Jayaprakash.<span className=" text-[#00abf0]">R</span>
            </h1>
            <h2 className=" text-3xl sm:text-7xl font-bold text-gray-600">
              I'm a Full Stack Developer
            </h2>
            <p className=" text-gray-500 py-4 max-w-md">
              I am Fresher to building and desgining software. Currently, I love
              to work on web application using tecknologies like Reactjs,
              Tailwindcss, Nodejs and Expressjs.
            </p>

            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className=" group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardDoubleArrowRight size={25} className=" ml-1"/>
                </span>
              </button>
            </div>
          </div>

          <div>
            <img
              src={Hero}
              alt="My Profile"
              className=" rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
