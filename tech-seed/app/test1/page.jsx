"use client";
import { CartDropbox } from "@/components/cartDropbox";
import { Cart } from "@/components/cart";
import React from "react";
import Navbar from "@/components/navbar";
import CourseCard from "@/components/courseCard";
import ThemeCard from "@/components/themeCard";
import StatsBox from "@/components/statsBox";
import Button from "@/components/button";
import TeacherCard from "@/components/teacherCard";
import Footer from "@/components/footer";
import BlogCard from "@/components/blogCard";
import { Chatbot } from "@/components/chatbot1";

export default function Test() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-[110px] py-10 bg-gradient-to-tl from-[#24bb8b1b] from-0% to-[#24bb8b00] to-100% ">
        <div className="w-full md:w-1/2">
          <img
            src="spiral.svg"
            alt=""
            className="absolute left-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
          />
          <p className="translate-y-10 text-3xl md:text-5xl font-bold text-[#101828]">
            Améliorez vos <span className="text-[#20B486]">compétences</span> pour
            faire <span>progresser</span> votre cheminement de <span>carrière</span>.
          </p>
          <p className="text-[#646464] text-sm md:text-base font-normal mt-8 md:mt-16 mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aut
            veritatis! Ipsum pariatur provident aliquam sit quam sint, recusandae.
          </p>
          <div className="flex flex-col md:flex-row">
            <Button
              title={"Commencer"}
              bgColor={"bg-[#20B486] py-3 md:py-4 mr-0 md:mr-5"}
              textColor={"text-white"}
            />
            <Button
              title={"Essai gratuit"}
              bgColor={"bg-[#EAFFF9] shadow-lg shadow-[#1018280c] py-3 md:py-4 mt-4 md:mt-0"}
              textColor={"text-[#3BC49A]"}
            />
          </div>
          <div className="mt-8 md:mt-10 mb-10 md:mb-20 flex flex-col md:flex-row justify-between">
            <span className="flex mb-4 md:mb-0">
              <img
                src="speaker.svg"
                alt=""
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] mr-3"
              />
              Public Speaking
            </span>
            <span className="flex mb-4 md:mb-0">
              <img
                src="carreerIcon.svg"
                alt=""
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] mr-3"
              />
              Orienté carrière
            </span>{" "}
            <span className="flex">
              <img
                src="creativeIcon.svg"
                alt=""
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] mr-3"
              />
              Pensée Créative
            </span>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
          <div className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-[#20B486] mx-auto md:mx-0"></div>
          <div className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] absolute top-5 left-1/2 transform -translate-x-1/2 md:left-5 border bg-[#20B486] overflow-hidden ">
            <img
              src="studentPicture.png"
              alt=""
              className="w-[280px] h-[280px] md:w-[444px] md:h-[444px] absolute bottom-[-30px] left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="absolute top-0 left-0 transform scale-75 md:scale-100">
            <StatsBox
              stat="5k+"
              title={"Cours en ligne"}
              icon="tutorsIcon.svg"
            />
          </div>
          <div className="absolute top-0 right-0 transform scale-75 md:scale-100">
            <StatsBox
              stat="250+"
              title={"Tuteurs"}
              icon="tutorsIcon.svg"
            />
          </div>
          <div className="absolute right-0 bottom-20 transform scale-75 md:scale-100">
            <StatsBox
              stat="2k+"
              title={"Vidéos éducatives"}
              icon="tutorsIcon.svg"
            />
          </div>
          <img
            src="spiral.svg"
            className="absolute z-[-1] bottom-0 left-1/2 transform -translate-x-1/2 md:left-1/3"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}
