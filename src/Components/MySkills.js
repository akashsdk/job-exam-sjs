import React from "react";

import SkillsCart from "../Cart/SkillsCart";

import Icon1 from "../Icon/logos_html-5.png";
import Icon2 from "../Icon/logos_css-3.png";
import Icon3 from "../Icon/logos_javascript.png";
import Icon4 from "../Icon/logos_bootstrap.png";
import Icon5 from "../Icon/logos_jquery.png";
import Icon6 from "../Icon/logos_nodejs.png";
import Icon7 from "../Icon/logos_git.png";
import Icon8 from "../Icon/github-logo.png";
import Icon9 from "../Icon/vscode-icons_file-type-vscode.png";

export default function MySkills() {
  return (
    <div className=" md:m-[50px] m-[30px]">
      <p className="text-center underline text-3xl">
        MY THINGS AND THINGS I CAN DO
      </p>

      <p className="text-center text-2xl mt-[50px]">
        The Skills and Tools
        <br />I will use to bring your products to life.
      </p>

      <div className="mt-[30px] md:mt-[50px] w-full">
        <div className="flex justify-between space-x-1 p-2 md:space-x-4 md:p-4">
          <SkillsCart text="HTML" icon={Icon1} />
          <SkillsCart text="CSS" icon={Icon2} />
          <SkillsCart text="Java Script" icon={Icon3} />
        </div>
        <div className="flex justify-between space-x-1 p-2 md:space-x-4 md:p-4">
          <SkillsCart text="Boost Strap" icon={Icon4} />
          <SkillsCart text="JQuery" icon={Icon5} />
          <SkillsCart text="NodeJS" icon={Icon6} />
        </div>
        <div className="flex justify-between space-x-1 p-2 md:space-x-4 md:p-4">
          <SkillsCart text="GIT" icon={Icon7} />
          <SkillsCart text="GitHub" icon={Icon8} />
          <SkillsCart text="VS Code" icon={Icon9} />
        </div>
      </div>
    </div>
  );
}
