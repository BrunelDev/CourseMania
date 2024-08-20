import React from "react";

export default function Title({ title }) {
  return (
    <span className="text-[#101828] font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {title}
    </span>
  );
}
