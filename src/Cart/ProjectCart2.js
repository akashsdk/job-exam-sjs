import React from "react";

import Icon1 from "../Icon/vscode-icons_file-type-vscode.png";
import Icon2 from "../Icon/logos_html-5.png";
import Icon3 from "../Icon/logos_css-3.png";
import Icon4 from "../Icon/logos_javascript.png";
import Icon5 from "../Icon/file-icons_firebase.png";

export default function ProjectCart2({ img, text1, text2 }) {
  return (
    <div className="flex md:flex-row flex-col md:mt-[50px]">
      <div className="w-[100%] md:w=[50%] flex items-center md:justify-start  justify-start ">
        <img src={img} className="ml-[30px] h-[200px] md:h-[330px] border-2 border-solid border-[#44D241] p-2 rounded" alt="" />
      </div>

      <div className="w-[100%] md:w=[50%]  flex justify-start align-center flex-col">
        <div className="m-[30px]">
          <p className="text-left text-xl">{text1}</p>
          <p className="text-left text-xl mt-[40px]">{text2}</p>
        </div>
        <div className="hidden md:flex justify-start align-center flex-col m-[30px]">
          <button className="w-[150px] hover:text-[#44D241]  mt-[30px] border-2 border-solid border-[#44D241] p-2 rounded">
            View it Here
          </button>
          <div className="w-[230px] flex mt-[30px] border-2 border-solid border-[#44D241] p-2 rounded">
            <img src={Icon1} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon2} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon3} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon4} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon5} className="h-[30px] ml-[10px]" alt="icon" />
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-start align-center flex-row m-[30px]">
        <button className="md:w-[150px] w-[130px] mt-[30px] border-2 border-solid border-[#44D241] p-2 rounded">
          View it Here
        </button>
        <div className="md:w-[230px] w-[200px] flex mt-[30px] ml-[20px] border-2 border-solid border-[#44D241] p-2 rounded">
          <img
            src={Icon1}
            className="md:h-[30px] h-[25px] ml-[10px]"
            alt="icon"
          />
          <img
            src={Icon2}
            className="md:h-[30px] h-[25px] ml-[10px]"
            alt="icon"
          />
          <img
            src={Icon3}
            className="md:h-[30px] h-[25px] ml-[10px]"
            alt="icon"
          />
          <img
            src={Icon4}
            className="md:h-[30px] h-[25px] ml-[10px]"
            alt="icon"
          />
          <img
            src={Icon5}
            className="md:h-[30px] h-[25px] ml-[10px]"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}
