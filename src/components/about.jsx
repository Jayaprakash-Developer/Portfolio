import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-[#081b29] to-[#05121a] text-white "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-[#00abf0]">
            About
          </p>
        </div>

        <p className=" text-xl mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nobis
          dolores officia soluta debitis ipsa quia labore maiores delectus
          aliquam veniam, dicta, aut, odit quae error obcaecati. Corporis cumque
          exercitationem aperiam omnis at fuga hic, sint tenetur, minima eos
          doloremque commodi. Magni autem ut officiis aperiam debitis soluta
          doloribus magnam!
        </p>

        <br />

        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          reprehenderit mollitia nulla. Corporis ipsum sapiente rerum? Incidunt,
          porro aperiam expedita quas architecto reiciendis est voluptas.
          Inventore repudiandae laboriosam ad exercitationem laborum cupiditate
          mollitia iure iste voluptates repellat. Sit voluptatem accusantium eum
          modi voluptates? Beatae reiciendis ipsa quas, rem cumque voluptatem.
        </p>
      </div>
    </div>
  );
};

export default about;
