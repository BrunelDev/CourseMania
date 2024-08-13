"use client"
import React from "react"

export default function NavChat() {
    return (
        <div className="chat-page">
            <nav className="w-[190px] h-[122px]">
            </nav>
            <div className="container flex flex-row ">
                <div className="bg-black w-[530px] h-[830px] -mt-20">
                    <div className="text-white text-center mt-20">
                        <div className="-mt-">
                            <span className="font-bold">IZI</span>
                            <span className="font-normal text-">CHATBOT</span>
                        </div>
                        <br />
                        <hr className="text-#22B286" />
                    </div>
                    <br />

                    <div>
                        <div className="flex flex-col justify-between items-center">
                            <button className="text-center text-white bg-[#22B286] rounded-full font-bold size-44 w-[244px] h-[60px]">
                                <span className="">+</span> New Chat
                            </button>
                            <div className="yesterday">
                                <div className="flex flex-col justify-between items-center">
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="msg bg-[#FAF1E4] w-[1700px] h-[830px] -mt-20">
                    <div className="join bg-[#EAF2E1] w-[308px] h-[754px] ml-[680px] mt-9">

                    </div>
                </div>

            </div>

        </div>

    )
}