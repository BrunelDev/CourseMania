"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLink } from "@/lib/context";
import Button from "./button";
import SearchBar from "./searchbar";
import { Connexion } from "@/components/connexion";
import { Inscription } from "@/components/Inscription";
export default function Navbar() {
  const router = useRouter();
  const {
    selectLink,
    isFaqsSelected,
    isAboutUsSelected,
    isCourseSelected,
    isContactSelected,
    isHomeSelected,
  } = useNavigationLink();

  return (
    <nav className="flex w-full fixed top-0 left-0 items-center justify-between py-6 px-12 backdrop-blur-md z-50 mb-24">
      <span className="text-2xl font-semibold">
        <span className="text-green-400">Izi</span>
        <span>Ski</span>
        <span className="text-orange-500">ll</span>
      </span>

      <SearchBar />
      <ul className="flex space-x-4 text-[#101828] font-medium">
        <li
          className={`${
            isHomeSelected && "text-[#1A906B] font-semibold"
          } cursor-pointer`}
          onClick={() => {
            selectLink("home");
            router.push("/");
          }}
        >
          Accueil
        </li>
        <li
          className={`cursor-pointer ${
            isAboutUsSelected && "text-[#1A906B] font-semibold"
          }`}
          onClick={() => {
            selectLink("about-us");
            router.push("/about-us");
          }}
        >
          A propos
        </li>
        <li
          className={`cursor-pointer ${
            isCourseSelected && "text-[#1A906B] font-semibold"
          }`}
          onClick={() => {
            selectLink("courses");
            router.push("/cours");
          }}
        >
          Cours
        </li>
        <li
          className={`cursor-pointer ${
            isContactSelected && "text-[#1A906B] font-semibold"
          }`}
          onClick={() => {
            selectLink("contact");
            router.push("/contact");
          }}
        >
          Contact
        </li>
        <li
          className={`cursor-pointer ${
            isFaqsSelected && "text-[#1A906B] font-semibold"
          }`}
          onClick={() => {
            selectLink("faqs");
            router.push("/help");
          }}
        >
          FAQs
        </li>
      </ul>
      <div className="flex items-center">
        {/*<Sign_up />*/}
        <Inscription />
        <span className="mr-4 cursor-pointer">Se connecter</span>
        <Connexion />
      </div>
    </nav>
  );
}
