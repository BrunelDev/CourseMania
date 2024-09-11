"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Title from "@/components/title";
import Description from "@/components/description";
import CourseVideoCard from "@/components/courseVideoCard";
import { Combobox } from "@/components/combobox";
import Footer from "@/components/footer";
import Filter from "@/components/filter";

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
      <div className="px-10 my-24">
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
        <div className="flex">
          <div className="mt-10">
            <Filter />
          </div>
          <div className="grid grid-flow-row grid-cols-3 ml-2">
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
      </div>
    </>
  );
}
