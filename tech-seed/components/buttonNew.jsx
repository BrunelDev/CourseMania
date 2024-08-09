"use client";
import React from "react";

export default function ButtonNew({
  title,
  bgColor,
  textColor,
  action,
  icone,
}) {
  return (
    <div
      className="rounded-md flex items-center justify-center cursor-pointer"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "10px 15px",
        height: "auto",
        width: "100%",
        borderRadius: "10px",
      }}
      onClick={action}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
        }}
      >
        {icone && (
          <img
            src={icone}
            alt=""
            style={{ width: "25px", height: "25px", marginRight: "8px" }}
          />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
}
