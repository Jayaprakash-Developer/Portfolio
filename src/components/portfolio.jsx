import React from "react";
import portfolios from "../assets/portfolio.png";

const portfolio = () => {
  const projects = [
    {
      id: 1,
      src: portfolios,
    },
    {
      id: 2,
      src: portfolios,
    },
    {
      id: 3,
      src: portfolios,
    },
    {
      id: 4,
      src: portfolios,
    },
    {
      id: 5,
      src: portfolios,
    },
    {
      id: 6,
      src: portfolios,
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
            {projects.map(({ id, src }) => (
              <div key={id} className=" shadow-md shadow-gray-600  rounded-lg ">
                <img
                  src={src}
                  alt=""
                  className=" rounded-md duration-200 hover:scale-105"
                />
                <div className=" flex items-center justify-center ">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>    
  );
};

export default portfolio;
