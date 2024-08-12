import React from "react";

export function PreparedMesssage({ value, setMessage }) {
  return (
    <span
      className="bg-[#F3F5F6] text-center cursor-pointer p-1 text-sm rounded-lg shadow"
      onClick={() => {
        setMessage();
      }}
    >
      {value}
    </span>
  );
}
