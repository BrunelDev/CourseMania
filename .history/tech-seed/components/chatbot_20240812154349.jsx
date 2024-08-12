"use client";
import Button from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/chatBotDialog";
import { useState } from "react";
import { CircleX } from "lucide-react";
import { ChatInput } from "@/components/chatInput";
import { PreparedMesssage } from "@/components/preparedMesssage";
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
export function ChatBot() {
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
    <Dialog>
      <DialogTrigger asChild>
        <span
          className={`cursor-pointer text-white bg-[#20B486] hover:bg-[#198764] py-2 px-3 text-center rounded-md  w-fit h-fit z-50`}
        >
          Le ChatBot
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <div className="relative rounded-full w-[400px] h-[600px] bg-green-300 overflow-scroll scroll-hidden no-scrollbar">
          <header className="fixed z-50 left-0 top-0 w-[400px] bg-[#20B486] flex justify-between items-center">
            <div className="flex space-x-3">
              <img src="wappGPTlogo2.png" alt="" />
              <div className="flex flex-col">
                <span className="text-xl text-white">WappGPT</span>
                <div className="text-[#43EE7D] flex items-center space-x-2">
                  {" "}
                  <div className="w-2 h-2 rounded-full bg-[#43EE7D]"></div>{" "}
                  <span>Online</span>
                </div>
              </div>
            </div>
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
            <ChatInput
              value={message}
              setValue={setMessage}
              onSend={sendMessage}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
