import React from "react";
import VideoSetting from "./videoSetting";

export default function CourseVideoCard({ image, title, tutorName, status }) {
  return (
    <div className="flex flex-col relative hover:scale-105 duration-300 m-5">
      <img src={image} alt="" />
      <span className="absolute top-2 right-2">
        <VideoSetting />
      </span>
      <div className="translate-x-3 mt-2">
        <span className="font-semibold text-xl translate-x-2">{title}</span>
        <div className="flex space-x-3">
          <img src="personIcon.svg" alt="" />
          <span className="text-[#22B286]">{tutorName}</span>
        </div>
        <span className="text-[#667085] text-sm">{status}</span>
      </div>
    </div>
  );
}
