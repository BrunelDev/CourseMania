"use client";
import { MessageList } from "react-chat-elements";
export default function Test() {
  return (
    <MessageList
      className="message-list"
      lockable={false}
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
