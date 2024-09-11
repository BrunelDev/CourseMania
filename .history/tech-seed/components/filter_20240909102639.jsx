import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckboxComponent from "@/components/checkbox";

export default function Filter() {
  const Onglet = (children) => {
    return (
      <Accordion type="single" collapsible className="w-full sm:w-[500px]">
        <AccordionItem value={"name"} className="" key={"chapter.chapterName"}>
          <AccordionTrigger>
            <div className="flex flex-col pt-5 pl-5 pr-3">
              <span className="font-semibold text-[#1B1B1B] text-lg">
                {"Notes"}
              </span>
              <div className="flex">
                <span className="mr-3 text-[#1B1B1B99]">
                  {"chapter.quantity"}
                </span>

                <span className="text-[#C5322A]">
                  {"chapter.totalDuration"}
                </span>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>{"children"}</AccordionContent>
        </AccordionItem>
        );
      </Accordion>
    );
  };
  return (
    <div>
      <Onglet>
        <div>
          <div>
            <CheckboxComponent label="Voir uniquement les vidéos" />
            .5 et plus
          </div>
        </div>
      </Onglet>
    </div>
  );
}
