import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-gradient-to-b from-[#05121a] to-[#05121a] text-white w-full h-1/2">
      <div className="border-b border-gray-500 h-0.5"></div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-20 gap-48 text-[16px]">
        <div className=" flex flex-col ">
          <h2 className=" text-3xl font-bold text-pink-600 pb-8 capitalize ">Footer</h2>
          <p className=" text-xl text-gray-500"> <span className=" text-3xl text-[#00abf0]">F</span>irst, solve the problem. Then, write the code.</p>
          <p className=" text-end text-lg text-[#00abf0]">-John Johnson</p>
        </div>
        <div className=" flex flex-col">
          <ul>
            <li className=" text-2xl list-none font-semibold text-pink-600 py-2 capitalize">
              Get in touch
            </li>
            <li className=" my-4 list-none text-gray-500">Jayaprakash R</li>
            <li className=" my-4 list-none text-gray-500">Phone: 7639794771</li>
            <li className=" my-4 list-none text-gray-500">
              Email: ramesh22prakash@gmail.com
            </li>
          </ul>
        </div>
        <div className=" flex flex-col">
          <ul>
            <li className=" text-2xl list-none font-semibold text-pink-600 py-2 capitalize">
              Help center
            </li>
            <li className=" my-4 list-none cursor-text text-gray-500">Support</li>
            <li className=" my-4 list-none cursor-text text-gray-500">Privacy policy</li>
          </ul>
          <div className=" flex space-x-4 py-1.5">
            <a
              className=" text-gray-500 hover:text-pink-600 transform hover:scale-150 transition-all duration-150 ease-in-out "
              href='https://github.com/Jayaprakash-Developer'
            >
              <FaGithub />
            </a>
            <a
              className=" text-gray-500 hover:text-pink-600 transform hover:scale-150 transition-all duration-150 ease-in-out "
              href='https://www.instagram.com/jaya_prakash_knight/'
            >
              <FaInstagram />
            </a>
            <a
              className=" text-gray-500 hover:text-pink-600 transform hover:scale-150 transition-all duration-150 ease-in-out "
              href='https://www.linkedin.com/in/jayaprakash-r-596a6a25b/'
            >
              <FaLinkedinIn />
            </a>
            <a
              className=" text-gray-500 hover:text-pink-600 transform hover:scale-150 transition-all duration-150 ease-in-out "
              href="https://www.youtube.com/"
            >
              <FaYoutube />
            </a>
            <a
              className=" text-gray-500 hover:text-pink-600 transform hover:scale-150 transition-all duration-150 ease-in-out "
              href='https://www.facebook.com/'
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-500 h-0.5"></div>
      <div className=" py-4 text-center text-gray-500">
        &copy;{year} Jayaprakash-developer-portfolio. All Rights Reserved
      </div>
    </footer>
  );
};

export default footer;
