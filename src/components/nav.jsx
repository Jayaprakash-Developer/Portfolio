import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function nav() {
  const [isShow, setIsShow] = useState(false);

  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white bg-[#081b29] fixed">
      <div className=" animate-slidein">
        <h1 className=" text-5xl font-jp ml-2">
          J<span className=" text-[#00abf0]">p</span>
        </h1>
      </div>

      <ul className=" hidden md:flex ">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:text-[#00abf0]"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setIsShow(!isShow)}
        className=" cursor-pointer pr-4 z-10 md:hidden"
      >
        {isShow ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isShow && (
        <ul className=" flex flex-col items-center justify-center w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-blue-600 to-blue-900">
          {link.map(({ id, link }) => (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              <Link
                onClick={() => setIsShow(!isShow)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default nav;
