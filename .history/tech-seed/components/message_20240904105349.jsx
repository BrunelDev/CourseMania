"use client";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationList,
  Conversation,
} from "@chatscope/chat-ui-kit-react";
import { ConversationHeader } from "@chatscope/chat-ui-kit-react";
import Lateralenavmentor from "@/components/lateralenavmentor";
import { Avatar } from "@chatscope/chat-ui-kit-react";
import { TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { MessageSeparator } from "@chatscope/chat-ui-kit-react";
import { InputToolbox } from "@chatscope/chat-ui-kit-react";
import { AttachmentButton } from "@chatscope/chat-ui-kit-react";
import { SendButton } from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { ChatSearchBar } from "@/components/chatSearchBar";
import { sendMessage, getMessages } from "@/lib/functions";
export function Chat() {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      getMessages()
        .then((res) => {
          let temp = [
            {
              type: "separator",
              props: {
                content: "Saturday, 30 November 2019",
              },
            },
          ];
          res.map((message) => {
            temp.push({
              props: {
                model: {
                  id: message.id,
                  message: message.content,
                  sentTime: "15 mins ago",
                  sender: message.user,
                  direction:
                    User.name === message.user ? "outcoming" : "incoming",
                  position: "single",
                },
                children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
              },
            });
            setMessagesList(temp);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);

  const sendText = (text) => {
    sendMessage().then(() => {
      setMessage("");
    });
    let temp = messagesList.slice();
    temp.push({
      props: {
        model: {
          message: message,
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "outgoing",
          position: "last",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    });
    setMessagesList(temp);
  };

  return (
    <div className="flex h-[100vh] w-full">
      <div className="h-full w-1/3">
        <ConversationList className="100vh border border-gray-400">
          <div className="px-8 my-2 pb-2 border-b">
            <ChatSearchBar />
          </div>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Lilly"
            name="Lilly"
          >
            <Avatar
              name="Lilly"
              src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Joe"
            name="Joe"
          >
            <Avatar
              name="Joe"
              src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Emily"
            name="Emily"
          >
            <Avatar
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Kai"
            name="Kai"
          >
            <Avatar
              name="Kai"
              src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Akane"
            name="Akane"
          >
            <Avatar
              name="Akane"
              src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Eliot"
            name="Eliot"
          >
            <Avatar
              name="Eliot"
              src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Zoe"
            name="Zoe"
          >
            <Avatar
              name="Zoe"
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Patrik"
            name="Patrik"
          >
            <Avatar
              name="Patrik"
              src="https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg"
            />
          </Conversation>
        </ConversationList>
      </div>
      <div className="w-full h-[100vh]">
        <ChatContainer className="h-[100vh]">
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
            <ConversationHeader.Content
              info="Active 10 mins ago"
              userName="Emily"
            />
          </ConversationHeader>
          <div className="w-full h-[60px] border-b shadow-border shadow-md flex justify-between">
            <div>
              <Avatar />
              <span>Tony Tony</span>
            </div>
            <img src="loupe.png" alt="" />
          </div>
          <MessageList
            className="w-[80vh]"
            typingIndicator={<TypingIndicator content="Eliot is typing" />}
          >
            {messagesList.map((m, i) =>
              m.type === "separator" ? (
                <MessageSeparator key={i} {...m.props} />
              ) : (
                <Message key={i} {...m.props} />
              )
            )}
          </MessageList>
          <MessageInput
            autoFocus
            placeholder="Type message here..."
            value={message}
            onChange={setMessage}
            onSend={() => {
              sendText(message);
            }}
          />
        </ChatContainer>
      </div>
    </div>
  );
}
const 
