"use client";
import { useState } from "react";
import { CheckboxComponent } from "@/components/checkbox";
import { getActivities } from "@/lib/functions";

export function Todolist({ todo }) {
  const todo1 = [
    {
      task: "Developping Restaurant App",
      isFinished: true,
      type: "Programming",
      hour: "08:00 AM",
      step: ["Integrate API", "Slicing Home Screen"],
    },
    {
      task: "Developping Restaurant App",
      isFinished: true,
      type: "Programming",
      hour: "08:00 AM",
      step: ["Integrate API", "Slicing Home Screen"],
    },
  ];

  return (
    <div>
      <span>A faire</span>
      {todo1.map((todo) => {
        return (
          <div>
            <div>
              <div className="flex flex-col">
                <div className="flex text-nowrap space-x-4">
                  <CheckboxComponent />
                  <span>{todo.task}</span>
                </div>

                <div>
                  <div className="ml-8 border-b-2 pb-2 inline-block">
                    <span className="pr-3 border-r-2 text-[#676767]">
                      {todo.type}
                    </span>
                    <span className="pl-3 text-[#FE764B] font-semibold">
                      {todo.hour}
                    </span>
                  </div>
                  {todo.step &&
                    todo.step.map((step) => {
                      return (
                        <div className="flex space-x-4 ml-10 mt-1">
                          <CheckboxComponent />
                          <span>{step}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
