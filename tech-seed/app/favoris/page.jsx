"use client";
import React from "react";
import Button from "@/components/button";
import Title from "../../components/title";
import Description from "../../components/description";
import CardFavoris from "../../components/cardFavoris";
import { Combobox } from "../../components/combobox";
import Favoris from '@/components/favoris';
import Footer from "@/components/footer";
import {Nav} from '@/components/Nav';


export default function CourseFavoris() {
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
          <div className="flex flex-col text-center ">
            <Title title={"Mes cours"} />
          </div>
        </div>
        <div className="">
            <Nav/>
        </div>
        <div className="grid  grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 sm:mx-10">
          {videos.map((video) => {
            return (
              <CardFavoris
                image={video.image}
                title={video.title}
                tutorName={video.tutor}
                status={video.status}
              />

            );
          })}
        </div>
        <div className="flex">
          <span className="mx-auto mt-[35px] "><Button title={"Explorer les cours"} bgColor={"bg-[#3DCBB1]"} /></span>
        </div>
      </div>
      <Footer />
    </>
  );
}

