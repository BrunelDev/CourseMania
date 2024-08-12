"use client";
import React from "react";
import { MessageList } from "react-chat-elements";
export default function Test() {
  let Ref = React.createRef();
  return (
    <MessageList
      referance={Ref}
      className="message-list w-fit"
      lockable={true}
      toBottomHeight={"100%"}
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
  );
}
