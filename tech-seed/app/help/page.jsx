"use client";
import Link from "next/link";
import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";

export default function Help() {
  return (
    <div className="scroll-py-16">
      <Navbar />
      <div className="mt-0 w-full min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-28 py-20 md:scroll-py-2">
        <img
          src="spiral.svg"
          alt=""
          className="absolute left-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
        <div className="flex flex-col mt-10 md:mt-36 z-10">
          <h1 className="text-4xl md:text-6xl font-bold">AIDE</h1>
          <h2 className="text-xl md:text-2xl text-[#4F5E71] mt-4 md:mt-0">
            Demandez un mentor pour plus de compréhension
          </h2>
          <br />
          <br />
          <Link href="helpSuite" >
              <button className="text-white bg-[#00A991] w-[175px] h-[42px] md:w-[175px] md:h-[52px] rounded-full">
                <span className="flex justify-center font-bold">
                  Demander de l'aide
                </span>
              </button>
          </Link>

        </div>
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] mt-10 md:mt-0 z-10">
          <img src="Untitled_Artwork 8 1.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
