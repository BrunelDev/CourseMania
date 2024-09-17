"use client";
import React from "react";

export default function ChatMessage({ message, isUser, type }) {
  return (
    <div className={`flex ${isUser ? "  justify-end" : " justify-start"} mb-2`}>
      <div
        className={`p-3 rounded-lg overflow- max-w-[80%] ${
          isUser ?
            type === "text" ? 
            "bg-[#22B286] text-white"
            : "bg-[#798682] text-black h-28 flex items-center justify-center mx-5"
          :"bg-white text-black"
        }`}>
          {type === "file" ? ( <div><strong>Fichier sélectionné:</strong> <br /> {message} </div> ): (message) }
      </div>
    </div>
  );
}
