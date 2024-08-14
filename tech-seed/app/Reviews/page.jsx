import React from "react";
import Lateralenavmentor from "@/components/lateralenavmentor";
import { CarouselDemo } from "@/components/carousselComment";
export default function Reviews() {
    return (
        <div className="inline-block">
            <div className="flex flex-col">
                <div className="bg-[aliceblue] ml-[10px] w-[1430px] h-80">
                        <div className="ml-32 mt-9">
                            <img src="image 1.png" alt="" />
                        </div>
                        <div className="ml-56 -mt-16">
                            <h1 className="text-lg font-bold">Titre de la videoo</h1>
                            <span className="flex flex-row">
                                5.0
                                <img src="start.png" alt="" />
                                <img src="start.png" alt="" />
                                <img src="start.png" alt="" />
                                <img src="start.png" alt="" />
                                <img src="start.png" alt="" />
                            </span>
                            <p className="ml-80 -mt-4 text-gray-400">notation de ce cours</p>
                            <br />
                        <div className="flex flex-row justify-between mt-40 w-[800px] ">
                            <img src="start.png" alt="" />
                            <img src="start.png" alt="" className="" />
                            </div>
                        </div>
                </div>
                <div className="ml-[50px] mt-20">
                    <CarouselDemo

                    />
                </div>
            </div>
        </div>
    )
}