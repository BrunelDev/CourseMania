import React from "react";

export default function Tag({ textColor, bgColor, title }) {
  return (
    <span
      className={`${textColor} ${bgColor} py-1 px-2 font-medium rounded-xl w-fit`}
    >
      {title}
    </span>
  );
}
