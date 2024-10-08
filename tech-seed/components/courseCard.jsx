import React from "react";
import DurationBox from "./durationBox";
import { Rating } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

export default function CourseCard({
  duration,
  image,
  theme,
  title,
  description,
  rating,
  rateNumber,
  mentorName,
  mentorPicture,
  price,
  mentorStartingDate,
}) {
  return (
    <div className="flex flex-col justify-center px-6 shadow-lg shadow-[#D8D8D8] rounded-lg w-fit py-6">
      <div className="relative mb-8">
        <DurationBox duration={"08hr12mins"} />
        <img src={image} alt="" className="w-[336px] h-[240px]" />
      </div>
      <h6 className="text-[#1A906B]">Design</h6>
      <div className="font-bold text-2xl my-3 text-[#101828] flex justify-between">
        {title}
        <ArrowUpRight />
      </div>
      <p className="w-[290px] text-[#667085]">{description}</p>
      <div className="flex">
        <span className="text-[#3FC89E] text-sm mr-3 my-4">4.3</span>
        <Rating name="read-only" value={rating} readOnly precision={0.5} />

        <span className="text-[#667085] text-sm ml-3 my-4">(16.500)</span>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <img src={mentorPicture} alt="" className="mr-4 w-[40px] h-[40px]" />
          <div className="flex flex-col text-sm">
            <span className="text-[#101828]">{mentorName}</span>
            <span className="text-[#667085]">2001 Enrolled</span>
          </div>
        </div>
        <span className="text-[#3FC89E] font-bold text-xl">{price}FCFA</span>
      </div>
    </div>
  );
}
