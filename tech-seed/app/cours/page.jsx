"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Title from "@/components/title";
import Description from "../../components/description";
import CourseVideoCard from "../../components/courseVideoCard";
import { Combobox } from "../../components/combobox";
import Footer from "@/components/footer";

export default function Course() {
  const videos = [
    {
      image: "videoPlaceholder1.png",
      title: "Java Programming Beginner",
      tutor: "Kitani studio",
      status: "Not Yet started",
    },
    {
      image: "videoPlaceholder1.png",
      title: "Java Programming Beginner",
      tutor: "Kitani studio",
      status: "Not Yet started",
    },
    {
      image: "videoPlaceholder1.png",
      title: "Java Programming Beginner",
      tutor: "Kitani studio",
      status: "Not Yet started",
    },
    {
      image: "videoPlaceholder1.png",
      title: "Java Programming Beginner",
      tutor: "Kitani studio",
      status: "Not Yet started",
    },
    {
      image: "videoPlaceholder1.png",
      title: "Java Programming Beginner",
      tutor: "Kitani studio",
      status: "Not Yet started",
    },
    {
      image: "videoPlaceholder1.png",
      title: "Java Programming Beginner",
      tutor: "Kitani studio",
      status: "Not Yet started",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="px-4 sm:px-6 lg:px-10 my-[120px] sm:my-28 lg:my-24 ">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="sm:flex-1 bg-[#FFD130] h-[300px] sm:h-[400px] rounded-md flex">
            <div className="bg-[url('yellowBg.png')] max-lg:mb-5 w-full sm:w-[45%] lg:w-[45%] h-full flex flex-col justify-center pl-4 sm:pl-14">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Apprenez de nouvelles choses chaque jour
              </span>
              <span className="my-4 sm:my-6 text-[#667085] font-light text-sm sm:text-base lg:text-lg">
                Devenez professionnels et prêts à rejoindre le monde.
              </span>
              <Button title={"Explorez notre catalogue"} bgColor={"bg-white"} />
            </div>
            <div className="bg-gradient-to-r from-[#FFD130] from-[100%] to-[#fcda60] to-[0%] hidden sm:block w-[10%] h-full"></div>
            <div className="hidden sm:block bg-[url('lego.png')] w-full sm:w-[45%] lg:w-[45%] h-full relative text-white">
              <div className="flex absolute bottom-3 left-4 sm:left-20">
                <img
                  src="profAvatar1.png"
                  alt=""
                  className="border-4 border-white rounded-full w-[40px] sm:w-[60px] h-[40px] sm:h-[60px]"
                />
                <div className="flex flex-col space-y-1 place-self-center ml-2">
                  <span className="font-semibold text-sm sm:text-base">Pierre Dossou</span>
                  <span className="font-extralight text-xs sm:text-sm">
                    Professeur de mathématique
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-20">
          <div className="flex flex-col mb-6 sm:mb-0">
            <Title title={"Mes cours"} />
            <Description description={"Liste de vos cours"} />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Combobox title={"Cours les mieux notés"} />
            <Combobox title={"Cours les plus récents"} />
          </div>
        </div>
        <div className="overflow-x-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 sm:mx-10">
            {videos.map((video) => (
              <CourseVideoCard
                key={video.title} // Ajout d'une clé unique
                image={video.image}
                title={video.title}
                tutorName={video.tutor}
                status={video.status}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
