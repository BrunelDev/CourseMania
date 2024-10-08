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
import { useState, useEffect, useRef } from "react";
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
      title: "Light",
      text: "Bonjour !",
    },
    {
      position: "right",
      type: "text",
      title: "Vous",
      text: "Bonjour Light !",
    },
  ]);
  const [message, setMessage] = useState('');
  const sendMessage = (message) => {
    let temp = messageList.slice();
    temp.push({
      position: "right",
      type: "text",
      title: "Vous",
      text: message,
    });
    setMessageList(temp);
    setMessage('');
  };
  const endOfChatRef = useRef(null);
  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth"})
  }, [message]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src="wappGPTlogo2.png"
          alt=""
          className="cursor-pointer p-3 bg-[#20B486] rounded-full hover:scale-105 duration-300"
        />
      </DialogTrigger>
      <DialogContent className="w-screen sm:max-w-[400px]">
        <div className="relative w-screen sm:w-[400px] [] short:h-screen h-[600px] bg-green-50 overflow-scroll scroll-hidden no-scrollbar">
          <header className="fixed z-50 left-0 top-0 w-[400px] bg-[#20B486] flex justify-between items-center">
            <div className="flex space-x-3 px-2">
              <img src="wappGPTlogo2.png" alt="" />
              <div className="flex flex-col">
                <span className="text-xl text-white font-semibold">Light</span>
                <div className="text-[#43EE7D] flex items-center space-x-2">
                  {" "}
                  <div className="w-2 h-2 rounded-full bg-[#43EE7D]"></div>{" "}
                  <span>Online</span>
                </div>
              </div>
            </div>
          </header>
          <div className="w-full mt-12 mb-[120px]">
            <MessageList
              className="message-list  overflow-auto"
              lockable={true}
              toBottomHeight={"10%"}
              dataSource={messageList}
            />
            <div ref={endOfChatRef}/>
          </div>

          <div className="fixed bottom-0 py-1 bg-white w-screen sm:w-[400px]">
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
