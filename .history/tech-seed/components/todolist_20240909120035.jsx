"use client";
import { useState, useEffect } from "react";
import { CheckboxComponent } from "@/components/checkbox";
import { getActivities } from "@/lib/functions";

export default function Todolist({ todo }) {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities().then((res) => {
      setActivities(res);
    });
  }, []);
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
    <div className="p-4">
      <span className="text-lg font-bold">A faire</span>
      {todo1.map((todo, index) => (
        <div key={index} className="mt-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center space-x-4">
              <CheckboxComponent />
              <span className="text-md font-medium">{todo.task}</span>
            </div>

            <div className="ml-8 border-b-2 pb-2 inline-block mt-2">
              <span className="pr-3 border-r-2 text-[#676767]">
                {todo.type}
              </span>
              <span className="pl-3 text-[#FE764B] font-semibold">
                {todo.hour}
              </span>
            </div>

            {todo.step &&
              todo.step.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className="flex flex-wrap items-center space-x-4 ml-10 mt-1"
                >
                  <CheckboxComponent />
                  <span>{step}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
