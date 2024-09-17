"use client"
import React,{useState, useEffect} from "react";
import Navbar from "@/components/navbar";
import CourseCard from "@/components/courseCard";
import { motion } from "framer-motion";
import ThemeCard from "@/components/themeCard";
import StatsBox from "@/components/statsBox";
import Button from "@/components/button";
import TeacherCard from "@/components/teacherCard";
import Footer from "@/components/footer";
import BlogCard from "@/components/blogCard";
import { Chatbot } from "@/components/chatbot1";

// Définir des variantes pour l'animation
const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

import { getAllCourses } from "@/lib/functions";
export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res.results);
    });
  }, []);
  return (
    <main className="bg-[#24bb8b05]">
      <header>
        <div className="mb-24">
          <Navbar />
        </div>
      </header>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
         className="">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp} 
        className="flex flex-row justify-between px-8 lg:px-[110px] py-4 lg:py-10 bg-gradient-to-tl from-[#24bb8b1b] from-0% to-[#24bb8b00] to-100% overflow-hidden z-10 ">
          <div className=" sm:w-1/2">
            <img
              src="spiral.svg"
              alt=""
              className="absolute left-0 w-[350px] h-[350px]"
            />

            <p className="translate-y-10 text-4xl sm:text-5xl font-bold text-[#101828]">
              Améliorez vos <span className="text-[#20B486]">compétences </span>
              pour faire <span>progresser</span> votre cheminement de{" "}
              <span>carrière</span>.
            </p>
            <p className="text-[#646464] text-base font-normal mt-16 mb-6 ">
               Découvrez comment nos formations peuvent vous aider à atteindre vos objectifs professionnels. Que vous soyez en début de carrière ou que vous cherchiez à améliorer vos compétences existantes, nous avons des solutions adaptées à vos besoins.
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
                  className="w-5 h-5 mr-1 sm:w-[28px] sm:h-[28px] sm:mr-3"
                />
                Prise de parole en public
              </span>
              <span className="flex">
                <img
                  src="carreerIcon.svg"
                  alt=""
                  className="w-5 h-5 mr-1 sm:w-[28px] sm:h-[28px] sm:mr-3"
                />
                Orientation professionnelle
              </span>{" "}
              <span className="flex">
                <img
                  src="creativeIcon.svg"
                  alt=""
                  className="w-5 h-5 mr-1 sm:w-[28px] sm:h-[28px] sm:mr-3"
                />
                Pensée créative
              </span>
            </div>
          </div>

          <div className="sm:block relative">
            <div className="rounded-full w-[400px] h-[400px] border border-[#20B486]"></div>
            <div className="rounded-full  sm:w-[400px] sm:h-[400px] absolute top-5 left-5 border bg-[#20B486] overflow-hidden ">
              {
                <img
                  src="studentPicture.png"
                  alt=""
                  className="w-[250px] h-[250px] sm:w-[444px] sm:h-[444px] absolute -bottom-10 left-1/2 -translate-x-1/2"
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
        </motion.div>

        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp} 
        className=" flex flex-col items-center lg:px-[110px] py-10">
          <span className="text-[#20B486] font-semibold">Nos Services</span>
          <span className="font-bold text-3xl w-2/3 text-center mt-4 mb-8">
            Favoriser un environnement d’apprentissage ludique et engageant
          </span>
          <div className="flex justify-center lg:space-x-8 w-full flex-wrap">
            <ThemeCard
              title={"Etudiants"}
              icon="interactionDesign.png"
              description={
                "Avancez dans votre parcours académique avec nos formations diplômantes, conçues pour vous fournir les compétences nécessaires pour exceller dans votre domaine."
              }
            />
            <ThemeCard
              title={"Enseignants"}
              icon="interactionDesign.png"
              description={
                "Aidez les étudiants à surmonter les défis et à atteindre leurs objectifs grâce à votre expertise et à votre soutien. Votre rôle est crucial dans leur réussite."
              }
            />
            <ThemeCard
              title={"Enseignants"}
              icon="interactionDesign.png"
              description={
                "Développez vos compétences professionnelles et restez à jour avec les dernières tendances de l'industrie pour propulser votre carrière vers de nouveaux sommets."
              }
            />
          </div>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp} 
        className="flex flex-col justify-center xl:px-[110px] px-9">
          <span className="text-[#20B486] font-semibold mt-20 mb-6">
            Explorez les programmes
          </span>
          <span className="font-bold text-3xl">
            Nos cours les plus populaires
          </span>
          <span className="text-[#667085] text-lg my-6">
              Rejoignez nos cours renommés pour acquérir des compétences pratiques et théoriques essentielles à votre développement professionnel.
          </span>
          <div className="mb-10 flex overflow-x-auto space-x-4 w-full justify-between">
            {courses.map((course) => {
              return (
                <CourseCard
                  mentorPicture={course.instructor.user.image}
                  price={course.price}
                  theme={course.sub_category.name}
                  rating={course.rating}
                  duration={course.duration}
                  key={course.id}
                  image={course.thumbnail}
                  title={course.title}
                  description={course.description}
                />
              );
            })}
            <CourseCard
              image="userInterfacePic.png"
              title={"Design UI/UX avec Figma"}
              description={`Maîtrisez Figma pour concevoir des interfaces utilisateur innovantes et créer des expériences utilisateur mémorables.`}
            />
            <CourseCard
              image="userInterfacePic.png"
              title={"Création d'interfaces utilisateur"}
              description={
                "Apprenez à créer des interfaces utilisateur attrayantes et fonctionnelles grâce à des techniques éprouvées et des outils modernes."
              }
            />
            <CourseCard
              image="userInterfacePic.png"
              title={"Conception UX avec Figma"}
              description={
                "Développez vos compétences en conception UX avec Figma pour offrir des expériences utilisateur exceptionnelles et intuitives."
              }
            />
          </div>
          <div className="mx-auto">
            <Button
              title={"Découvrez tous les programmes"}
              bgColor={
                "bg-[#F9FAFB] border border-[#D0D5DD] shadow-sm shadow-[#10182817] hover:bg-[#979899]"
              }
            />
          </div>
        </motion.div>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp} 
        className="flex justify-center items-center flex-col xl:px-[110px] px-6">
          <span className="text-[#22B286] font-semibold mt-[80px] mb-[20px]">
            Tuteurs
          </span>
          <span className="text-[#101828] font-semibold text-4xl">
             Nos experts en formation
          </span>
          <span className="text-[#667085] text-center sm:w-1/2 text-lg my-6">
            Sur Iziskill, des instructeurs du monde entier instruisent des
            millions d'étudiants. Nous fournissons les connaissances et les compétences nécessaires.
          </span>
          <div className="flex overflow-x-auto space-x-4 w-full justify-between xl:w-full mb-8">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </div>
        </motion.div>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#F0FAF7] w-full py-20 px-8 flex flex-col justify-center items-center">
          <span className="text-center w-[90%] font-medium text-3xl text-[#101828]">
          Les cours étaient exceptionnels ! Iziskill est la plateforme idéale pour ceux qui souhaitent démarrer une nouvelle carrière ou rafraîchir leurs compétences.
          </span>
          <img src="studentAvatar.png" alt="" className="py-5" />
          <span className="font-medium text-[#101828]">Jeanne Dossou</span>
          <span className="text-[#667085] py-5 text-center">
          Étudiante à l'Université Nationale d'Abomey-Calavi
          </span>
        </motion.div>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="px-[23px] md:px-[110px] py-10">
          <span className="font-bold text-3xl">Nos derniers blogs</span>
          <div className="my-5 flex-">
            <BlogCard
              image={"computer.png"}
              tagList={[
                ["Research", "text-[#C11574]", "bg-[#FDF2FA]"],
                ["UI Design", "text-[#026AA2]", "bg-[#F0F9FF]"],
                ["Java", "text-[#FF9B26]", "bg-[#FFF9F3]"],
              ]}
              date={"08 Août 2024"}
              title={"Les tendances du design UI/UX en 2024"}
              description={
                "Découvrez les dernières tendances en design UI/UX et apprenez comment les appliquer pour créer des expériences utilisateur captivantes."
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
              date={"09 Septembre 2024"}
              title={"Stratégies efficaces en marketing digital"}
              description={
                "Explorez des stratégies éprouvées pour améliorer votre présence en ligne et atteindre vos objectifs marketing de manière efficace."
              }
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="fixed right-5 bottom-10">
        <Chatbot />
      </div>

      <Footer />
    </main>
  );
}
