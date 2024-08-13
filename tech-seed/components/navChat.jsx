"use client"
import React from "react"

export default function NavChat() {
    return (
        <div className="chat-page">

            <div className="container flex flex-row -ml-16 -mt-12">
                <div className="bg-black w-[620px] h-[980px] ml-2">
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
                        <div className="flex flex-col justify-between items-center w-[370px]  -ml-12">
                            <button className="text-center text-white bg-[#22B286] rounded-full font-bold size-44 w-[244px] h-[60px]">
                                <span className=" text-[#ffffff] text-lg">+</span> Nouvelle Discussion
                            </button>
                            <div className="yesterday">
                                <span className="">Yesterday</span>
                                <div className="flex flex-col justify-between items-center">
                                    <span className="flex flex-row -ml-10 mt-8">
                                        <img src="Vector.png" alt="message" className=" -ml-4" />
                                        <h3 className="text-white ml-4"><a href="#">etxtetefghfjdk</a></h3>
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <span className="flex flex-row -ml-10 mt-8">
                                        <img src="Vector.png" alt="message" className=" -ml-4" />
                                        <h3 className="text-white ml-4"><a href="#">etxtetefghfjdk</a></h3>
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <span className="flex flex-row -ml-10 mt-8">
                                        <img src="Vector.png" alt="message" className=" -ml-4" />
                                        <h3 className="text-white ml-4"><a href="#">etxtetefghfjdk</a></h3>
                                    </span>
                                </div>

                            </div>
                            <div className="yesterday">
                
                                <div className="flex flex-col justify-between items-center">
                               
                                    <span className="flex flex-row -ml-10 mt-8">
                                        <img src="Vector.png" alt="message" className=" -ml-4" />
                                        <h3 className="text-white ml-4"><a href="#">etxtetefghfjdk</a></h3>
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <span className="flex flex-row -ml-10 mt-8">
                                        <img src="Vector.png" alt="message" className=" -ml-4" />
                                        <h3 className="text-white ml-4"><a href="#">etxtetefghfjdk</a></h3>
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <span className="flex flex-row -ml-10 mt-8">
                                        <img src="Vector.png" alt="message" className=" -ml-4" />
                                        <h3 className="text-white ml-4"><a href="#">etxtetefghfjdk</a></h3>
                                    </span>
                                </div>

                            </div>
                            <button className="mt-40 text-center text-white bg-[#FAF1E4] rounded-full size-44 w-[224px] h-[50px]">
                                <span className=" text-black">Upgrade to plus</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#FAF1E4]  h-[1050px] -mt-16 ml-[-20px]">
                    <div className="flex flex-row mt-[700px] ml-16 justify-start w-[500px] ">
                        <button className="mt-40 text-center text-white bg-[#22B286] rounded-full size-44 w-[184px] h-[30px]">
                            <span className=" text-white">Qu'est ce que l'art</span>
                        </button>
                        <button className="mt-40 text-center text-white bg-[#22B286] rounded-full size-44 w-[184px] h-[30px]">
                            <span className=" text-white">comment vas tu </span>
                        </button>
                        <button className="mt-40 text-center text-white bg-[#22B286] rounded-full size-44 w-[184px] h-[30px]">
                            <span className=" text-white">cours</span>
                        </button>
                        <button className="mt-[220px] ml-[-380px] text-center text-white bg-[#FAF1E4] border-2 rounded-full size-44 w-w-[184px] h-[30px]">
                            <span className=" text-black">Regenerate</span>
                        </button>
                    </div>

                    <div className="join bg-[#EAF2E1] w-[320px] h-[854px] ml-[650px] mt-[-780px]">
                        <div className="text-2xl -mt-20">
                            <h1 className="mt- text-[#22B286]">Links to <span className="font-bold">Document</span> and <br />
                                <span className="font-bold">Website</span> for this Response
                            </h1>
                            <br /><br />
                            <div className="flex flex-row">
                                <input type="text" className=" w-[280px] border-spacing-x-1 bg-inherit " />
                                <a href="#"><img src="Vector (1).png" alt="" /></a>
                            </div>
                            <br />
                            <div className="flex flex-row">
                                <input type="text" className=" w-[280px] border-spacing-x-1 bg-inherit " />
                                <a href="#"><img src="Vector (1).png" alt="" /></a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}