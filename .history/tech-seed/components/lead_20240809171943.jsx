"use client";
import React from "react";

export function Leaderboard({ tutors }) {
  return (
    <div>
      <div className="border-b flex  relative h-12 mb-4">
        <span className="absolute top-4 left-0">Rang</span>
        <span className="absolute top-4 left-20">Nom</span>
        <span className="absolute top-4 right-20">Cours</span>
        <span className=" absolute top-4 right-40">Durée</span>
        <span className="absolute top-4 right-[240px]">Points</span>
      </div>
      <div>
        {tutors.map((tutor) => {
          return (
            <div>
              <span>{tutor.rank}</span>
              <span className="ml-16">{tutor.name}</span>
              <span>{tutor.coursesNumber}</span>
              <span>{tutor.hours}</span>
              <span>{tutor.points}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
