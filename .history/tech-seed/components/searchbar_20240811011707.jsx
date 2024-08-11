import React from "react";
import Button from "./button";

export default function SearchBar() {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 justify-between h-10 w-full max-w-md">
      <div className="flex items-center">
        <img src="loupe.png" alt="Search Icon" className="w-4 h-4 mr-3" />
        <input
          className="bg-transparent text-sm text-[#667085] focus:outline-none w-full"
          type="text"
          placeholder="Que voulez-vous apprendre ?"
        />
      </div>
      <div className="bg-[#F2FFFB] text-[#20B486] pl-2 pr-5 py-1 flex items-center rounded-md cursor-pointer">
        Explorer
        <img
          src="arrowDown.png"
          alt="Arrow Down Icon"
          className="w-5 h-5 ml-2"
        />
      </div>
    </div>
  );
}
