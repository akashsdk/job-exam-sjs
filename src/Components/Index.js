import React from "react";

export default function Index() {
  return (
    <div className="h-auto flex items-center justify-center">
      <div className="text-center md:mt-[150px] mt-[150px]">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold">
          Hi, <br />
          I'm Daniel, <br />
          Web Developer
        </h1>
        <p className="text-4xl mt-[30px]">Front End Developer</p>
        <button className="w-[100%] mt-[100px] hover:text-[#44D241] md:mb-[50px]  border-2 border-solid border-[#44D241] p-2 rounded">
          Resume
        </button>
      </div>
    </div>
  );
}
