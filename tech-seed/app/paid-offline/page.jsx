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
      chapterName: "Chapitre 1 : Présentation du Cours",
      totalDuration: "28m",
      quantity: "1/12 Vidéos",
      content: [
        { title: "Introduction à Vue.js", duration: "12m" },
        { title: "Configurer Vue.js", duration: "12m" },
        { title: "Vue.js : Templating", duration: "12m" },
        { title: "Vue.js : Composants", duration: "12m" },
        { title: "Vue.js : Directives", duration: "12m" },
      ],
    },
    {
      chapterName: "Chapitre 2 : Vue.js Avancé",
      totalDuration: "35m",
      quantity: "3/10 Vidéos",
      content: [
        { title: "Cycle de Vie des Composants", duration: "15m" },
        { title: "Vue Router", duration: "10m" },
        { title: "Vuex : Gestion d'État", duration: "10m" },
      ],
    },
    {
      chapterName: "Chapitre 3 : Projets Pratiques",
      totalDuration: "45m",
      quantity: "2/5 Vidéos",
      content: [
        { title: "Création d'une App Vue.js", duration: "20m" },
        { title: "Intégration d'une API", duration: "25m" },
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
      <div className="mx-4 md:mx-14 mb-10">
        <div className="flex flex-col space-y-3">
          <Description description={"Développeur Mobile/Ingénieur"} />
          <Title title={"Créer une Application Clone d'Uber"} />
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
              <Title title={"Chapitre 1 : Préparations"} />
              <div>
                <Description description={"6 Lectures"} />
                <span className="text-yellow-400 ml-5">12% Terminé</span>
              </div>

              <VideosList
                videos={[
                  { title: "Installation de Vue.js", duration: "10m" },
                  { title: "Architecture de Vue.js", duration: "10m" },
                  { title: "Composants Vue.js", duration: "10m" },
                  { title: "Vue Router", duration: "10m" },
                  { title: "Utilisation de Vuex", duration: "10m" },
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
          <div className="rounded-xl overflow-hidden border sm:w-fit mt-10">
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
