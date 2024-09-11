import React from "react";
import { ChapterList } from "@/components/chaptersList";

export default function Filter() {
  const ChapterList = ({ chapters }) => {
    return (
      <Accordion type="single" collapsible className="w-full sm:w-[500px]">
        {chapters.map((chapter) => {
          return (
            <AccordionItem
              value={chapter.chapterName}
              className=""
              key={chapter.chapterName}
            >
              <AccordionTrigger>
                <div className="flex flex-col pt-5 pl-5 pr-3">
                  <span className="font-semibold text-[#1B1B1B] text-lg">
                    {chapter.chapterName}
                  </span>
                  <div className="flex">
                    <span className="mr-3 text-[#1B1B1B99]">
                      {chapter.quantity}
                    </span>

                    <span className="text-[#C5322A]">
                      {chapter.totalDuration}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>

              {chapter.content.map((content) => (
                <AccordionContent>
                  <div className="pl-5">
                    <span>{content.title}</span>

                    <div className="flex">
                      <img
                        src="playIcon.svg"
                        alt=""
                        className="mr-3 w-[20px]"
                      />
                      <span className="text-[#C5322A]">{content.duration}</span>
                    </div>
                  </div>
                </AccordionContent>
              ))}
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  };
  return <div></div>;
}
