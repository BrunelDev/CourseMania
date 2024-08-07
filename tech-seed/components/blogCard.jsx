import React from "react";
import Tag from "./tag";
export default function BlogCard({ image, date, title, description, tagList }) {
  return (
    <div className="flex">
      <img src={image} alt="" className="float-left " />
      <div className="w-1/3 flex flex-col ml-10">
        <span className="text-[#20B486] font-semibold">{date}</span>
        <span className="text-[#101828] font-semibold text-2xl my-3">
          {title}
        </span>
        <span className="text-[#667085] font-semibold">{description}</span>
        <div className="my-3">
          {tagList.map((tag, index) => {
            return (
              <Tag
                title={tag[0]}
                textColor={tag[1]}
                bgColor={tag[2]}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
