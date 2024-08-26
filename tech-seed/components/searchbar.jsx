import React from "react";
import Button from "./button";
export default function SearchBar() {
  return (
    <div className="flex items-center max-sm:m-2 border rounded-lg px-3 py-2 justify-between h-[40px] w-[200px] md:w-[400px] lg:w-[780px] xl:w-[400px]">
      <div className="flex w-full">
        <img
          src={"loupe.png"}
          alt=""
          className="w-[16px] h-[16px] mr-3 absolute top-[34px]"
        />

        <input
          className="w-full bg-transparent text-[10px] md:text-[16px] ml-6 text-[#667085] focus:border-none focus:outline-none overflow-auto"
          type="text"
          placeholder="Que voulez-vous apprendre ?"
        />
      </div>
      <div className="bg-[#F2FFFB] text-[10px] md:text-[16px] text-[#20B486] pl-2 pr-5 py-1 flex relative rounded-md">
        Explorer
        <img
          src="arrowDown.png"
          alt=""
          className="w-4 h-3 md:w-[20px] md:h-[14px] absolute bottom-[5px] right-0"
        />
      </div>
    </div>
  );
}
