import React from "react";
import Icon from "../Img/ci_menu-alt-05.png";

export default function Header() {
  return (
      <div className="box md:h-[90px] h-[61px] bg-[#000000] w-full flex items-center justify-end">
        <div className="md:h-[90px] h-[61px] mr-[20px] flex items-center justify-end ">
          <div className=" md:h-[90px] h-[61px] mr-[20px] w-[2px] bg-white "></div>
          <img
            src={Icon}
            className="md:h-[60px] h-[50px] ml-[5px]"
            alt="Icon"
          />
        </div>
      </div>
  );
}
