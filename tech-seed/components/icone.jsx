"use client";
import React from "react";

export default function Icone({
  action,
  icone,
}) {
  return (
      <div className="icone-container">
      {icone && (
        <img
          onClick={action}
          src={icone}
          alt=""
          style={{ width: "25px", height: "25px", marginRight: "8px" }}
        />
      )}
    </div>
  );
}
