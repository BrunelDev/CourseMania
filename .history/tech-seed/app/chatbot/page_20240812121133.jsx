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
    <div className="relative w-[400px] h-[600px] bg-green-300 overflow-scroll scroll-hidden no-scrollbar">
      <header className="fixed z-50 left-0 top-0 w-[400px] bg-[#20B486] flex justify-between items-center">
        <img src="wappGPTlogo2.png" alt="" />
        <div className="flex flex-col">
          <span className="text-xl text-white">WappGPT</span>
          <span className="text-[#43EE7D]">
            {" "}
            <span className="w-5 h-5 rounded-full bg-[#43EE7D]"></span> Online
          </span>
        </div>
        <CircleX color="#ffffff" />
      </header>
      <div className="w-full mt-12">
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"10%"}
          dataSource={messageList}
        />
      </div>

      <div className="fixed top-[512px] py-1 bg-white w-[400px]">
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
