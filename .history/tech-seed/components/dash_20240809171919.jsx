"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TutorCourseCard from "@/components/tutorCourseCard";
import { ChartComponent } from "@/components/chart";
import { Leaderboard } from "@/components/leaderboard";
export function Dashboard() {
  const tutors = [
    {
      rank: "1",
      name: "Charlie Rawal",
      coursesNumber: "53",
      hours: "250",
      points: "13.450",
    },
    {
      rank: "1",
      name: "Charlie Rawal",
      coursesNumber: "53",
      hours: "250",
      points: "13.450",
    },
    {
      rank: "1",
      name: "Charlie Rawal",
      coursesNumber: "53",
      hours: "250",
      points: "13.450",
    },
    {
      rank: "1",
      name: "Charlie Rawal",
      coursesNumber: "53",
      hours: "250",
      points: "13.450",
    },
  ];
  return (
    <>
      <div className="mb-24">
        <Navbar />
      </div>
      <div className="px-10">
        <div className="grid grid-cols-3 w-[70%]">
          <TutorCourseCard
            style={"bg-[#E1E2F6]"}
            title={"Basic: KTML and CSS"}
            icon="codingIcon.svg"
            stats={{
              finishedCourses: "20",
              programmedCourses: "7",
              students: "99",
            }}
          />
          <TutorCourseCard
            style={"bg-[#E1E2F6]"}
            title={"Basic: KTML and CSS"}
            icon="codingIcon.svg"
            stats={{
              finishedCourses: "20",
              programmedCourses: "7",
              students: "99",
            }}
          />
          <TutorCourseCard
            style={"bg-[#E1E2F6]"}
            title={"Basic: KTML and CSS"}
            icon="codingIcon.svg"
            stats={{
              finishedCourses: "20",
              programmedCourses: "7",
              students: "99",
            }}
          />
        </div>
        <div>
          <div className="w-[50%] space-y-6">
            <span className="font-semibold text-2xl">Heures Totales</span>
            <ChartComponent />
          </div>
          <div></div>
        </div>
        <div>
          <Leaderboard tutors={tutors} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
