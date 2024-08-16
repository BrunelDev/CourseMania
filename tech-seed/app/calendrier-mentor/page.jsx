"use client";
import Lateralnavmentor from "../../components/lateralenavmentor";
import CourProgrammeM from "../../components/courProgrammeM";
import AllCours from "../../components/allCours";
import UpcomingEvent from "../../components/upcomingEvent";
import PerformCours from "../../components/performCours";
import { Menu } from '@headlessui/react';
import { CalendarComponent } from "../../components/calendar";
import { Bell } from "lucide-react";


export default function CalendrierMentor() {
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
        <main className="flex bg-[#eafaff] min-h-screen">

            <div className="w-[260px] bg-white shadow-md">
                <Lateralnavmentor />
            </div>

            <div className="flex-1 p-6">
                <div className="flex items-center mb-4 shadow-custom-inset">
                    <span className="flex items-center space-x-2">
                        <img src="search-normal.png" alt="Search" className="w-6 h-6" />
                        <h3 className="text-lg font-semibold">Recherche</h3>
                    </span>
                    <button className="ml-auto px-4 py-2 rounded-[16px] bg-[#20B4861A] text-[#20B486] font-medium">
                        + Nouvel envoi
                    </button>
                </div>

                <hr className="mb-4" />

                {/* Calendrier */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold">Mon Calendrier</h3>
                    <div className="flex items-center my-2">
                        <time dateTime="" className="text-lg font-medium">Date</time>
                        <img src="arrowrightn.png" alt="Next" className="w-6 h-6 mx-2" />
                        <img src="arrowleft.png" alt="Previous" className="w-6 h-6" />
                    </div>
                    <div className="w-full bg-gray-100 h-[490px] flex items-center justify-center rounded-md shadow-md">

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

                <div className="space-y-4 flex">
                {cours.map((cour) => {
                  return (
                    <AllCours
                      affiche={cour.affiche}
                      name={cour.name}
                      auteurname={cour.auteurname}
                      auteurprofil={cour.auteurprofil}
                    />
                  );
                })}
                </div>
            </div>

            {/* Section supplémentaire */}
            <div>
              <div className="flex items-center justify-between mb-4 mt-6">
                <div className="flex ">
                   <Bell size={16} color="#15152e" strokeWidth={1} />
                   <Bell size={16} color="#15152e" strokeWidth={1} className="ml-3"/>
                </div>
                <img src="avatarMentor.png" alt="Profile" className="w-8 h-8 rounded-full" />
              </div>
            
              <div className="w-full bg-white rounded-md shadow-md p-4">
                <CalendarComponent />
              </div>
              <h3 className="mt-4 ml-2 font-semibold text-[20px]">Evènements à venir</h3>
              <div>
              {events.map((event) => (
                <UpcomingEvent
                  affiche={event.affiche}
                  name={event.name}
                  domaine={event.domaine}
                  timedebut={event.timedebut}
                />
              ))}
              </div>
            
              <div className="flex items-center mt-4">
                <h3 className="ml-2 font-semibold text-[20px]">Top Performing Courses</h3>
                <Menu as="div" className="relative ml-[65px] mt-4">
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
                          } block px-4 py-2 text-sm text-gray-700`}
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
                          } block px-4 py-2 text-sm text-gray-700`}
                          href="#"
                        >
                          Option 2
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            
              <div>
                {performcours.map((performcour) => (
                  <PerformCours
                    key={performcour.name}
                    affiche={performcour.affiche}
                    name={performcour.name}
                    auteurname={performcour.auteurname}
                    auteurprofil={performcour.auteurprofil}
                  />
                ))}
              </div>
            </div>
            
        </main>
    );
}
