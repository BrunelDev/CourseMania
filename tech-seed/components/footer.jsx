import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#101828] w-full py-8 px-8 md:px-32">
      <div className="flex flex-col md:flex-row">
        <span className="w-full md:w-1/3 text-[#EAECF0] mb-6 md:mb-0">
          Des expériences d'apprentissage de premier ordre qui créent plus de
          talents dans le monde.
        </span>
        <div className="flex flex-col md:flex-row text-[#EAECF0] justify-between w-full">
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              <a href="#">Product</a>
            </li>
            <li className="mb-3">
              <a href="#">Aperçu</a>
            </li>
            <li className="mb-3">
              <a href="#">Fonctionnalités</a>
            </li>
            <li className="mb-3">
              <a href="#">Tutoriels</a>
            </li>
            <li className="mb-3">
              <a href="#">Solutions</a>
            </li>
            <li className="mb-3">
              <a href="#">Tarifs</a>
            </li>
          </ul>
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              <a href="#">Company</a>
            </li>
            <li className="mb-3">
              <a href="#">À propos</a>
            </li>
            <li className="mb-3">
              <a href="#">Carrières</a>
            </li>
            <li className="mb-3">
              <a href="#">Presse</a>
            </li>
            <li className="mb-3">
              <a href="#">Nouvelles</a>
            </li>
          </ul>
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              <a href="#">Social</a>
            </li>
            <li className="mb-3">
              <a href="#">Twitter</a>
            </li>
            <li className="mb-3">
              <a href="#">LinkedIn</a>
            </li>
            <li className="mb-3">
              <a href="#">GitHub</a>
            </li>
            <li className="mb-3">
              <a href="#">Dribbble</a>
            </li>
          </ul>
          <ul className="text-[#EAECF0] font-medium">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              <a href="#">Légal</a>
            </li>
            <li className="mb-3">
              <a href="#">Termes</a>
            </li>
            <li className="mb-3">
              <a href="#">Confidentialité</a>
            </li>
            <li className="mb-3">
              <a href="#">Cookies</a>
            </li>
            <li className="mb-3">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <span className="text-[#98A2B3] mt-6 block text-center md:text-left">
        © 2022 Ed-Circle. Tous droits réservés.
      </span>
    </footer>
  );
}
