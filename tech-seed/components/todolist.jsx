"use client";
import { useState } from "react";

export default function Todolist({ todo }) {
  const todo1 = [
    {
      task: "Developping Restaurant App",
      type: "Programming",
      hour: "08:00 AM",
      step: ["Integrate API", "Slicing Home Screen"],
    },
  ];

  return (
    <div>
      <span>A faire</span>
      {todo1.map((todo) => {
        <div>
          <div className="flex space-x-3">
            <div className="border-2 h-1 w-1"></div>
            <span>{todo.task}</span>
            <div>
              <div>
                <span>{todo.type}</span>
                <span>{todo.hour}</span>
              </div>
              {todo.step &&
                todo.step.map((step) => {
                  <div>
                    <div className="h-1 w-1 rounded-sm"></div>
                    <span>{step}</span>
                  </div>;
                })}
            </div>
          </div>
        </div>;
      })}
    </div>
  );
}
