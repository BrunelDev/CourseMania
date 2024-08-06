import React from "react";
import Navbar from "../components/navbar";
import CourseCard from "../components/courseCard";
import ThemeCard from "../components/themeCard";
export default function Home() {
  return (
    <main>
      <div className="mb-20">
        <Navbar />
      </div>
      <div className="flex justify-around">
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
    </main>
  );
}
