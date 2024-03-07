import React from "react";

import Icon1 from "../Icon/vscode-icons_file-type-vscode.png";
import Icon2 from "../Icon/logos_html-5.png";
import Icon3 from "../Icon/logos_css-3.png";
import Icon4 from "../Icon/logos_javascript.png";
import Icon5 from "../Icon/file-icons_firebase.png";

export default function ProjectCart({ img, text1, text2 }) {
  return (
    <div className="flex md:flex-row flex-col md:mt-[50px]">
      <div className="w-[100%] md:w=[50%] m-[30px] flex justify-start align-center flex-col">
          <p className="text-left text-xl">{text1}</p>
          <p className="text-left text-xl mt-[50px]">{text2}</p>
        <div className="flex justify-start align-center flex-col ">
          <button className="w-[150px] mt-[10px] border-2 border-solid border-[#44D241] p-2 rounded">
            View it Here
          </button>
          <div className="w-[230px] flex mt-[10px] border-2 border-solid border-[#44D241] p-2 rounded">
            <img src={Icon1} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon2} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon3} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon4} className="h-[30px] ml-[10px]" alt="icon" />
            <img src={Icon5} className="h-[30px] ml-[10px]" alt="icon" />
          </div>
        </div>
        
      </div>
      <div className="w-[100%] md:w=[50%]">
            <img src={img} alt=""/>
        </div>
    </div>
  );
}
