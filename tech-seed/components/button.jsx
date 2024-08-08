"use client";
import React from "react";

export default function Button({
  title,
  bgColor,
  action,
  textColor,
  hoverBgColor,
  hoverTextColor,
}) {
  console.log(title);
  return (
    <span
      className={`${textColor} hover:${hoverTextColor} hover:${bgColor} py-2 px-3 text-center rounded-md ${bgColor} w-fit h-fit cursor-pointer z-50`}
      onClick={() => {
        action();
      }}
    >
      {title}
    </span>
  );
}
