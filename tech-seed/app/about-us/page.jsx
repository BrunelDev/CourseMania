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
                <header className="flex flex-col items-center px-5 lg:flex-row lg:px-20">
                    {/* About description */}
                    <div className="flex flex-col items-center text-center lg:text-left w-full lg:w-1/2 lg:h-[600px] mt-[100px] lg:mt-[200px]">
                        <section>
                            <h1 className="font-bold text-5xl lg:text-7xl text-[#1A906B]">A Propos</h1>
                        </section>
                        <br />
                        <section>
                            <p className="font-bold text-3xl lg:text-5xl">
                                <span className="text-[#FF9B26]">WEEKEND UX</span> providing the <br />
                                best opportunities to the <br />
                                students around the globe
                            </p>
                        </section>
                        <br />
                        <section>
                            <p className="text-lg lg:text-base">
                                Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting.
                                It was started in 2023 and is passionate about User Interface Design/ User Experience Design, Human Computer Interaction Design.
                                Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost
                                courses in the area of UI/UX Design, by strengthening your skills for your golden future.
                            </p>
                        </section>
                        <br />
                        <a href="#" className="hover:bg-white-700 text-white font-bold">
                            <button className="text-white bg-[#22B286] w-[127px] h-[52px] rounded-full">
                                <span className="flex text-center justify-center">
                                    Join Us
                                    <MoveRight color="white" />
                                </span>
                            </button>
                        </a>
                    </div>

                    <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-[360px]">
                        <div className="w-60 h-60 lg:w-80 lg:h-80 bg-[#F2F2F2] rounded-md flex justify-center items-center">
                            <div className="relative">
                                <img src="Rectangle 14.png" alt="Image 1" className="relative w-32 h-32 lg:w-44 lg:h-44" />
                                <img src="Rectangle 13.png" alt="Image 2" className="relative w-32 h-32 lg:w-44 lg:h-44 mt-[-80px] lg:mt-[-90px] ml-[-50px]" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Fin de la partie header */}
                <div className="flex flex-col items-center mt-10 lg:mt-20">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-20">
                        <div className="w-60 h-60 lg:w-[474px] lg:h-[474px] bg-[#F2F2F2] rounded-md flex justify-center items-center">
                            <img src="Section Img.png" alt="Section Image" className="w-44 h-44 lg:w-[434px] lg:h-[461px]" />
                        </div>
                        <section className="mt-10 lg:mt-0 lg:text-left">
                            <h1 className="font-bold text-2xl lg:text-3xl text-[#1A906B]">Feature</h1>
                            <p className="font-bold text-2xl lg:text-5xl mt-5">
                                We are always working <br />
                                to provide you the best of <br />
                                the features in all aspects.
                            </p>
                            <br />
                            <p className="text-base lg:text-lg">
                                At WEEKEND UX, the chief determination is to clear the minds of our <br /> students about their goals,
                                while making them consistent in their ambitions <br /> and pushing them to be confident for their journey towards the course of <br />
                                time.
                            </p>
                            <br />
                            <p className="text-base lg:text-lg">
                                You will find every little thing on the internet in just a click of  a hand, but here <br />
                                we admire that without knowledge and practice the internet may even also <br /> *
                                fail you in your life.
                            </p>
                            <br />
                            <a href="#" className="hover:bg-white-700 text-white font-bold">
                                <button className="text-white bg-[#22B286] w-[137px] h-[52px] rounded-full">
                                    <span className="flex text-center justify-center">
                                        Learn More
                                        <MoveRight color="white" />
                                    </span>
                                </button>
                            </a>
                        </section>
                    </div>

                    <div className="flex flex-col items-center mt-10 lg:mt-20">
                        <div className="text-center">
                            <span className="text-[#22B286] font-semibold text-xl lg:text-2xl">Our Benefics</span>
                            <br />
                            <span className="font-bold text-3xl lg:text-4xl mt-5">
                                By Joining WEEKEND UX Platform, <br />
                                One Can Avail a Lot Of Benefits.
                            </span>
                        </div>
                        <br />
                        <p className="desc1 text-lg lg:text-base text-center">
                            Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.
                        </p>
                    </div>

                    <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
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
            <br />
            <br />

            <Footer />
        </div>
    )
}
