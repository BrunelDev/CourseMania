import React from "react";

export default function DurationBox({ duration }) {
  return (
    <span className="bg-[#FFFFFF] text-[#667085] p-1 rounded-md flex text-sm">
      <img src="clock.svg" alt="" className="mr-2" />
      {duration}
    </span>
  );
}
