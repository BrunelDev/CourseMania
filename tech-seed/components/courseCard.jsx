import React from "react";
import DurationBox from "./durationBox";
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
        <div className="absolute top-2 right-2">
          <DurationBox duration={"08hr12mins"} />
        </div>
        <img src={image} alt="" className="w-[336px] h-[240px]" />
      </div>
      <h6 className="text-[#1A906B]">Design</h6>
      <div className="font-bold text-2xl my-3 text-[#101828] flex justify-between">
        Building User Interface..
        <ArrowUpRight />
      </div>
      <p className="w-[290px] text-[#667085]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        delectus distinctio commodi sequi laboriosam inventore qui esse in natus
        cupiditate culpa ullam labore recusandae dolore illo, obcaecati nesciunt
        quisquam optio!
      </p>
      <div className="flex">
        <span className="text-[#3FC89E] text-sm mr-3 my-4">4.3</span>
        <img src="star.svg" alt="" />
        <img src="star.svg" alt="" />
        <img src="star.svg" alt="" />
        <img src="star.svg" alt="" />
        <img src="star.svg" alt="" />
        <span className="text-[#667085] text-sm ml-3 my-4">(16.500)</span>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src="mentorAvatar.png"
            alt=""
            className="mr-4 w-[40px] h-[40px]"
          />
          <div className="flex flex-col text-sm">
            <span className="text-[#101828]">Jane Cooper</span>
            <span className="text-[#667085]">2001 Enrolled</span>
          </div>
        </div>
        <span className="text-[#3FC89E] font-bold text-xl">17.000FCFA</span>
      </div>
    </div>
  );
}
