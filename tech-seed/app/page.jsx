import React from "react";
import Navbar from "@/components/navbar";
import CourseCard from "@/components/courseCard";
import ThemeCard from "@/components/themeCard";
import StatsBox from "@/components/statsBox";
import Button from "@/components/button";
import TeacherCard from "@/components/teacherCard";
import Footer from "@/components/footer";
import BlogCard from "@/components/blogCard";
export default function Home() {
  return (
    <main className="bg-[#24bb8b05]">
      <header>
        <div className="mb-24">
          <Navbar />
        </div>
      </header>
      <div className="">
        <div className="flex flex-row justify-between px-[110px] py-10 bg-gradient-to-tl from-[#24bb8b1b] from-0% to-[#24bb8b00] to-100% ">
          <div className=" w-1/2">
            <img
              src="spiral.svg"
              alt=""
              className="absolute left-0 w-[350px] h-[350px]"
            />
            <p className="translate-y-10 text-5xl font-bold text-[#101828]">
              Améliorez vos <span className="text-[#20B486]">compétences</span>
              pour faire <span>progresser</span> votre cheminement de{" "}
              <span>carrière</span>.
            </p>
            <p className="text-[#646464] text-base font-normal mt-16 mb-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              aut veritatis! Ipsum pariatur provident aliquam sit quam sint,
              recusandae .
            </p>
            <Button
              title={"Commencer"}
              bgColor={"bg-[#20B486] py-4 mr-5"}
              textColor={"text-white"}
            />
            <Button
              title={"Essai gratuit"}
              bgColor={"bg-[#EAFFF9] shadow-lg shadow-[#1018280c] py-4"}
              textColor={"text-[#3BC49A]"}
            />
            <div className="mt-10 mb-20 flex justify-between">
              <span className="flex">
                <img
                  src="speaker.svg"
                  alt=""
                  className="w-[28px] h-[28px] mr-3"
                />
                Public Speaking
              </span>
              <span className="flex">
                <img
                  src="carreerIcon.svg"
                  alt=""
                  className="w-[28px] h-[28px] mr-3"
                />
                Orienté carrière
              </span>{" "}
              <span className="flex">
                <img
                  src="creativeIcon.svg"
                  alt=""
                  className="w-[28px] h-[28px] mr-3"
                />
                Pensée Créative
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-full w-[400px] h-[400px] border border-[#20B486]"></div>
            <div className="rounded-full w-[400px] h-[400px] absolute top-5 left-5 border bg-[#20B486] overflow-hidden ">
              {
                <img
                  src="studentPicture.png"
                  alt=""
                  className="w-[444px] h-[444px] absolute -bottom-10 left-1/2 -translate-x-1/2"
                />
              }
            </div>
            <div className="absolute top-0 left-0">
              <StatsBox
                stat="5k+"
                title={"Cours en ligne"}
                icon="tutorsIcon.svg"
              />
            </div>
            <div className="absolute top-0 right-0">
              <StatsBox stat="250+" title={"Tuteurs"} icon="tutorsIcon.svg" />
            </div>
            <div className="absolute right-0 bottom-20">
              <StatsBox
                stat="2k+"
                title={"Vidéos éducatives"}
                icon="tutorsIcon.svg"
              />
            </div>
            <img
              src="spiral.svg"
              className="absolute z-[-1] bottom-0 left-1/3"
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col items-center px-[110px] py-10">
          <span className="text-[#20B486] font-semibold">Nos Services</span>
          <span className="font-bold text-3xl w-2/3 text-center mt-4 mb-8">
            Favoriser un environnement d’apprentissage ludique et engageant
          </span>
          <div className="flex justify-between w-full">
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
        </div>
        <div className="flex flex-col justify-center px-[110px]">
          <span className="text-[#20B486] font-semibold mt-20 mb-6">
            Explorez les programmes
          </span>
          <span className="font-bold text-3xl">
            Nos cours les plus populaires
          </span>
          <span className="text-[#667085] text-lg my-6">
            Rejoignons notre célèbre cours, les connaissances fournies vous
            seront certainement utiles.
          </span>
          <div className="mb-10 flex w-full justify-between">
            <CourseCard image="userInterfacePic.png" />
            <CourseCard image="userInterfacePic.png" />
            <CourseCard image="userInterfacePic.png" />
          </div>
          <div className="mx-auto">
            <Button
              title={"Découvrez tous les programmes"}
              bgColor={
                "bg-[#F9FAFB] border border-[#D0D5DD] shadow-sm shadow-[#10182817] hover:bg-[#979899]"
              }
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col px-[110px]">
          <span className="text-[#22B286] font-semibold mt-[80px] mb-[20px]">
            Tuteurs
          </span>
          <span className="text-[#101828] font-semibold text-4xl">
            Rencontrez les héros.
          </span>
          <span className="text-[#667085] text-center w-1/2 text-lg my-6">
            Sur VirtuClass, des instructeurs du monde entier instruisent des
            millions d'étudiants. Nous offrons les connaissances et les
            capacités.
          </span>
          <div className="flex justify-between flex-wrap w-full mb-8">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </div>
        </div>
        <div className="bg-[#F0FAF7] w-full py-20 px-[110px] flex flex-col justify-center items-center">
          <span className="text-center w-[90%] font-medium text-3xl text-[#101828]">
            Les cours étaient fantastiques ! Il s'agit d'une plateforme
            principale pour ceux qui cherchent à démarrer une nouvelle carrière
            ou qui ont besoin d'une remise à niveau.
          </span>
          <img src="studentAvatar.png" alt="" className="py-5" />
          <span className="font-medium text-[#101828]">Jeanne Dossou</span>
          <span className="text-[#667085] py-5">
            Etudiante a l'université Nationale de Abomey-Calavi
          </span>
        </div>
        <div className="px-[110px] py-10">
          <span className="font-bold text-3xl">Nos derniers blogs</span>
          <div className="my-5">
            <BlogCard
              image={"computer.png"}
              tagList={[
                ["Research", "text-[#C11574]", "bg-[#FDF2FA]"],
                ["UI Design", "text-[#026AA2]", "bg-[#F0F9FF]"],
                ["Java", "text-[#FF9B26]", "bg-[#FFF9F3]"],
              ]}
              date={"8 Août 2024"}
              title={"Programmation"}
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsum rerum distinctio ratione amet minima porro in provident? Iste, atque obcaecati a vitae eligendi ipsa ad molestias voluptatum! Ipsum, libero."
              }
            />
          </div>
          <div className="my-5">
            <BlogCard
              image={"computer.png"}
              tagList={[
                ["Research", "text-[#C11574]", "bg-[#FDF2FA]"],
                ["UI Design", "text-[#026AA2]", "bg-[#F0F9FF]"],
                ["Java", "text-[#FF9B26]", "bg-[#FFF9F3]"],
              ]}
              date={"8 Août 2024"}
              title={"Programmation"}
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsum rerum distinctio ratione amet minima porro in provident? Iste, atque obcaecati a vitae eligendi ipsa ad molestias voluptatum! Ipsum, libero."
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
