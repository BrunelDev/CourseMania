"use client";
import Lateralenavmentor from "../../components/lateralenavmentor";
import CourProgrammeM from "../../components/courProgrammeM";
import AllCours from "../../components/allCours";
import UpcomingEvent from "../../components/upcomingEvent";
import CalendarTimeline from "../../components/calendarTimeline";
import PerformCours from "../../components/performCours";
import { useState } from "react";
import { Menu } from '@headlessui/react';
import { CalendarComponent } from "../../components/calendar";
import { Bell, MessageSquareMore, Plus } from "lucide-react";

export default function CalendrierMentor() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [query, setQuery] = useState("");

    const getMonday = (date) => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    };

    const nextWeek = () => {
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
    };

    const previousWeek = () => {
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
    };

    const mondayDate = getMonday(new Date(currentDate));
    const sundayDate = new Date(mondayDate);
    sundayDate.setDate(sundayDate.getDate() + 6);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const cours = [
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            auteurname: "No name",
            auteurprofil: "avatarMentor.png"
        },
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            auteurname: "No name",
            auteurprofil: "avatarMentor.png"
        },
    ];

    const events = [
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            domaine: "Domaine",
            timedebut: "00:00"
        },
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            domaine: "Domaine",
            timedebut: "00:00"
        },
    ];

    const performcours = [
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            auteurname: "No name",
            auteurprofil: "avatarMentor.png",
        },
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            auteurname: "No name",
            auteurprofil: "avatarMentor.png",
        },
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            auteurname: "No name",
            auteurprofil: "avatarMentor.png",
        },
        {
            affiche: "affichecour.png",
            name: "Nom inconnu",
            auteurname: "No name",
            auteurprofil: "avatarMentor.png",
        },
    ];

    return (
        <main className="flex bg-[#ffffff] min-h-screen">
            <div className="w-[260px] bg-white shadow-md">
                <Lateralenavmentor />
            </div>

            <div className="flex-1 p-6">
                <div className="flex items-center mb-4 shadow-custom-inset">
                    <div className="flex items-center space-x-2 w-[80%]">
                        <img src="search-normal.png" alt="Search" className="w-6 h-6" />
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Recherche..."
                            className="flex-1 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="flex ml-auto px-4 py-2 rounded-[16px] bg-[#20B4861A] text-[#20B486] font-medium">
                        <Plus />
                        Nouvel envoi
                    </button>
                </div>

                <hr className="mb-4" />

                {/* Calendrier */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold">Mon Calendrier</h3>
                    <div className="flex items-center my-2">
                        <img src="arrowrightn.png" alt="Previous" className="w-6 h-6 cursor-pointer" onClick={previousWeek} />
                        <time dateTime={mondayDate.toISOString()} className="text-lg font-medium">
                            {mondayDate.toLocaleDateString()} - {sundayDate.toLocaleDateString()}
                        </time>
                        <img src="arrowleft.png" alt="Next" className="w-6 h-6 mx-2 cursor-pointer" onClick={nextWeek} />
                    </div>
                    <div className="w-full bg-gray-100 h-[490px] flex items-center justify-center rounded-md shadow-md">
                        <CalendarTimeline currentDate={currentDate} />
                    </div>
                </div>

                <nav className="mb-6">
                    <ul className="flex space-x-10">
                        <li><a href="#" className="text-gray-500 hover:underline hover:text-blue-600">Les cours</a></li>
                        <li><a href="#" className="text-gray-500 hover:underline hover:text-blue-600">Un à un</a></li>
                        <li><a href="#" className="text-gray-500 hover:underline hover:text-blue-600">Webinaire</a></li>
                        <li><a href="#" className="text-gray-500 hover:underline hover:text-blue-600">Coaching personnel</a></li>
                        <li><a href="#" className="text-gray-500 hover:underline hover:text-blue-600">Atelier</a></li>
                    </ul>
                </nav>

                <div className="space-y-4 flex flex-wrap">
                    {cours.map((cour, index) => (
                        <AllCours
                            key={index}
                            affiche={cour.affiche}
                            name={cour.name}
                            auteurname={cour.auteurname}
                            auteurprofil={cour.auteurprofil}
                        />
                    ))}
                </div>
            </div>

            {/* Section supplémentaire */}
            <div className="shadow-[rgba(176,179,189,0.1)_-16px_0px_34px_0px] p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                        <Bell size={24} color="#A5B4CB" strokeWidth={1} />
                        <MessageSquareMore size={24} color="#A5B4CB" strokeWidth={1} className="ml-4" />
                    </div>
                    <img src="avatarMentor.png" alt="Profile" className="w-8 h-8 rounded-full" />
                </div>

                <div className="w-full bg-white rounded-md shadow-md p-4">
                    <CalendarComponent />
                </div>
                <h3 className="mt-4 font-semibold text-[20px]">Evènements à venir</h3>
                <div className="space-y-4">
                    {events.map((event, index) => (
                        <UpcomingEvent
                            key={index}
                            affiche={event.affiche}
                            name={event.name}
                            domaine={event.domaine}
                            timedebut={event.timedebut}
                        />
                    ))}
                </div>

                <div className="flex items-center mt-4">
                    <h3 className="font-semibold text-[20px]">Top Performing Courses</h3>
                    <Menu as="div" className="relative ml-4">
                        <Menu.Button className="text-gray-500 focus:outline-none">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16"
                                />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${
                                            active ? 'bg-gray-100' : ''
                                        } block px-4 py-2 text-gray-800`}
                                        href="#"
                                    >
                                        Option 1
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${
                                            active ? 'bg-gray-100' : ''
                                        } block px-4 py-2 text-gray-800`}
                                        href="#"
                                    >
                                        Option 2
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${
                                            active ? 'bg-gray-100' : ''
                                        } block px-4 py-2 text-gray-800`}
                                        href="#"
                                    >
                                        Option 3
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <div className="space-y-4">
                    {performcours.map((cour, index) => (
                        <PerformCours
                            key={index}
                            affiche={cour.affiche}
                            name={cour.name}
                            auteurname={cour.auteurname}
                            auteurprofil={cour.auteurprofil}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
