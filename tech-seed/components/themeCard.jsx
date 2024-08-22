"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ThemeCard({ title, icon, description }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={
        "group rounded-lg mb-3 p-6 w-fit hover:bg-[#4AC8AE] hover:text-white duration-300 shadow shadow-[#D8D8D8]"
      }
    >
      <div className="flex w-fit items-center text-xl font-bold">
        <img src={icon} alt="" className="w-10 h-10 mr-4" />
        {title}
      </div>
      <p className="w-[250px] text-[0.8em] my-4">{description}</p>
      <span className="flex text-[#4AC8AE] group-hover:text-white ">
        Learn more
        <ChevronRight />
      </span>
    </div>
  );
}
