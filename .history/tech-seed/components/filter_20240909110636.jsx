import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion2";
import CheckboxComponent from "@/components/checkbox";
import { Rating } from "@mui/material";

export default function Filter() {
  const Onglet = ({ children, title }) => {
    return (
      <div className="py-3 border-t border-t-gray-200 border-b border-b-gray-200">
        <Accordion type="single" collapsible className="w-[200px] sm:w-[300px]">
          <AccordionItem
            value="name"
            className="bg-white"
            key={"chapter.chapterName"}
          >
            <AccordionTrigger>
              <div className="flex flex-col pt-5 pl-5 pr-3">
                <span className="font-semibold text-[#1B1B1B]">{title}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="bg-white">{children}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
  return (
    <div className="w-fit bg-white shadow-md flex flex-col justify-center items-center">
      <Onglet title={"Notes"}>
        <div className="flex flex-col p-4">
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>4.5 et plus</span>
            <Rating name="read-only" value={4.5} readOnly precision={0.5} />
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>3.5 et plus</span>
            <Rating name="read-only" value={3.5} readOnly precision={0.5} />
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>3 et plus</span>
            <Rating name="read-only" value={3} readOnly precision={0.5} />
          </div>
        </div>
      </Onglet>
      <Onglet title={"Durée"}>
        <div className="flex flex-col p-4">
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>0 à 2heures</span>
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>3 à 5heures</span>
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>6 à 12heures</span>
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>Plus de 12heures</span>
          </div>
        </div>
      </Onglet>
      <Onglet title={"Difficulté"}>
        <div className="flex flex-col p-4">
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>Débutant</span>
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>Intermédiaire</span>
          </div>
          <div className="flex space-x-2">
            <CheckboxComponent />
            <span>Avancé</span>
          </div>
        </div>
      </Onglet>
    </div>
  );
}
