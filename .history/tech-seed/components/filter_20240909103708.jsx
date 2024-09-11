import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckboxComponent from "@/components/checkbox";

export default function Filter() {
  const Onglet = ({ children, title }) => {
    return (
      <Accordion type="single" collapsible className="w-[200px] sm:w-[350px]">
        <AccordionItem value="name" className="" key={"chapter.chapterName"}>
          <AccordionTrigger>
            <div className="flex flex-col pt-5 pl-5 pr-3">
              <span className="font-semibold text-[#1B1B1B]">{title}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };
  return (
    <div>
      <Onglet title={"Notes"}>
        <div className="flex flex-col m-4">
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>.5 et plus</span>
          </div>
        </div>
      </Onglet>
    </div>
  );
}
