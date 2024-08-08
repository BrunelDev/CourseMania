"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Title from "../../components/title";
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
      <div className="px-10 my-24">
        <div className="bg-[#FFD130] h-[400px] flex rounded-md">
          <div className="bg-[url('yellowBg.png')] w-[45%] h-full flex flex-col justify-center pl-14">
            <span className="text-4xl font-bold">
              Apprenez de nouvelles choses chaque jour
            </span>
            <span className="my-10 text-[#667085] font-light">
              Devenez professionnels et prêts à rejoindre le monde.
            </span>
            <Button title={"Explorez notre catalogue"} bgColor={"bg-white"} />
          </div>
          <div className="bg-gradient-to-r from-[#FFD130] from-[100%] to-[#fcda60] to-[0%] w-[10%] h-full"></div>
          <div className="bg-[url('lego.png')] w-[45%] h-full relative text-white">
            <div className="flex absolute bottom-3 left-20">
              <img
                src="profAvatar1.png"
                alt=""
                className="border-4 border-white rounded-full w-[60px] h-[60px]"
              />
              <div className="flex flex-col space-y-1 place-self-center">
                <span className="font-semibold">Pierre Dossou</span>
                <span className="font-extralight">
                  Professeur de mathématique
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-20">
          <div className="flex flex-col">
            <Title title={"Mes cours"} />
            <Description description={"Liste de vos cours"} />
          </div>
          <div className="place-self-center space-x-4">
            <Combobox title={"Cours les mieux notés"} />
            <Combobox title={"Cours les plus récents"} />
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-4 mx-10">
          {videos.map((video) => {
            return (
              <CourseVideoCard
                image={video.image}
                title={video.title}
                tutorName={video.tutor}
                status={video.status}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
