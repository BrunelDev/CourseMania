import React from "react";
import Tag from "./tag";

export default function BlogCard({ image, date, title, description, tagList }) {
  return (
    <div className="flex overflow-auto">
      <img
        src={image}
        alt={title}
        className="float-left rounded-lg object-cover w-1/3"
      />
      <div className="flex flex-col ml-10 w-full">
        <span className="text-[#20B486] font-semibold">{date}</span>
        <span className="text-[#101828] font-semibold text-2xl my-3">
          {title}
        </span>
        <span className="text-[#667085]">{description}</span>
        <div className="my-3 flex flex-wrap gap-2">
          {tagList.map((tag, index) => (
            <Tag
              title={tag[0]}
              textColor={tag[1]}
              bgColor={tag[2]}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
