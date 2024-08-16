"use client";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
export default function Lateralenavmentor({ mentor }) {
  const [mentorData, setMentorData] = useState({
    image: "avatarMentor.png",
    name: "Nom inconnu",
    profession: "Profession inconnue",
  });

  useEffect(() => {
    if (mentor) {
      setMentorData({
        image: mentor.image || "avatarMentor.png",
        name: mentor.name || "Nom inconnu",
        profession: mentor.profession || "Profession inconnue",
      });
    }
  }, [mentor]);

  return (
    <div className="w-full fixed top-0 left-0 h-full bg-white text- black p-4 border-r-2">
      <div className="flex items-center pb-6 mb-8 mt-9 border-b">
        <img
          src={mentorData.image}
          alt="Mentor Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{mentorData.name}</h3>
          <p className="text-sm">{mentorData.profession}</p>
        </div>
      </div>

      <nav className="space-y-4 my-8">
        <a href="#" className="flex items-center space-x-2">
          <img src="dashboard.png" alt="Dashboard" className="w-6 h-6" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <img src="myshedule.png" alt="My Schedule" className="w-6 h-6" />
          <span>My Schedule</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <img src="chat.png" alt="Chat" className="w-6 h-6" />
          <span>Chat</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <img src="mycourses.png" alt="My Courses" className="w-6 h-6" />
          <span>My Courses</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <img src="reviews.png" alt="Reviews" className="w-6 h-6" />
          <span>Reviews</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <img src="myaccount.png" alt="My Account" className="w-6 h-6" />
          <span>My Account</span>
        </a>
      </nav>
      <div className=" w-fit mt-8 px-8 py-6 bg-[#20B486] rounded-xl text-center cursor-pointer shadow-sm shadow-gray-400 hover:scale-105 duration-300">
        <div className="bg-white rounded-full w-fit mx-auto">
          <Plus color="#20B486" />
        </div>

        <p className="text-white">Ajouter vidéo</p>
      </div>
      <a href="#" className="flex items-center space-x-2 mt-8">
        <img src="logout.png" alt="Logout" className="w-6 h-6" />
        <span>Logout</span>
      </a>
    </div>
  );
}
