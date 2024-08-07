import React from "react";
import Navbar from "../components/navbar";
import CourseCard from "../components/courseCard";
import ThemeCard from "../components/themeCard";
import StatsBox from "../components/statsBox";
export default function Home() {
  return (
    <main className="bg-[#24bb8b05]">
      <header className="mb-24">
        <Navbar />
      </header>
      <div className="px-[110px]">
        <div className="flex flex-row justify-between">
          <div className="text-5xl font-bold text-[#101828] w-1/2">
            <img
              src="spiral.svg"
              alt=""
              className="absolute left-0 w-[350px] h-[350px]"
            />
            <p className="translate-y-10">
              Améliorez vos <span className="text-[#20B486]">compétences</span>
              pour faire <span>progresser</span> votre cheminement de{" "}
              <span>carrière</span>.
            </p>
            <p className="text-[#646464] text-base font-normal my-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              aut veritatis! Ipsum pariatur provident aliquam sit quam sint,
              recusandae .
            </p>
          </div>
          <div className="relative">
            <div className="rounded-full w-[400px] h-[400px] border border-[#20B486]"></div>
            <div className="rounded-full w-[400px] h-[400px] absolute top-5 left-5 border bg-[#20B486] overflow-hidden ">
              <img
                src="studentPicture.png"
                alt=""
                className="w-[266px] h-[332px] absolute bottom-0 left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="absolute top-1/3 left-0">
              <StatsBox stat="5k" title={"titre"} icon="tutorsIcon.svg" />
            </div>
            <div className="absolute top-0 right-0">
              <StatsBox stat="5k" title={"titre"} icon="tutorsIcon.svg" />
            </div>
            <div className="absolute right-0 bottom-0">
              <StatsBox stat="5k" title={"titre"} icon="tutorsIcon.svg" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <ThemeCard
            title={"Interaction Design"}
            icon="interactionDesign.png"
            description={
              "loremipsumdolor loremipsumdolor loremipsumdolorloremipsumdolor"
            }
          />
          <ThemeCard
            title={"Interaction Design"}
            icon="interactionDesign.png"
            description={
              "loremipsumdolor loremipsumdolor loremipsumdolorloremipsumdolor"
            }
          />
          <ThemeCard
            title={"Interaction Design"}
            icon="interactionDesign.png"
            description={
              "loremipsumdolor loremipsumdolor loremipsumdolorloremipsumdolor"
            }
          />
        </div>
        <div className="mb-10 flex justify-between">
          <CourseCard image="userInterfacePic.png" />
          <CourseCard image="userInterfacePic.png" />
          <CourseCard image="userInterfacePic.png" />
        </div>
      </div>
    </main>
  );
}
