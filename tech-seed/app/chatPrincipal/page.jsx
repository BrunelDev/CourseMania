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
        <div className="w-screen h-screen">
            <div className="w-full h-full flex flex-col lg:flex-row">
                {/* Barre Latérale */}
                <div className={`bg-black ${isSidebarOpen ? 'w-full sm:w-[70%] h-screen overflow-auto no-scrollbar ' : 'w-80 max-h-[300%] overflow-y-auto no-scrollbar'} fixed lg:relative z-10 lg:z-auto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300 ease-in-out lg:w-80`}>
                    <div className="flex flex-col h-full pb-6 ml-4">
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
                        <a href="" className="hover:bg-white-700 text-white font-bold mb-4">
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
                    className="lg:hidden fixed top-4 left-4 z-20"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu size={32} color="white" />
                </button>
                {/* Contenu Principal */}
                <div className="flex-1 h-full bg-[#FFEED6] flex flex-col justify-center items-center lg:items-start">
                    <div className="w-full lg:max-w-full h-full  flex flex-col p-4 justify-center">
                        <div className="flex flex-col items-center overflow-auto no-scrollbar">
                            <div className="flex flex-col lg:flex-row lg:space-x-1 xl:space-x-4 justify-between mt-[150px] lg:mt-auto w-full">
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-4 lg:mt-20">
                                    <button className="text-black bg-[#22B286] w-full  lg:w-[180px] h-[40px] lg:h-[52px] rounded-full">
                                        <span className="text-center">
                                            Posez une question
                                        </span>
                                    </button>
                                </a>
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-4 lg:mt-20">
                                    <button className="text-black bg-[#22B286] w-full lg:w-[180px] h-[40px] lg:h-[52px] rounded-full">
                                        <span className="text-center">
                                            qu'est ce que l'art
                                        </span>
                                    </button>
                                </a>
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-4 lg:mt-20">
                                    <button className="text-black bg-[#22B286] w-full  lg:w-[180px] h-[40px] lg:h-[52px] rounded-full">
                                        <span className="text-center">
                                            qui est pythagore?
                                        </span>
                                    </button>
                                </a>
                            </div>
                            <div className="text-center mt-4 flex flex-col items-center w-full bottom-8">
                                <a href="" className="hover:bg-white-700 text-white font-bold">
                                    <button className="text-black bg-[#FFEED6] w-[208px] h-[52px] rounded-full border-gray border-2">
                                        <span className="text-center flex flex-row ml-12">
                                            <IterationCw />
                                            Regenerez
                                        </span>
                                    </button>
                                </a>
                                <div className="w-full  lg:max-w-[850px] mt-4">
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
