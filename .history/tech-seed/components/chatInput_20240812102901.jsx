import React from "react";

export function ChatInput() {
  return (
    <div className="bg-[#E8EBF0] rounded-2xl px-[22px] py-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Entrez votre message..."
        className="bg-transparent focus:border-none focus:outline-none"
      />
      <img src="sendButton.svg" alt="" />
    </div>
  );
}
