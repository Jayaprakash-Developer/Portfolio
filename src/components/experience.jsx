import React from "react";
import rreact from "../assets/react.png";
import node from "../assets/node.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import css from "../assets/css.png";
import Tailwindcss from "../assets/tailwindcssjp.png";
import python from "../assets/python.png";
import js from "../assets/js.png";

const experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-[#07426a]",
    },
    {
      id: 3,
      src: Tailwindcss,
      title: "TaiwindCSS",
      style: "shadow-[#42a9b4]",
    },
    {
      id: 4,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-[#0bd4ff]",
    },
    {
      id: 7,
      src: rreact,
      title: "React",
      style: "shadow-[#00d9ff]",
    },
    // {
    //   id: 8,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-500",
    // },
  ];

  return (
    <div
      name="Skills"
      className=" bg-gradient-to-b from-[#081b29] to-[#05121a] w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-[#00abf0] p-2 inline">
            Skills
          </p>
          <p className=" py-6">There are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
            //   className={" shadow-md hover:scale-105 duration-500 py-2 rounded-lg"+ " "+ style}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className=" w-20 mx-auto" />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
