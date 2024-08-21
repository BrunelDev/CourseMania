"use client";

import React, { useState, useEffect } from "react";

export default function CourProgrammeM({ cour, bgcolor, daySpan = 1, hourSpan = 1 }) {
  const [courData, setCourData] = useState({
    affiche: "avatarMentor.png",
    name: "Nom inconnu",
    jourdebut: "Mon",
    jourfin: "Mon",
    timedebut: "00:00",
    timefin: "00:00",
    bgcolor: bgcolor || "yellow",
  });

  const [profiles, setProfiles] = useState([
    {
      src: "profilcal.png",
      alt: "profil1"
    },
    {
      src: "profilcal.png",
      alt: "profil2"
    }
  ]);

  useEffect(() => {
    if (cour) {
      setCourData({
        affiche: cour.affiche || "avatarMentor.png",
        name: cour.name || "Nom inconnu",
        jourdebut: cour.jourdebut || "Mon",
        jourfin: cour.jourfin || "Mon",
        timedebut: cour.timedebut || "00:00",
        timefin: cour.timefin || "00:00",
        bgcolor: cour.bgcolor || bgcolor || "yellow", // Prioritize cour.bgcolor if provided
      });

      setProfiles((prevProfiles) => {
        const newProfile = { src: cour.affiche || "avatarMentor.png", alt: cour.name || "Nom inconnu" };
        return [...prevProfiles, newProfile];
      });
    }
  }, [cour, bgcolor]);

  // Calcul de la largeur et de la hauteur en fonction des jours et des heures
  const width = 100 * daySpan;
  const height = 80 * hourSpan;

  return (
    <div
      className="flex p-4 gap-0 rounded-[10px] m-4"
      style={{ backgroundColor: courData.bgcolor, width: `${width}px`, height: `${height}px` }}
    >
      <img src={courData.affiche} alt="Current Profile" className="w-11 h-11" />
      <span className="mx-8 flex-1">
        <h3 className="text-lg font-semibold">{courData.name}</h3>
        <p className="text-sm text-gray-500">
          {courData.jourdebut} - {courData.jourfin}
        </p>
      </span>
      <div className="flex flex-col ml-auto space-y-1">
        <div className="flex items-center -space-x-2 overflow-hidden">
          {profiles.map((profile, index) => (
            <img
              key={index}
              src={profile.src}
              alt={profile.alt}
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
          ))}
        </div>
        <time className="text-xs text-gray-500" dateTime={courData.timedebut}>
          {courData.timedebut} - {courData.timefin}
        </time>
      </div>
    </div>
  );
}
