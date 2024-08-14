import React from "react";

export default function TeacherCard({ avatar, name, profession, description }) {
  return (
    <div className="bg-[#F9FAFB] flex flex-col justify-center items-center w-[300px] p-6">
      <img src="profAvatar1.png" alt="" />
      <span className="text-center text-[#101828] font-medium mt-3">
        Theresa Webb
        {/*{name}*/}
      </span>
      <span className="text-center text-[#22B286] my-2">
        Application Support Analyst Lead
        {/*{profession}*/}
      </span>
      <span className="text-center text-[#667085]">
        Ancien co-fondateur d'Opendoor. Premiers employés de Spotify et
        Clearbit.
        {/*{description}*/}
      </span>
      <div className="flex mt-3">
        <img src="twitterIcon.svg" alt="" className="mr-4 cursor-pointer" />
        <img src="linkedinIcon.svg" alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}
