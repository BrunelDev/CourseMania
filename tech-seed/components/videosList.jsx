import React from "react";
import Button from "./button";

export default function VideosList({ videos }) {
  return (
    <div className="flex flex-col md:w-[500px] h-fit shadow-[#0000000D] shadow-lg p-5 rounded-lg">
      {videos.map((video) => (
        <div className="mb-3 border-b relative">
          <span className="text-[#1B1B1B99]">{video.title}</span>
          <div className="flex space-x-2">
            <img src="playIcon.svg" alt="" />
            <span className="text-[#C5322A] text-sm">{video.duration}</span>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-5">
            <Button
              title={"Lire"}
              bgColor={"bg-[#FE416D]"}
              textColor={"text-white"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
