"use client";
<<<<<<< HEAD
import { useState } from "react";
=======
import { MessageList } from "react-chat-elements";
>>>>>>> 68b4b9e4f058027638f347b217861b8510b4ddc2
export default function Test() {
  return (
    <MessageList
      className="message-list"
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
