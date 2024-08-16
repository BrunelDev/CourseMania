"use client"
import React from "react"
import Lien from "@/components/lien";
import Days from "@/components/days"
import InputFile from "@/components/inputFichier"
export default function PrincipalPage() {
    return (
        <div className="w-full">

            <div className="w-full h-full px-0 py-0 flex flex-row">
                {/* Barre Latérale */}
                <div className=" bg-black w-80 h-[930px]">
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
                        <div>
                            <br />
                            <Days />
                            <br />
                            <Days />
                            <br />
                            <Days />
                        </div>
                        <a href="" className="hover:bg-white-700 text-white font-bold mt-20" >
                            <button className="text-black bg-[#FFEED6] w-[258px] h-[52px] rounded-full ">
                                <span className=" text-center">
                                    Upgrade
                                </span>
                            </button>
                        </a>
                    </div>

                </div>
                {/* end */}
                <div className="w-full h-[930px] bg-[#FFEED6] flex flex-row ">
                    <div className="w-[850px] h-full flex flex-col" >
                        <div>

                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-items-start mt-[650px]">
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-20" >
                                    <button className="text-black bg-[#22B286] w-[238px] h-[52px] rounded-full ">
                                        <span className=" text-center">
                                            Posez une question
                                        </span>
                                    </button>
                                </a>
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-20" >
                                    <button className="text-black  bg-[#22B286] w-[238px] h-[52px] rounded-full ">
                                        <span className=" text-center">
                                            qu'est ce que l'art
                                        </span>
                                    </button>
                                </a>
                                <a href="" className="hover:bg-white-700 text-white font-bold mt-20" >
                                    <button className="text-black  bg-[#22B286] w-[238px] h-[52px] rounded-full ">
                                        <span className=" text-center">
                                            qui est pythagore?
                                        </span>
                                    </button>
                                </a>
                            </div>
                            <div className="text-center mt-4 flex flex-col">
                                <a href="" className="hover:bg-white-700 text-white font-bold " >
                                    <button className="text-black bg-[#FFEED6] w-[258px] h-[52px] rounded-full ">
                                        <span className=" text-center">
                                            Regenerer
                                        </span>
                                    </button>
                                </a>
                                <input type="text" name="" id="" placeholder="Entrez votre requête..." className="mt-3 ml-3 h-9" />
                            </div>


                        </div>

                    </div>
                    <div className="w-[300px]  h-[850px] bg-[#EAF2E1] flex flex-col mt-12 ml-[20px]">
                        <h1 className=" text-[#22B286] text-3xl">
                            Links to <span className="font-bold">Document</span> and <br /> <span className="font-bold"> Website</span> for this Response
                        </h1>
                        <div className="flex flex-row">
                            <InputFile />
                            <a href=""><img src="Vector (1).png" alt="" /></a>
                        </div>
                        <br />
                        <div className="flex flex-row">
                            <input type="text" placeholder="saisis l'url de l'image" />
                            <a href=""><img src="Vector (1).png" alt="" /></a>
                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}