"use client";
import { useState } from "react";
import { CircleX } from "lucide-react";
import { ChatInput } from "@/components/chatInput";
export default function page() {
  const [message, setMessage] = useState("");
  return (
    <div className="relative w-[400px] h-[600px] bg-green-300">
      <header className="bg-[#20B486] flex justify-between items-center">
        <img src="wappGPTlogo2.png" alt="" />
        <div className="flex flex-col">
          <span>WappGPT</span>
          <span>Online</span>
        </div>
        <CircleX color="#ffffff" />
      </header>
      <div className="">
        <ChatInput value={message} setValue={setMessage} />
      </div>
    </div>
  );
}
