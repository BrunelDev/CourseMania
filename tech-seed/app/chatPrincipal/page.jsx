"use client"
import React, { useState, useEffect, useRef } from "react"
import Lien from "@/components/lien";
import Days from "@/components/days"
import ChatMessage from "@/components/chatmessage";
import { InputFile } from "@/components/inputFichier"
import { InputFile } from "@/components/inputFichier"
import InputWithButton from "@/components/inputRequest"
import { IterationCw, Menu } from "lucide-react";
import { IterationCw, Menu } from "lucide-react";
import { Plus } from "lucide-react";


export default function PrincipalPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [messages, setMessages] = useState([
        { message: "Bienvenue! Comment puis-je vous aider?", isUser: false }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isFirstMessageSent, setIsFirstMessageSent] = useState(false);

    const sendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { message: inputMessage, isUser: true }]);
            setInputMessage(''); // Clear input field
            if (!isFirstMessageSent) {
                setIsFirstMessageSent(true);
            }
        }
    };
    const handleFileUpload = (file) => {
        setMessages([...messages, {message: inputMessage, isUser: true}]);
        handleFileContent(file.content);
    };
    const handleFileContent = (fileContent) =>{
        setMessages((prevMessage) => [
            ...prevMessage,
            {message: `contenu du fichier : ${fileContent.substring(0, 100)}...`, isUser: false}
        ]
        )
    };
    const handleClick = (e) => {
        setInputMessage(e.target.innerText);
    };
    const endOfChat = useRef(null);

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
                            <button className="text-white bg-[#22B286] w-fit h-[42px] rounded-full">
                                <span className="text-center flex flex-row mx-3">
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
                                    <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
                                ))}
                                <div ref={endOfChat} />
                            </div>

                            <div className="fixed bottom-6 text-center  flex flex-col items-center w-full mt-2  ">
                                {!isFirstMessageSent && (
                                    <div className="space-x-6 mb-2 ">
                                        <button className="hover:bg-white-700 font-bold  text-black bg-[#22B286] w-fit px-3 mt-2 lg:w-[180px] h-[40px] rounded-full" onClick={handleClick}>
                                            <span className="text-center">
                                                Pourquoi utiliser l'IA ?
                                            </span>
                                        </button>
                                        <button className="hover:bg-white-700 font-bold  text-black bg-[#22B286] w-fit px-3 mt-2 lg:w-[180px] h-[40px] rounded-full" onClick={handleClick}>
                                            <span className="text-center">
                                                Qu'est ce que l'art ?
                                            </span>
                                        </button>
                                    
                                        <button className="hover:bg-white-700 font-bold  text-black bg-[#22B286] w-fit px-3 mt-2 lg:w-[180px] h-[40px] rounded-full" onClick={handleClick}>
                                            <span className="text-center">
                                                Qui est Pythagore ?
                                            </span>
                                        </button>
                                    </div>
                                )}
                                <div className=" w-[96%] text-center lg:max-w-[700px] xl:max-w-[850px] mt-4">
                                    <InputWithButton value={inputMessage} onChange={(e) => setInputMessage(e.target.value) } onClick={sendMessage} onFileUpload={handleFileUpload} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

