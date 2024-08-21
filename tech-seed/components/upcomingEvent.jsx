"use client";

import React, { useState, useEffect } from "react";
import { Menu } from '@headlessui/react'; // Utilisation de Headless UI pour le menu hamburger

export default function UpcomingEvent({ cour }) {
  const [courData, setCourData] = useState({
    affiche: "affichecour.png",
    name: "Nom inconnu",
    domaine: "Domaine",
    timedebut: "00:00"
  });

  useEffect(() => {
    if (cour) {
      setCourData({
        affiche: cour.affiche || "avatarMentor.png",
        name: cour.name || "Nom inconnu",
        domaine: cour.domaine || "Domaine",
        timedebut: cour.timedebut || "00:00"
      });
    }
  }, [cour]);

  return (
    <div className="relative p-4 w-full h-[62px] gap-4 rounded-[10px] m-4 bg-[#A5B4CB33] shadow-md flex items-center">
      {/* Menu Hamburger */}
      <Menu as="div" className="absolute top-2 right-2">
        <Menu.Button className="text-gray-500 focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16"
            />
          </svg>
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active ? 'bg-gray-100' : ''
                } block px-4 py-2 text-sm text-gray-700`}
                href="#"
              >
                Option 1
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active ? 'bg-gray-100' : ''
                } block px-4 py-2 text-sm text-gray-700`}
                href="#"
              >
                Option 2
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <img src={courData.affiche} alt="Affiche du cours" className="w-[44px] h-[44px] object-cover rounded-[10px]" />
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-semibold text-[14px] leading-[16.41px] text-[#161736]">
          {courData.name}
        </h3>
        <ul className="mt-2 flex space-x-4">
          <li className="flex items-center text-sm text-gray-500 before:content-['•'] before:mr-2">
            {courData.domaine}
          </li>
          <li className="flex items-center text-xs text-gray-500 before:content-['•'] before:mr-2">
            <time dateTime={courData.timedebut}>{courData.timedebut}</time>
          </li>
        </ul>
      </div>
    </div>
  );
}
