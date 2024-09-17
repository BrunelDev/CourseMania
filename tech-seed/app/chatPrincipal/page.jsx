"use client"
import React, { useState, useEffect, useRef } from "react";
import Lien from "@/components/lien";
import Days from "@/components/days";
import ChatMessage from "@/components/chatmessage";
import { InputFile } from "@/components/inputFichier";
import InputWithButton from "@/components/inputRequest";
import { IterationCw, Menu } from "lucide-react";
import { Plus } from "lucide-react";
import { type } from "os";


export default function PrincipalPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: "text", message: "Bienvenue! Comment puis-je vous aider?", isUser: false,  }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isFirstMessageSent, setIsFirstMessageSent] = useState(false);
    const [selectFile, setSelectFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [fileContent, setFileContent] = useState("");
    const [isLastResponseIA, setIsLastResponseIA] = useState(false);
    const [lastMessageIndex, setLastMessageIndex] = useState(null);

    const sendMessage = () => {
        // Ajouter le fichier en premier
        if (selectFile) {
            setMessages(prevMessages => [
                ...prevMessages,
                {type: "file", message: ` ${fileName}`, isUser: true }
            ]);
            handleFileContent(fileContent);
            setSelectFile(null);
            setFileName("");
            setFileContent("");
            setIsLastResponseIA(true);
            setLastMessageIndex(messages.length+1);
            if (!isFirstMessageSent) {
                setIsFirstMessageSent(true);
            }

        }
        // Ajouter le message texte ensuite
        if (inputMessage.trim()) {
            setMessages(prevMessages => [
                ...prevMessages,
                {type:"text", message: inputMessage, isUser: true }
            ]);
            setInputMessage(''); // Clear input field
            setLastMessageIndex(messages.length+1);
            if (!isFirstMessageSent) {
                setIsFirstMessageSent(true);
            }
            setIsLastResponseIA(true)
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setFileContent(reader.result); // Mise à jour du contenu du fichier
            setFileName(file.name); // Mise à jour du nom du fichier
            setSelectFile(file);
          };
          reader.readAsText(file);
        }
      };
    const handleFileContent = (fileContent) =>{
        setMessages((prevMessage) => [
            ...prevMessage,
            {type: "file", message: `contenu du fichier : ${fileContent.substring(0, 100)}...`, isUser: false}
        ]
        )
    };
    const handleClick = (e) => {
        setInputMessage(e.target.innerText);
    };
    const endOfChat = useRef(null);

    const handleRegenerate = (e) => {
        if (lastMessageIndex !== null){
            const regeneratedMessage = "Voici une nouvelle réponse générée !";
            const updatedMessages = [...messages];
            updatedMessages[lastMessageIndex] = {type:"text", message : regeneratedMessage, isUser : false};
            setMessages(updatedMessages);
            setIsLastResponseIA(true);
        }
    }

    useEffect(() => {
        endOfChat.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="w-full h-full flex flex-col lg:flex-row">
                {/* Barre Latérale */}
                <div className={`bg-black ${isSidebarOpen ? 'w-full sm:w-[70%] h-screen overflow-auto no-scrollbar ' : 'w-80 max-h-[300%] overflow-y-auto no-scrollbar'} fixed lg:relative z-10 lg:z-auto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300 ease-in-out lg:w-[250px]`}>
                    <div className="flex flex-col h-full pb-6 ml-4">
                        <h1 className="text-xl text-center text-white mt-8 font-[200px]">
                            <span className="text-lg font-bold">
                                IZI
                            </span>
                            CHATBOT
                        </h1>
                        <br />
                        <hr />
                        <a href="" className="hover:bg-white-700 text-white text-lg font-normal mt-5">
                            <button className="text-white bg-[#22B286] w-fit h-fit rounded-full">
                                <span className="text-center flex flex-row mx-3 my-1">
                                    <Plus />
                                    Nouvelle Discussion
                                </span>
                            </button>
                        </a>
                        <div>
                            <br />
                            <Days />
                            <br />
                            <Days />
                            <br />
                            <Days />
                        </div>
                        <a href="" className="hover:bg-white-700 text-white font-bold mb-4 text-center">
                            <button className="text-black bg-[#FFEED6] w-fit h-[52px] rounded-full my-8">
                                <span className="text-center mx-7 ">
                                    Mise à niveau
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                {/* Menu Hamburger */}
                <button
                    className="lg:hidden fixed top-4 left-4 z-20"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu size={32} color="white" />
                </button>
                {/* Contenu Principal */}
                <div className="flex-1 h-full bg-[#FAF1E4] flex flex-col justify-center items-center lg:items-start">
                    <div className="fixed top-0 bg-[#26322E] h-[86px] w-full" >
                        <img src="team__3.png" alt="" className="w-12 h-12 absolute right-6 lg:right-[25%] xl:right-[20%] 2xl:right-[17%] top-1/2 transform -translate-y-1/2 rounded-full z-50" />
                    </div>
                    <div className="w-full h-[88vh] lg:max-w-full  flex flex-col p-4 justify-center mt-[86px]">
                        <div className="flex flex-col items-center overflow-auto no-scrollbar ">
                            <div className="w-full h-[78%] rounded-lg shadow-md p-4 overflow-y-auto no-scrollbar break-words  pt-10">
                                {messages.map((msg, index) => (
                                    <ChatMessage key={index} type={msg.type} message={msg.message} isUser={msg.isUser} />
                                ))}
                                {isLastResponseIA && <button className="bg-[#b3aea9] w-fit px-3 py-1 rounded-md ml-2 bottom-2" onClick={handleRegenerate}>Regénérer</button> }
                                <div ref={endOfChat} />
                            </div>

                            <div className="fixed bottom-6 text-center  flex flex-col items-center w-full mt-2  ">
                                {!isFirstMessageSent && (
                                    <div className="hidden sm:flex space-x-6 mb-2 ">
                                        <button className="hover:bg-white-700 font-bold  text-black bg-[#22B286] w-fit px-3 mt-2 h-[40px] rounded-full" onClick={handleClick}>
                                            <span className="text-center text-xs sm:text-base">
                                                Pourquoi utiliser l'IA ?
                                            </span>
                                        </button>
                                        <button className="hover:bg-white-700 font-bold  text-black bg-[#22B286] w-fit px-3 mt-2 h-[40px] rounded-full" onClick={handleClick}>
                                            <span className="text-center text-xs sm:text-base">
                                                Qu'est ce que l'art ?
                                            </span>
                                        </button>
                                    
                                        <button className="hover:bg-white-700 font-bold  text-black bg-[#22B286] w-fit px-3 mt-2 h-[40px] rounded-full" onClick={handleClick}>
                                            <span className="text-center text-xs sm:text-base">
                                                Qui est Pythagore ?
                                            </span>
                                        </button>
                                    </div>
                                )}
                                <div className=" w-[96%] text-center lg:max-w-[700px] xl:max-w-[850px] mt-4">
                                    <InputWithButton value={inputMessage} onChange={(e) => {setInputMessage(e.target.value); setIsLastResponseIA(false) }} onClick={sendMessage} onChangeFile={(e) => {handleFileChange(e); setIsLastResponseIA(false)}} content={fileName ? <p>Fichier sélectionné: {fileName} </p> :null } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

