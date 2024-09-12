import React from "react";

export default function Description({ description }) {
  return (
    <span className="text-[#667085] text-nowrap text-sm md:text-base lg:text-lg mx-auto my-6 px-4 md:px-0 block w-full md:w-3/4 lg:w-1/2 text-center md:text-left">
      {description}
    </span>
  );
}
