"use client";
import Button from "./button";
import SearchBar from "./searchbar";
import Router from "next/router";
export default function Navbar() {
  return (
    <div className="flex w-full fixed top-0 left-0 items-center justify-between py-6 px-12 backdrop-blur-md z-50 mb-24">
      <SearchBar />
      <ul className="flex space-x-4 text-[#101828] font-medium">
        <li className="text-[#1A906B] font-semibold">Accueil</li>
        <li
          onClick={() => {
            Router.push("about-us");
          }}
        >
          A propos
        </li>
        <li>Cours</li>
        <li>Contact</li>
        <li>FAQs</li>
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
