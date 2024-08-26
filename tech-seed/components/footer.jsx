import React from "react";

export default function Footer() {
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
              <a href="#">Produit</a>
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

          {/* Colonne 2 */}
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium text-center md:text-left">
            <li className="text-[#98A2B3] mb-3 font-semibold">
              <a href="#">Entreprise</a>
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

          {/* Colonne 3 */}
          <ul className="mb-6 md:mb-0 text-[#EAECF0] font-medium text-center md:text-left">
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

          {/* Colonne 4 */}
          <ul className="text-[#EAECF0] font-medium text-center md:text-left">
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
