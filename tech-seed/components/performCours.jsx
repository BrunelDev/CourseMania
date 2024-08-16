"use client";

import React, { useState, useEffect } from "react";

export default function PerformCours({ cour }) {
  const [courData, setCourData] = useState({
    affiche: "affichecour.png",
    name: "Nom inconnu",
    auteurname: "No name",
    auteurprofil: "avatarMentor.png",
  });

  useEffect(() => {
    if (cour) {
      setCourData({
        affiche: cour.affiche || "avatarMentor.png",
        name: cour.name || "Nom inconnu",
        auteurname: cour.auteurname || "No name",
        auteurprofil: cour.auteurprofil || "avatarMentor.png",
      });
    }
  }, [cour]);

  return (
    <div className="flex w-[256px] h-[40px] gap-4 rounded-lg m-4 bg-white shadow-md items-center">
      <img src={courData.affiche} alt="Affiche du cours" className="w-10 h-10 object-cover rounded-lg" />
      <div className="flex flex-col justify-between">
        <h3 className="font-gilroy text-sm leading-4 text-left text-[#161736] whitespace-nowrap overflow-hidden text-ellipsis">
          {courData.name}
        </h3>
        <div className="flex items-center mt-1">
          <img src={courData.auteurprofil} alt="Auteur" className="w-2.5 h-2.5 rounded-full mr-2" />
          <h3 className="font-gilroy text-xs leading-3 text-left text-[#7D8DA6]">
            {courData.auteurname}
          </h3>
        </div>
      </div>
      <img src="graphic.png" alt="Graphique" className="w-[33px] h-[14px] ml-[55px] " />
    </div>
  );
}
