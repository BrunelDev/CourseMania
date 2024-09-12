import React from "react";
import Button from "./button";
export default function SearchBar() {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 justify-between h-[40px] w-[400px]">
      <div className="flex">
        <img
          src={"loupe.png"}
          alt=""
          className="w-[16px] h-[16px] mr-3 absolute top-[28px]"
        />

        <input
          className="bg-transparent text-[16px] ml-6 text-[#667085] focus:border-none focus:outline-none"
          type="text"
          placeholder="Que voulez-vous apprendre ?"
        />
      </div>
      <div className="bg-[#F2FFFB] text-[#20B486] pl-2 pr-5 py-1 flex relative rounded-md">
        Explorer
        <img
          src="arrowDown.png"
          alt=""
          className="w-[20px] h-[14px] absolute bottom-[5px] right-0"
        />
      </div>
    </div>
  );
}
