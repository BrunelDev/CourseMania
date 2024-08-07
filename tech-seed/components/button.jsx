"use client";
import React from "react";

export default function Button({ title, bgColor, action }) {
  console.log(title);
  return (
    <span
      className={`bg-[] text-white py-2 px-3 text-center rounded-md bg-[${bgColor}]`}
      onClick={() => {
        action;
      }}
    >
      {title}
    </span>
  );
}
