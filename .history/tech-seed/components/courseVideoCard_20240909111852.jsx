import React from "react";
import VideoSetting from "./videoSetting";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Filter from "@/components/filter";

export default function CourseVideoCard({ image, title, tutorName, status }) {
  const router = useRouter();

  return (
    <Link href={"paid-offline"}>
      <div className="flex flex-col relative hover:scale-105 duration-300 m-4 sm:m-5">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-md"
        />
        <span className="absolute top-2 right-2">
          <VideoSetting />
        </span>
        <div className="p-3">
          <span className="font-semibold text-lg sm:text-lg">{title}</span>
          <div className="flex items-center space-x-2 mt-1">
            <img src="personIcon.svg" alt="Person Icon" className="w-5 h-5" />
            <span className="text-[#22B286] text-sm sm:text-base">
              {tutorName}
            </span>
          </div>
          <span className="text-[#667085] text-xs sm:text-sm">{status}</span>
        </div>
      </div>
    </Link>
  );
}
