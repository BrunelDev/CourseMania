"use client";
import Button from "./button";
import SearchBar from "./searchbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const [isHomeSelected, setIsHomeSelected] = useState(true);
  const [isAboutUsSelected, setIsAboutUsSelected] = useState(false);
  const [isCourseSelected, setIsCourseSelected] = useState(false);
  const [isContactSelected, setIsContactSelected] = useState(false);
  const router = useRouter();
  const turnDown = (setOn) => {
    setIsHomeSelected(false);
    setIsAboutUsSelected(false);
    setIsCourseSelected(false);
    setIsContactSelected(false);
    setOn(true);
  };
  return (
    <div className="flex w-full fixed top-0 left-0 items-center justify-between py-6 px-12 backdrop-blur-md z-50 mb-24">
      <SearchBar />
      <ul className="flex space-x-4 text-[#101828] font-medium">
        <li
          className={`${
            isHomeSelected && "text-[#1A906B]"
          } font-semibold cursor-pointer`}
          onClick={() => {
            router.push("/");
          }}
        >
          Accueil
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            turnDown(setAboutUsIsSelected);
            router.push("about-us");
          }}
        >
          A propos
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            router.push("cours");
          }}
        >
          Cours
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            router.push("contact");
          }}
        >
          Contact
        </li>
        <li
          className="cursor-pointer"
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
