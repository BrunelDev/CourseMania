"use client";
import React from "react";

export default function Button({
  title,
  bgColor,
  action = () => {
    return;
  },
  textColor,
  hoverBgColor,
  hoverTextColor,
}) {
  return (
    <span
      className={`cursor-pointer ${textColor} hover:${hoverTextColor} hover:${bgColor} py-2 px-3 text-center rounded-md ${bgColor} w-fit h-fit z-50`}
      onClick={() => {
        action();
        return;
      }}
    >
      {title}
    </span>
  );
}
