"use client";
import { useState } from "react";
import { CircleX } from "lucide-react";
import { ChatInput } from "@/components/chatInput";
import { PreparedMesssage } from "@/components/preparedMesssage";
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

export default function page() {
  const [messageList, setMessageList] = useState([
    {
      position: "left",
      type: "text",
      title: "WappGPT",
      text: "Bonjour !",
    },
    {
      position: "right",
      type: "text",
      title: "Vous",
      text: "That's all.",
    },
  ]);
  const [message, setMessage] = useState("");
  const sendMessage = (message) => {
    let temp = messageList.slice();
    temp.push({
      position: "right",
      type: "text",
      title: "Vous",
      text: message,
    });
    setMessageList(temp);
  };
  return (
    <div className="relative w-[400px] h-[600px] bg-green-300 overflow-hidden">
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
          dataSource={messageList}
        />
      </div>
      <div className="absolute w-full px-2 bottom-0">
        <div className="flex space-x-2 mb-1">
          <PreparedMesssage
            value={"Qu'est-ce que Iziskill ?🤔"}
            setMessage={setMessage}
          />
          <PreparedMesssage value={"FAQ's"} setMessage={setMessage} />
          <PreparedMesssage
            value={"Qu'est-ce que WappGPT ? 🤔"}
            setMessage={setMessage}
          />
        </div>

        <ChatInput value={message} setValue={setMessage} onSend={sendMessage} />
      </div>
    </div>
  );
}
