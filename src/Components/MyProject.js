import React from "react";
import ProjectCart from "../Cart/ProjectCart";
import ProjectCart2 from "../Cart/ProjectCart2";

import Img1 from "../Img/web img 1.png";
import Img2 from "../Img/Screenshot 2024-03-07 at 2.34.14 PM.png";

export default function MyProject() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="hidden md:flex justify-center align-center md:w-[30%] w-[50%] mt-[100px] border-2 border-solid border-[#44D241] p-2 rounded">
        <p className="md:text-3xl text-2xl">MY PROJECTS</p>
      </div>

      <p className="md:hidden flex md:text-3xl underline mt-[30px] text-2xl">MY <br/>  PROJECTS</p>

      <p className="text-2xl mt-[50px]">Work</p>
      <p className="text-center underline text-2xl mt-[50px]">
        A Selection Of Stuffs I Have Built.
      </p>

      <ProjectCart
        img={Img1}
        text1="Personal Date Night"
        text2="For when you need a break from your partner but already got a babysitter. Now couples can go to different events in similar locations and at the same time. A group programming project with Can Rozanes, Irene Truong and Jamie Yeung."
      />
      <ProjectCart2
        img={Img2}
        text1="The Absolutely Amazing Newspaper Apparatus"
        text2="Generate your very own steam-punk themed custom newspaper. Just input your details and the apparatus will do the rest!"
      />
      <ProjectCart
        img={Img1}
        text1="Word Wiz"
        text2="Can you race against our wizard and beat him in thinking up a list of related words? Test your word wizzi-ness here! A pair programming project with Kat Bosnic."
      />
      <ProjectCart2
        img={Img2}
        text1="Your New Best Forest Friend"
        text2="If you ever lost in a forest and needed a new animal friend to help you navigate your way out, take this quiz to find out who it would be."
      />
      <ProjectCart
        img={Img1}
        text1="Cronus Business Photoshop Conversion "
        text2="A pixel-perfect responsive Photoshop conversion. Coded using flexbox and plain ole CSS."
      />
    </div>
  );
}
