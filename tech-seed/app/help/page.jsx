"use client";
import React from "react";
import { Nav } from "../../components/Nav";
import Footer from "@/components/footer";
export default function Help() {
    return (
        <div className="scroll-py-16">
            <Nav />
            <div className="mt- w-full h-[800px] flex flex-row justify-between px-28 py-44 ">
                <img
                    src="spiral.svg"
                    alt=""
                    className="absolute left-0 w-[350px] h-[350px]"
                />
                <div className="flex flex-col mt-36">
                    <h1 className="text-6xl font-bold">AIDE</h1>
                    <h2 className="text-2xl text-[#4F5E71] ">Ask a teacher help for more <br /> comprehension</h2>
                    <br />
                    <br />

                    <a href="" className="hover:bg-white-700 text-white font-bold" >
                        <button className="text-white bg-[#00A991] w-[137px] h-[52px] rounded-full ">
                            <span className=" flex text-center ml-4">
                                Ask for Help
                            </span>
                        </button>
                    </a>
                    
                </div>
                <div className="w-[600px] h-[600px]">
                    <img src="Untitled_Artwork 8 1.png" alt="" />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}