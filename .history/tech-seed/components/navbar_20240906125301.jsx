"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLink } from "@/lib/context";
import Button from "./button";
import SearchBar from "./searchbar";
import { Connexion } from "@/components/connexion";
import { Inscription } from "@/components/Inscription";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // État d'authentification
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // Pour le pop-up de déconnexion
  const router = useRouter();
  const {
    selectLink,
    isFaqsSelected,
    isAboutUsSelected,
    isCourseSelected,
    isContactSelected,
    isHomeSelected,
  } = useNavigationLink();

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    setIsAuthenticated(false); // Simule la déconnexion
    setShowLogoutPopup(false); // Ferme le pop-up
  };

  return (
    <nav className="flex w-full fixed top-0 left-0 items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-12 backdrop-blur-md z-50 mb-24">
      {/* Logo */}
      <span className="text-lg sm:text-xl md:text-2xl font-semibold">
        <span className="text-green-400">Izi</span>
        <span>Ski</span>
        <span className="text-orange-500">ll</span>
      </span>

      {/* Barre de recherche */}
      <div className="flex flex-1 justify-center w-[200px] md:max-w-[800px]">
        <SearchBar className="" />
      </div>

      {/* Liste de navigation */}
      <ul className="hidden xl:flex space-x-6 items-center ml-4">
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
          className={`${
            isAboutUsSelected && "text-[#1A906B] font-semibold"
          } cursor-pointer`}
          onClick={() => {
            selectLink("about-us");
            router.push("/about-us");
          }}
        >
          A propos
        </li>
        <li
          className={`${
            isCourseSelected && "text-[#1A906B] font-semibold"
          } cursor-pointer`}
          onClick={() => {
            selectLink("courses");
            router.push("/cours");
          }}
        >
          Cours
        </li>
        <li
          className={`${
            isContactSelected && "text-[#1A906B] font-semibold"
          } cursor-pointer`}
          onClick={() => {
            selectLink("contact");
            router.push("/contact");
          }}
        >
          Contact
        </li>
        <li
          className={`${
            isFaqsSelected && "text-[#1A906B] font-semibold"
          } cursor-pointer`}
          onClick={() => {
            selectLink("faqs");
            router.push("/help");
          }}
        >
          FAQs
        </li>
      </ul>

      {/* Boutons de connexion / déconnexion */}
      <div className="xl:block flex items-center space-x-4">
        {isAuthenticated ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setShowLogoutPopup(true)}
          >
            Déconnexion
          </button>
        ) : (
          <>
            <Inscription />
            <Connexion />
          </>
        )}
      </div>

      {/* Bouton hamburger pour les petits écrans */}
      <button
        className="xl:hidden p-2 focus:outline-none"
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
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menu pour les petits écrans */}
      <ul
        className={`flex ${
          isMenuOpen ? "flex" : "flex"
        } xl:flex-col xl:hidden w-full absolute top-16 left-0 bg-white p-4 space-y-4`}
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
        {isAuthenticated ? (
          <li className="mt-4 flex items-center">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setShowLogoutPopup(true)}
            >
              Déconnexion
            </button>
          </li>
        ) : (
          <li className="mt-4 flex flex-col items-center space-y-4">
            <Inscription />
            <Connexion />
          </li>
        )}
      </ul>

      {/* Pop-up de confirmation de déconnexion */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Voulez-vous vraiment vous déconnecter ?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Oui
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowLogoutPopup(false)}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
