"use client";
import React from "react";
export function ChatInput({ value, setValue, onSend, onChange }) {
  return (
    <div className="bg-[#E8EBF0] rounded-2xl px-[22px] py-4 flex items-center justify-between">
      <input
        value={value}
        type="text"
        placeholder="Entrez votre requete..."
        className="bg-transparent focus:border-none focus:outline-none w-[86%]"
        onChange={onChange}
      />
      <img
        src="sendButton.svg"
        alt=""
        onClick={(e) => {
          if ({ value }) {
            onSend(value);
          }
        }}
      />
    </div>
  );
}
