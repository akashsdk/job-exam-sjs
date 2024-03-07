import React from "react";

export default function SkillsCart({ text, icon }) {
  return (
    <div className="h-[60px] w-[300px] md:h-[100px] md:w-[300px] bg-white flex items-center justify-center flex-col">
      <img className="h-[30px] md:h-[50px]" src={icon} alt="" />
      <p className="text-black text-lg">{text}</p>
    </div>
  );
}
