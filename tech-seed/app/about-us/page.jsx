import React from "react";
import Navbar from "@/components/navbar";
import ThemeCard from "@/components/themeCard";
import Footer from "@/components/footer";
import { MoveRight } from "lucide-react";

export default function About() {
    return (
        <div>
            <div className="px-3">
                {/* barre de navigation */}
                <nav>
                    <Navbar />
                </nav>
                <header className="flex flex-col max-lg:mt-20 lg:flex-row px-6 lg:px-20 lg:mb-4">
                    {/* About description */}
                    <div
                        className="flex flex-col w-full lg:w-[600px] lg:h-[600px] mt-10 lg:mt-[200px] py-0"
                    >
                        <section className="text-left">
                            <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-[#1A906B]">A Propos</h1>
                        </section>
                        <br />
                        <section>
                            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl">
                                <span className="text-[#FF9B26]">WEEKEND UX</span> providing the <br />
                                best opportunities to the <br />
                                students around the globe
                            </p>
                        </section>
                        <br />
                        <section>
                            <p>
                                Weekend UX, is a UI/UX Design Academy in Delhi involved in User <br />
                                Experience and User Interface Training and Consulting. It was started in <br />
                                2023 and passionate towards User Interface Design/ User Experience <br />
                                Design, Human Computer Interaction Design. Humanoid is gushing towards <br />
                                competence to acquire knowledge and have a wide understanding towards <br />
                                the sphere through the foremost courses in the area of UI/UX Design, by <br />
                                strengthening up your skills, for your golden future.
                            </p>
                        </section>
                        <br />
                        <a href="" className="hover:bg-white-700 text-white font-bold max-lg:mb-5">
                            <button className="text-white bg-[#22B286] w-[127px] h-[52px] rounded-full">
                                <span className="flex text-center ml-4">
                                    Join Us
                                    <MoveRight color="white" />
                                </span>
                            </button>
                        </a>
                    </div>

                    <div
                        className="w-full lg:w-80 h-80 bg-[#F2F2F2] mt-10 lg:mt-[360px] lg:ml-[170px] rounded-md"
                    >
                        <div className="flex justify-center lg:justify-start">
                            <img src="Rectangle 14.png" alt="" className="ml-0 lg:ml-44 -mt-12" />
                            <img src="Rectangle 13.png" alt="" className="-ml-16 lg:-ml-44" />
                        </div>
                    </div>
                </header>

                {/* Fin de la partis header */}
                <div className="flex flex-col mt-20 px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row justify-center lg:max-xl:mt-[125px]">
                        <div className="bg-[#F2F2F2] w-full lg:w-[474px] h-[474px] rounded-md">
                            <img src="Section Img.png" alt="" className="w-full lg:w-[434px] h-auto lg:h-[461px] mt-10 lg:ml-4" />
                        </div>
                        <section className="lg:ml-64 mt-10 lg:mt-0">
                            <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl text-[#1A906B]">Feature</h1>
                            <p className="font-bold text-2xl sm:text-3xl lg:text-5xl">
                                We are always working <br />
                                to provide you best of <br />
                                the features in all <br />
                                aspects.
                            </p>
                            <br />
                            <p>
                                At WEEKENDUX the chief determination is to clear the minds of our <br />
                                students about their goals, while making them consistent in their ambitions <br />
                                and pushing them to be confident for their journey towards the course of <br />
                                time.
                            </p>
                            <br />
                            <p>
                                You will find every little thing on the internet in just a click of hand, but here <br />
                                we admire that without knowledge and practice the internet may even also <br />
                                fail you in your life.
                            </p>
                            <br />
                            <a href="" className="hover:bg-white-700 text-white font-bold">
                                <button className="text-white bg-[#22B286] w-[137px] h-[52px] rounded-full">
                                    <span className="flex text-center ml-4">
                                        Learn More
                                        <MoveRight color="white" />
                                    </span>
                                </button>
                            </a>
                        </section>
                    </div>
                    <div className="flex flex-col justify-center mt-20">
                        {/* Our Benefics */}
                        <div className="flex flex-col text-center">
                            <span className="text-[#22B286] font-semibold text-xl sm:text-2xl">Our Benefits</span>
                            <br />
                            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                                By Joining WEEKEND UX Platform, <br />
                                One Can Avail a Lot Of Benefits.
                            </span>
                            <br />
                            <span className="desc1">
                                Install our top-rated dropshipping app to your e-commerce site and get
                                <br />
                                <p>access to US Suppliers, AliExpress vendors, and the best.</p>
                            </span>
                        </div>
                        <div className="mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center space-y-10 lg:space-y-5">
                            <ThemeCard
                                title={"O1"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
                                }
                            />
                            <ThemeCard
                                title={"O2"}
                                icon="Ellipse 8.png"
                                description={
                                    "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
                                }
                            />
                            <ThemeCard
                                title={"O3"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
                                }
                            />
                            <ThemeCard
                                title={"O4"}
                                icon="Ellipse 8.png"
                                description={
                                    "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
                                }
                            />
                            <ThemeCard
                                title={"O5"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
                                }
                            />
                            <ThemeCard
                                title={"O6"}
                                icon="Ellipse 8.png"
                                description={
                                    "Standardization When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer />
        </div>
    );
}
