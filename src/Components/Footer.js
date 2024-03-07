import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="box md:h-[90px] h-[51px] bg-[#000000] w-full flex items-center justify-center">
      <div className="md:h-[90px] h-[51px] mr-[20px] flex items-center justify-end ">
        <p className="md:text-3xl text-[12px]">
          2019-{currentYear} | Designed by Henry francis and Codded by Daniel
          Asakpa
        </p>
      </div>
    </div>
  );
}
