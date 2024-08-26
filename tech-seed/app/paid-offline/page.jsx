"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { ChapterList } from "@/components/chaptersList";
import Footer from "@/components/footer";
import Description from "@/components/description";
import Title from "@/components/title";
import VideosList from "@/components/videosList";
import VideoPlayer from "@/components/videoPlayer";
import { useNavigation } from "@/lib/context";
export default function PaidOffline() {
  const chapters = [
    {
      chapterName: "chapter 1: Course Overview",
      totalDuration: "28m",
      quantity: "1/12 Videos",
      content: [
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
      ],
    },
    {
      chapterName: "chapter 2: Course Overview",
      totalDuration: "28m",
      quantity: "1/12 Videos",
      content: [
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
      ],
    },
    {
      chapterName: "chapter 3: Course Overview",
      totalDuration: "28m",
      quantity: "1/12 Videos",
      content: [
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
      ],
    },
    {
      chapterName: "chapter 4: Course Overview",
      totalDuration: "28m",
      quantity: "1/12 Videos",
      content: [
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
      ],
    },
    {
      chapterName: "chapter 5: Course Overview",
      totalDuration: "28m",
      quantity: "1/12 Videos",
      content: [
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
        { title: "Vue Templating", duration: "12m" },
      ],
    },
  ];

  const {
    isCoursesSelected,
    isDescriptionSelected,
    isReviewSelected,
    navigate,
  } = useNavigation();
  return (
    <div>
      <div className="mb-24">
        <Navbar />
      </div>
      <div className="mx-14 mb-10">
        <div className="flex flex-col space-y-3">
          <Description description={"Development/Mobile Engineer"} />
          <Title title={"Make Uber Clone App"} />
          <div className="flex">
            <span className="text-[#C5322A] mr-6">Steeve Dossou</span>
            <img src="star.svg" alt="" />
            <span>4.8</span>
            <span>(1.832 notes)</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-fit relative">
              <VideoPlayer />
              {/*<img src="computerScreen.png" alt="" />
              <img
                src="triangleLeft.svg"
                alt=""
                className="absolute left-1/2 top-1/2"
              />*/}
            </div>
            <div className="flex flex-col">
              <Title title={"Chapter 1 : Preparations"} />
              <div>
                <Description description={"6 Lectures"} />
                <span className="text-yellow-400 ml-5">12% Completed</span>
              </div>

              <VideosList
                videos={[
                  { title: "Installing Vue JS", duration: "10m" },
                  { title: "Installing Vue JS", duration: "10m" },
                  { title: "Installing Vue JS", duration: "10m" },
                  { title: "Installing Vue JS", duration: "10m" },
                  { title: "Installing Vue JS", duration: "10m" },
                ]}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex space-x-2 w-fit">
          <span
            className={`cursor-pointer ${
              isDescriptionSelected ? "border-b-2 border-[#3DCBB1]" : null
            }`}
            onClick={() => {
              navigate("description");
            }}
          >
            Description
          </span>
          <span
            className={`cursor-pointer ${
              isCoursesSelected ? "border-b-2 border-[#3DCBB1]" : null
            }`}
            onClick={() => {
              navigate("courses");
            }}
          >
            Cours
          </span>
          <span
            className={`cursor-pointer ${
              isReviewSelected ? "border-b-2 border-[#3DCBB1]" : null
            }`}
            onClick={() => {
              navigate("review");
            }}
          >
            Commentaires
          </span>
        </div>
        {isCoursesSelected ? (
          <div className="rounded-xl overflow-hidden border w-fit mt-10">
            <ChapterList chapters={chapters} />
          </div>
        ) : isDescriptionSelected ? (
          <span>description</span>
        ) : isReviewSelected ? (
          <span>Review</span>
        ) : null}
      </div>

      <Footer />
    </div>
  );
}
