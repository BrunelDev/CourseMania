"use client";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { Avatar } from "@chatscope/chat-ui-kit-react";
import { TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { MessageSeparator } from "@chatscope/chat-ui-kit-react";
export function Chat() {
  const messages = [
    {
      type: "separator",
      props: {
        content: "Saturday, 30 November 2019",
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "single",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "single",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "first",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "normal",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "normal",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "last",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "first",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "normal",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "normal",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "outgoing",
          position: "last",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "first",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "last",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    },
    {
      type: "separator",
      props: {
        content: "Saturday, 31 November 2019",
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "single",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "single",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "first",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "normal",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "normal",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "last",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "first",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "normal",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "normal",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "outgoing",
          position: "last",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "first",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "last",
        },
        children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
      },
    },
  ];

  return (
    <MessageList
      style={{ height: "500px" }}
      typingIndicator={<TypingIndicator content="Eliot is typing" />}
    >
      {messages.map((m, i) =>
        m.type === "separator" ? (
          <MessageSeparator key={i} {...m.props} />
        ) : (
          <Message key={i} {...m.props} />
        )
      )}
    </MessageList>
  );
}
