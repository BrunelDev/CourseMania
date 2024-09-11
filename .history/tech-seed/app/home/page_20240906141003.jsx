"use client";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Chat } from "@/components/message";
import Lateralenavmentor from "@/components/lateralenavmentor";
import { Dashboard } from "@/components/dashboard";
import Course from "@/components/courses";
import { Profil } from "@/components/profil";
import { logOut } from "@/lib/functions";
import { redirect, useRouter } from "next/navigation";
import { getUser, isLoggedIn } from "@/lib/functions";
export default function ChatPage() {
  const [isDashboardSelected, setIsDashboardSelected] = useState(false);
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [isScheduleSelected, setIsScheduleSelected] = useState(false);
  const [isCoursesSelected, setIsCoursesSlected] = useState(false);
  const [isAccountSelected, setIsAccountSlected] = useState(false);
  const [isReviewsSelected, setIsReviewsSlected] = useState(false);
  const [mentorData, setMentorData] = useState({
    image: "avatarMentor.png",
    name: "Nom inconnu",
    profession: "Profession inconnue",
  });
  const navigate = (link) => {
    setIsChatSelected(link === "chat");
    setIsDashboardSelected(link === "dashboard");
    setIsScheduleSelected(link === "schedule");
    setIsAccountSlected(link === "account");
    setIsReviewsSlected(link === "reviews");
    setIsCoursesSlected(link === "courses");
  };
  const mentor = undefined;
  useEffect(() => {
    if (mentor) {
      setMentorData({
        image: mentor.image || "avatarMentor.png",
        name: mentor.name || "Nom inconnu",
        profession: mentor.profession || "Profession inconnue",
      });
    }
  }, [mentor]);
  const router = useRouter();
  const [UserName, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [pic, setPic] = useState("");
  useEffect(() => {
    getUser()
      .then((data) => {
        setUsername(data.username);
        setStatus(data.status);
        setPic(data.pic);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  console.log(localStorage.getItem("accessToken"));
  if (!isLoggedIn()) {
    console.log("ici", localStorage.getItem("accessToken"));
    return redirect("/");
  } else {
    return (
      <div className="flex w-full flex-row">
        <div className="h-full w-1/5">
          <div className="w-1/5 fixed top-0 left-0 h-full bg-white text- black border-r">
            <div className="flex items-center mb-6 mt-9 p-4">
              <img
                src={
                  localStorage.getItem("profileImage")
                    ? localStorage.getItem("profileImage")
                    : null
                }
                alt="Mentor Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {localStorage.getItem("username")}
                </h3>
                <p className="text-sm">{localStorage.getItem("sttatus")}</p>
              </div>
            </div>
            <div className="px-4">
              <hr className="border-gray-700 mb-8 " />
            </div>
            <nav className="my-8 w-full">
              <a
                href="#"
                className={`flex items-center space-x-2 py-4 w-full hover:bg-[#e5e5e5] duration-300  ${
                  isDashboardSelected ? "font-semibold text-[#20B486]" : null
                }`}
                onClick={() => {
                  navigate("dashboard");
                }}
              >
                <img
                  src="dashboard.png"
                  alt="Dashboard"
                  className="w-6 h-6 ml-5"
                />
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 py-4 w-full hover:bg-[#e5e5e5] duration-300 ${
                  isScheduleSelected ? "font-semibold text-[#20B486] " : null
                }`}
                onClick={() => {
                  navigate("schedule");
                }}
              >
                <img
                  src="myshedule.png"
                  alt="My Schedule"
                  className="w-6 h-6 ml-5"
                />
                <span>My Schedule</span>
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 py-4 w-full hover:bg-[#e5e5e5] duration-300 ${
                  isChatSelected ? "font-semibold text-[#20B486]" : null
                }`}
                onClick={() => {
                  navigate("chat");
                }}
              >
                <img src="chat.png" alt="Chat" className="w-6 h-6 ml-5" />
                <span>Chat</span>
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 py-4 w-full hover:bg-[#e5e5e5] duration-300 ${
                  isCoursesSelected ? "font-semibold text-[#20B486]" : null
                }`}
                onClick={() => {
                  navigate("courses");
                }}
              >
                <img
                  src="mycourses.png"
                  alt="My Courses"
                  className="w-6 h-6 ml-5"
                />
                <span>My Courses</span>
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 py-4 w-full hover:bg-[#e5e5e5] duration-300 ${
                  isReviewsSelected ? "font-semibold text-[#20B486]" : null
                }`}
                onClick={() => {
                  navigate("reviews");
                }}
              >
                <img src="reviews.png" alt="Reviews" className="w-6 h-6 ml-5" />
                <span>Reviews</span>
              </a>
              <a
                href="#"
                className={`flex items-center space-x-2 py-4 w-full hover:bg-[#e5e5e5] duration-300 ${
                  isAccountSelected ? "font-semibold text-[#20B486]" : null
                }`}
                onClick={() => {
                  navigate("account");
                }}
              >
                <img
                  src="myaccount.png"
                  alt="My Account"
                  className="w-6 h-6 ml-5"
                />
                <span>My Account</span>
              </a>
            </nav>
            <div className="flex justify-center">
              <div className=" w-fit mt-8 px-8 py-6 bg-[#20B486] rounded-xl text-center cursor-pointer shadow-sm shadow-gray-400 hover:scale-105 duration-300">
                <div className="bg-white rounded-full w-fit mx-auto">
                  <Plus color="#20B486" />
                </div>

                <p className="text-white">Ajouter vidéo</p>
              </div>
            </div>

            <a
              href="#"
              className="flex items-center space-x-2 mt-8"
              onClick={() => {
                logOut();
                router.replace("/");
              }}
            >
              <img src="logout.png" alt="Logout" className="w-6 h-6" />
              <span>Logout</span>
            </a>
          </div>
        </div>
        <div className="w-4/5">
          {isChatSelected ? (
            <Chat />
          ) : isDashboardSelected ? (
            <Dashboard />
          ) : isCoursesSelected ? (
            <Course />
          ) : isAccountSelected ? (
            <Profil />
          ) : null}
        </div>
      </div>
    );
  }
}
