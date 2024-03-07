import React from "react";

export default function Index() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-light text-4xl md:text-5xl lg:text-6xl ">
          Hi, <br />
          I'm Daniel, <br />
          Web Developer
        </h1>
        <p className="text-4xl mt-[30px]">Front End Developer</p>
        <button className="w-[100%] mt-[100px] border-2 border-solid border-[#44D241] p-2 rounded">
          Resume
        </button>
      </div>
    </div>
  );
}
