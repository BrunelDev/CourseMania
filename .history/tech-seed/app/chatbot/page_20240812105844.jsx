"use client";
import { useState } from "react";
import { CircleX } from "lucide-react";
import { ChatInput } from "@/components/chatInput";
import { PreparedMesssage } from "@/components/preparedMesssage";
import { MessageList } from "react-chat-elements";

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
      <div className="w-full">
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"10%"}
          dataSource={[
            {
              position: "left",
              type: "text",
              title: "Kursat",
              text: "Give me a message list example !",
            },
            {
              position: "right",
              type: "text",
              title: "Emre",
              text: "That's all.",
            },
          ]}
        />
      </div>
      <div className="absolute left-1/2 w-full bottom-0">
        <PreparedMesssage
          value={"Qu'est-ce que Iziskill"}
          setMessage={setMessage}
        />
        <ChatInput value={message} setValue={setMessage} />
      </div>
    </div>
  );
}
