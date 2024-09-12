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
import { url } from "@/lib/functions";

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
import { sendMessage, getMessages, getMentor } from "@/lib/functions";
import { useReceiver } from "@/lib/context";
export function Chat() {
  const { receiverData, changeReceiver } = useReceiver();
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [mentorsList, setMentorsList] = useState([]);

  {
    useEffect(() => {
      getMentor().then((res) => {
        let temp = res;
        console.log("results liste mentors");
        setMentorsList(res.results);
      });
      const interval = setInterval(() => {
        getMessages(1)
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
  }
  const ConversationsListContent = () => {
    if (mentorsList?.length !== 0) {
      console.log("ici", mentorsList);
      return mentorsList.map((mentor) => {
        return (
          <Conversation
            onClick={() => {
              console.log("image", url + mentor.user.image);
              changeReceiver({
                receiverName: mentor.user.username,
                receiverImage: mentor.user.image,
                receiverInfo: mentor.user.info,
                receiverId: mentor.user.id,
              });
            }}
            info="Un mentor de confiance"
            name={mentor.user.username}
          >
            <Avatar name={mentor.user.username} src={mentor.user.image} />
          </Conversation>
        );
      });
    }
  };

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
          direction: "ongoing",
          position: "last",
        },
        children: (
          <Avatar
            src={localStorage.getItem("profileImage")}
            name={localStorage.getItem("username")}
          />
        ),
      },
    });
    setMessagesList(temp);
  };
  const changeConversation = (
    receiverName,
    receiverImage,
    receiverInfo,
    receiverId
  ) => {
    // update chatInfo with new receiver details
    // fetch new messages for this conversation
    // update messagesList with new messages
    // update chatInfo with new receiver details
    getMessages(receiverId)
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
                sentTime: "Il y a 15 mins",
                sender: message.user,
                direction:
                  User.name === message.user ? "outcoming" : "incoming",
                position: "single",
              },
              children: <Avatar src={"profAvatar1.png"} name="Eliot" />,
            },
          });
          setMessagesList(temp);
          changeReceiver({
            receiverName,
            receiverImage,
            receiverInfo,
            receiverId,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const chatBox = () => {
    return (
      //receiver name, receiverImage, receiverInfo, receiverId
      <div className="w-full h-[100vh]">
        <ChatContainer className="h-[100vh]">
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              name={receiverData.receiverName}
              src={receiverData.receiverImage}
            />
            <ConversationHeader.Content
              info="En ligne"
              userName={receiverData.receiverName}
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
            placeholder="Ecrivez un message ..."
            value={message}
            onChange={setMessage}
            onSend={() => {
              sendText(message);
            }}
          />
        </ChatContainer>
      </div>
    );
  };

  return (
    <div className="flex h-[100vh] w-full">
      <div className="h-full w-1/3">
        <ConversationList className="100vh border border-gray-400">
          <div className="px-8 my-2 pb-2 border-b">
            <ChatSearchBar />
          </div>
          <ConversationsListContent />
        </ConversationList>
      </div>
      <div className="w-full h-[100vh]">
        <ChatContainer className="h-[100vh]">
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              name={receiverData.receiverName}
              src={receiverData.receiverImage}
            />
            <ConversationHeader.Content
              info="En ligne"
              userName={receiverData.receiverName}
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
