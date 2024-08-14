"use client";

import React, { useState, useEffect } from "react";

export default function CourProgrammeM({ cour, bgcolor }) {
  const [courData, setCourData] = useState({
    affiche: "avatarMentor.png",
    name: "Nom inconnu",
    jourdebut: "Mon",
    jourfin: "Mon",
    timedebut: "00:00",
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
        bgcolor: bgcolor || "yellow",
      });

      setProfiles((prevProfiles) => [
        ...prevProfiles,
        { src: cour.affiche || "avatarMentor.png", alt: cour.name || "Nom inconnu" }
      ]);
    }
  }, [cour, bgcolor]);

  return (
    <div
      className="flex p-4 w-[412px] h-[80px] gap-0 rounded-[10px] m-4"
      style={{ backgroundColor: courData.bgcolor }}
    >
      <img src={courData.affiche} alt="Current Profile" className="w-11 h-11" />
      <span className="mx-8">
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
              className="w-8 h-8 rounded-full object-cover border-2 border-white m-1"
            />
          ))}
        </div>
        <time className="text-xs text-gray-500" dateTime={courData.timedebut}>
          {courData.timedebut}
        </time>
      </div>
    </div>
  );
}
