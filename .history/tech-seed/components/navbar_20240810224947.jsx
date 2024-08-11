"use client";
import Button from "./button";
import SearchBar from "./searchbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLink } from "@/lib/context";
export default function Navbar() {
  const router = useRouter();
  const {
    turnDown,
    isAboutUsSelected,
    isCourseSelected,
    isContactSelected,
    isHomeSelected,
    isHomeSelectedx,
  } = useNavigationLink();
  return (
    <div className="flex w-full fixed top-0 left-0 items-center justify-between py-6 px-12 backdrop-blur-md z-50 mb-24">
      <SearchBar />
      <ul className="flex space-x-4 text-[#101828] font-medium">
        <li
          className={`${
            isHomeSelectedx && "text-[#1A906B]"
          } font-semibold cursor-pointer`}
          onClick={() => {
            turnDown(isHomeSelected);
            router.push("/");
          }}
        >
          Accueil
        </li>
        <li
          className={`cursor-pointer ${isAboutUsSelected && "text-[#1A906B]"}`}
          onClick={() => {
            turnDown(isAboutUsSelected);
            router.push("about-us");
          }}
        >
          A propos
        </li>
        <li
          className={`cursor-pointer ${isCourseSelected && "text-[#1A906B]"}`}
          onClick={() => {
            turnDown(setIsCourseSelected);
            router.push("cours");
          }}
        >
          Cours
        </li>
        <li
          className={`cursor-pointer ${isContactSelected && "text-[#1A906B]"}`}
          onClick={() => {
            turnDown(setIsContactSelected);
            router.push("contact");
          }}
        >
          Contact
        </li>
        <li
          className={`cursor-pointer ${isHomeSelected && "text-[#1A906B]"}`}
          onClick={() => {
            router.push("/");
          }}
        >
          FAQs
        </li>
      </ul>
      <div>
        <span className="mr-4">Sign in</span>
        <Button
          action={() => {}}
          title={"Créer un compte gratuitement"}
          bgColor={"bg-[#20B486]"}
          textColor={"text-white"}
        />
      </div>
    </div>
  );
}
