import React from "react";

export default function Contact() {
  return (
    <div className="h-auto flex items-center justify-center">
      <div className="text-center md:mt-[100px] mt-[50px]">
        <p className="text-center underline text-3xl">GET IN TOUCH</p>
        <div className=" md:m-[50px] m-[30px]">
          <p className="text-center md:text-2xl md:m-[40px] m-[10px]">
            My Inbox is always open, Wether you have a question or just want to
            say
            <br />
            HI, I will try my best to get back to you!
            <br />I promise.
          </p>
        </div>
        <button className="w-[50%] mt-[0px] mb-[20px] border-2 border-solid border-[#44D241] p-2 rounded">
          Say Hello
        </button>
      </div>
    </div>
  );
}
