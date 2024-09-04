"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useNavigationLink } from "@/lib/context";

export default function Footer() {
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
    <footer className="bg-[#101828] w-full py-8 px-8 xl:px-32">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        {/* Texte de description */}
        <div className="text-[#EAECF0] text-center md:text-left mb-6 md:mb-0">
          <span>
            Des expériences d'apprentissage de premier ordre qui créent plus de
            talents dans le monde.
          </span>
        </div>
        
        {/* Liens du footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:max-lg:grid md:max-lg:gap-3 md:max-lg:grid-cols-2 ">
          {/* Colonne 1 */}
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium text-center md:text-left">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              Produit
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Aperçu
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Fonctionnalités
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Tutoriels
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Solutions
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Tarifs
            </li>
          </ul>

          {/* Colonne 2 */}
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium text-center md:text-left">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              Entreprise
            </li>
            <li className={`${isCourseSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
            onClick={() => {
              selectLink("about-us");
              router.push("/about-us");
            }}>
              À propos
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Carrières
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Presse
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Nouvelles
            </li>
          </ul>

          {/* Colonne 3 */}
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium text-center md:text-left">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              Social
            </li>
            <li className="mb-3">
              Twitter
            </li>
            <li className="mb-3">
              LinkedIn
            </li>
            <li className="mb-3">
              GitHub
            </li>
            <li className="mb-3">
              Dribbble
            </li>
          </ul>

          {/* Colonne 4 */}
          <ul className="text-[#EAECF0] font-medium text-center md:text-left">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              Légal
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Termes
            </li>
            <li 
             className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
             onClick={() => {
               selectLink("contact");
               router.push("/contact");
                            }}>
              Confidentialité
            </li>
            <li  
              className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
              onClick={() => {
                selectLink("contact");
                router.push("/contact");
            }}>
              Cookies
            </li>
            <li className={`${isContactSelected && "text-[#1A906B] font-semibold"} mb-3 cursor-pointer`}
               onClick={() => {
                 selectLink("contact");
                 router.push("/contact");
               }}>
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Section pour le logo */}
      <div className="flex justify-center mt-6">
        <img src="logo.png" alt="Logo" className="w-24 h-auto" />
      </div>

      {/* Texte de copyright */}
      <span className="text-[#98A2B3] mt-6 block text-center">
        © 2022 Ed-Circle. Tous droits réservés.
      </span>
    </footer>
  );
}
