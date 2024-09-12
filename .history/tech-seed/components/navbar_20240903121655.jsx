"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLink } from "@/lib/context";
import Button from "./button";
import SearchBar from "./searchbar";
import { Connexion } from "@/components/connexion";

import { Sign_up } from "@/components/sign-up";
import { Inscription } from "@/components/Inscription";
import { isLoggedIn, logOut } from "@/lib/functions";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();
  const {
    selectLink,
    isFaqsSelected,
    isAboutUsSelected,
    isCourseSelected,
    isContactSelected,
    isHomeSelected,
  } = useNavigationLink();
  const [isLogged, setIsLogged] = useState(isLoggedIn());
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/");
    }
  });
  return (
    <nav className="flex w-full fixed top-0 left-0 items-center justify-between py-4 px-6 sm:px-12 backdrop-blur-md z-50 mb-24">
      <span className="text-xl sm:text-2xl font-semibold">
        <span className="text-green-400">Izi</span>
        <span>Ski</span>
        <span className="text-orange-500">ll</span>
      </span>

      <div className="flex items-center space-x-4">
        <SearchBar className="hidden md:block" />
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:space-x-4 text-[#101828] font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
      >
        <li
          className={`${
            isHomeSelected && "text-[#1A906B] font-semibold"
          } cursor-pointer`}
          onClick={() => {
            selectLink("home");
            router.push("/");
            setIsMenuOpen(false);
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
            setIsMenuOpen(false);
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
            setIsMenuOpen(false);
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
            setIsMenuOpen(false);
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
            setIsMenuOpen(false);
          }}
        >
          FAQs
        </li>
        <li className="mt-4 md:mt-0 flex md:hidden items-center">
          <span className="mr-4 cursor-pointer">Sign in</span>
          <Connexion
            button={
              <Button
                action={() => {}}
                title={"Créer un compte gratuitement"}
                bgColor={"bg-[#20B486]"}
                textColor={"text-white"}
              />
            }
          />
        </li>
      </ul>
      <div className="flex items-center">
        {/*<Sign_up />*/}
        {isLogged ? (
          <span
            className="cursor-pointer"
            onClick={() => {
              logOut();

              window.location.reload(true);
            }}
          >
            Deconnexion
          </span>
        ) : (
          <div>
            <Inscription />
            <Connexion />
          </div>
        )}
      </div>
    </nav>
  );
}
