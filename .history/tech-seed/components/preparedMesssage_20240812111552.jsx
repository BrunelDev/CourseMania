import React from "react";

export function PreparedMesssage({ value, setMessage }) {
  return (
    <span
      className="bg-[#F3F5F6] text-center cursor-pointer p-2 text-sm"
      onClick={() => {
        setMessage();
      }}
    >
      {value}
    </span>
  );
}
