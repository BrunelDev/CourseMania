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
import { InputToolbox } from "@chatscope/chat-ui-kit-react";
import { AttachmentButton } from "@chatscope/chat-ui-kit-react";
import { SendButton } from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
export function Chat() {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([
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
  ]);

  const sendMessage = ({ text }) => {
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
    <div>
      <ConversationList
        style={{
          height: "340px",
        }}
      >
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
      <ChatContainer
        style={{
          height: "500px",
        }}
      >
        <MessageList
          style={{ height: "500px" }}
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
            sendMessage(message);
          }}
        />
      </ChatContainer>
    </div>
  );
}
