import React from "react";
import ProjectCart from "../Cart/ProjectCart";

import Img1 from '../Img/web img 1.png';

export default function MyProject() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[30%] mt-[100px] border-2 border-solid border-[#44D241] p-2 rounded">
        <p className="text-3xl">MY PROJECTS</p>
      </div>
      <p className="text-2xl mt-[20px]">Work</p>
      <p className="text-center underline text-2xl mt-[20px]">
        A Selection Of Stuffs I Have Built.
      </p>

      <ProjectCart img={Img1} text1='Personal Date Night' text2='For when you need a break from your partner but already got a babysitter. Now couples can go to different events in similar locations and at the same time. A group programming project with Can Rozanes, Irene Truong and Jamie Yeung.'/>
      <ProjectCart />
      <ProjectCart/>
      <ProjectCart/>
    </div>
  );
}
