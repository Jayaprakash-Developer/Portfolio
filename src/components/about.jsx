import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-[#081b29] to-[#05121a] text-white container mx-auto px-4"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-[#00abf0]">
            About me
          </p>
        </div>

        <div className=" mt-10 relative before:absolute before:top-0 before:left-48 before:rounded-full before:bottom-0 before:w-2 before:bg-gray-500">
          <div className=" pl-60 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[188px] before:top-[6px]">
            <h3 className=" absolute left-16 top-[1px] text-lg font-semibold ">
              2022-2024
            </h3>
            <p className=" font-medium text-lg">
              Master of Computer Application (MCA) in Jamal Mohamed College
              Tiruchirappalli.{" "}
              <span className=" text-base font-light text-pink-500">
                GPA: 7.9
              </span>
            </p>
          </div>
          <div className=" pl-60 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[188px] before:top-[6px]">
            <h3 className=" absolute left-16 top-[1px] text-lg font-semibold ">
              2019-2022
            </h3>
            <p className=" font-medium text-lg">
              Bachelor of Computer Application (BCA) in Jamal Mohamed College
              Tiruchirappalli.{" "}
              <span className=" text-base font-light text-pink-500">
                GPA: 6.9
              </span>
            </p>
          </div>
          <div className=" pl-60 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[188px] before:top-[6px]">
            <h3 className=" absolute left-16 top-[1px] text-lg font-semibold ">
              2018-2019
            </h3>
            <p className=" font-medium text-lg">
              Government Boys Higher Secondary School Kallakurichi.{" "}
              <span className=" text-base font-light text-pink-500">
                (59% out of 100)
              </span>
            </p>
          </div>
          <div className=" pl-60 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[188px] before:top-[6px]">
            <h3 className=" absolute left-16 top-[1px] text-lg font-semibold ">
              2018-2019
            </h3>
            <p className=" font-medium text-lg">
              Government Boys Higher Secondary School Kallakurichi.{" "}
              <span className=" text-base font-light text-pink-500">
                (84% out of 100)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
