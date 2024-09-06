"use client";

import React, { useState, useEffect } from "react";

export default function AllCours({ cour }) {
  const [courData, setCourData] = useState({
    affiche: "affichecour.png",
    name: "Nom inconnu",
    auteurname: "No name",
    auteurprofil: "avatarMentor.png"
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
    <div className="flex p-4 w-[394px] h-[150px] gap-4 rounded-[10px] m-4 bg-white shadow-[0px_9px_44px_0px_#AEAEAE33]">
      <img src={courData.affiche} alt="Affiche du cours" className="w-1/3 h-full object-cover rounded-[10px]" />
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-semibold text-[20px] leading-[28px] text-left text-[#161736] whitespace-normal">
          {courData.name}
        </h3>
        <div className="flex items-center mt-2">
          <img src={courData.auteurprofil} alt="Auteur" className="w-[32px] h-[32px] rounded-full mr-2" />
          <h3 className="font-medium text-[18px] leading-[24px] text-left text-[#A5B4CB]">
            {courData.auteurname}
          </h3>
        </div>
      </div>
    </div>
  );
}
