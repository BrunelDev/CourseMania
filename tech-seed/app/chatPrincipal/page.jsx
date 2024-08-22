"use client"
import React, { useState } from "react"
import Lien from "@/components/lien";
import Days from "@/components/days"
import { InputFile } from "@/components/inputFichier"
import InputWithButton from "@/components/inputRequest"
import { IterationCw, Menu } from "lucide-react";
import { Plus } from "lucide-react";

export default function PrincipalPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col md:flex-row">
                {/* Barre Latérale */}
                <div className={`bg-black ${isSidebarOpen ? 'w-full h-full' : 'w-80 h-[930px]'} fixed md:relative z-10 md:z-auto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} transition-transform duration-300 ease-in-out md:w-80`}>
                    <div className="flex flex-col h-full">
                        <h1 className="text-2xl text-center text-white mt-16">
                            <span className="text-xl font-bold">
                                IZI
                            </span>
                            CHATBOT
                        </h1>
                        <br />
                        <br />
                        <hr />
                        <a href="" className="hover:bg-white-700 text-white text-xl font-bold mt-2">
                            <button className="text-white bg-[#22B286] w-[258px] h-[52px] rounded-full">
                                <span className="text-center flex flex-row ml-4">
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
                        <a href="" className="hover:bg-white-700 text-white font-bold">
                            <button className="text-black bg-[#FFEED6] w-[258px] h-[52px] rounded-full">
                                <span className="text-center">
                                    Upgrade
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                {/* Menu Hamburger */}
                <button
                    className="md:hidden fixed top-4 left-4 z-20"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu size={32} color="white" />
                </button>
                {/* Contenu Principal */}
                <div className="flex-1 h-full bg-[#FFEED6] flex flex-col justify-center items-center md:items-start">
                    <div className="w-full md:w-[850px] h-full md:h-full flex flex-col p-4 justify-center">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col md:flex-row md:space-x-4 justify-between mt-[150px] md:mt-[650px] w-full">
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-4 md:mt-20">
                                    <button className="text-black bg-[#22B286] w-full md:w-[180px] h-[40px] md:h-[52px] rounded-full">
                                        <span className="text-center">
                                            Posez une question
                                        </span>
                                    </button>
                                </a>
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-4 md:mt-20">
                                    <button className="text-black bg-[#22B286] w-full md:w-[180px] h-[40px] md:h-[52px] rounded-full">
                                        <span className="text-center">
                                            qu'est ce que l'art
                                        </span>
                                    </button>
                                </a>
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-4 md:mt-20">
                                    <button className="text-black bg-[#22B286] w-full md:w-[180px] h-[40px] md:h-[52px] rounded-full">
                                        <span className="text-center">
                                            qui est pythagore?
                                        </span>
                                    </button>
                                </a>
                            </div>
                            <div className="text-center mt-4 flex flex-col items-center w-full">
                                <a href="" className="hover:bg-white-700 text-white font-bold">
                                    <button className="text-black bg-[#FFEED6] w-[208px] h-[52px] rounded-full border-gray border-2">
                                        <span className="text-center flex flex-row ml-12">
                                            <IterationCw />
                                            Regenerez
                                        </span>
                                    </button>
                                </a>
                                <div className="w-full md:w-[850px] mt-4">
                                    <InputWithButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
