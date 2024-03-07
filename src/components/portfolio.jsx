import React from "react";
import portfolios from "../assets/portfolio.png";
import OBE from "../assets/obe.png";
import atk from "../assets/atksmv.png";

const portfolio = () => {
  const projects = [
    {
      id: 1,
      src: OBE,
      codeUrl: "https://github.com/Basith5/college_main",
    },
    {
      id: 2,
      src: atk,
      demoUrl: "https://atksmvtraders.com/",
      codeUrl: "https://github.com/abdsirajofficial/ATKSMV_SIP_API/tree/main",
    },
    {
      id: 3,
      src: portfolios,
      demoUrl: "https://jayaprakash-developer-portfolio.netlify.app/",
      codeUrl: "https://github.com/Jayaprakash-Developer/Portfolio",
    },
  ];

  return (
    <div
      name="Projects"
      className=" md:h-screen bg-gradient-to-b from-[#081b29] to-[#05121a] w-full text-white "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-[#00abf0]">
            Projects
          </p>
          <p className=" py-6"> Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, codeUrl, demoUrl }) => (
            <div key={id} className=" shadow-md shadow-gray-600  rounded-lg ">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center ">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeUrl}>
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
