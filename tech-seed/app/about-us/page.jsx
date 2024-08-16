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
                <header className="flex flex-row px-20">
                    {/* About description */}
                    <div className=" flex flex-col w-[600px] h-[600px] mt-[200px] py-0">
                        <section className="text-left" >
                            <h1 className=" font-bold text-7xl text-[#1A906B]">A Propos</h1>
                        </section>
                        <br />

                        <section>
                            <p className="font-bold text-5xl">
                                <span className="text-[#FF9B26]">WEEKEND UX</span> providing the <br />
                                best opportunities to the <br />
                                students around the glob

                            </p>
                        </section>
                        <br />

                        <section>
                            <p className="">
                                Weekend UX, is a UI/UX Design Academy in Delhi involved in User <br />
                                Experience and User Interface Training and Consulting. It was started in <br />
                                2023 and passionate towards User Interface Design/ User Experience <br />
                                Design, Human Computer Interaction Design. Humanoid is gushing towards <br />
                                competence to acquire knowledge and have a wide understanding towards <br />
                                the sphere through the foremost courses in the area of UI/UX Design, by <br />
                                strengthening up your skills, for your golden future <br />

                            </p>
                        </section>
                        <br />
                        <br />
                        <a href="" className="hover:bg-white-700 text-white font-bold" >
                            <button className="text-white bg-[#22B286] w-[127px] h-[52px] rounded-full ">
                                <span className=" flex text-center ml-4">
                                    Join Us
                                    <MoveRight color="white" />
                                </span>
                            </button>
                        </a>

                    </div>

                    <div className="w-80 h-80 bg-[#F2F2F2] mt-[360px] ml-[170px] rounded-md">
                        <div>
                            <img src="Rectangle 14.png" alt="" className="ml-44 -mt-12" />
                            <img src="Rectangle 13.png" alt="" className="-ml-44" />
                        </div>
                    </div>

                </header>

                {/* Fin de la partis header */}
                <div className="flex flex-col mt-20">
                    <div className="flex flex-row  justify-center ">
                        <div className="bg-[#F2F2F2] w-[474px] h-[474px] rounded-md ">
                            <img src="Section Img.png" alt="" className="w-[434px] h-[461px] mt-10 ml-4" />
                        </div>
                        <section className="ml-64">
                            <h1 className="font-bold text-3xl text-[#1A906B]">Feature</h1>
                            <p className="font-bold text-5xl">
                                We are always working <br />
                                to provide you best of <br />
                                the features in all <br />
                                aspects
                            </p>
                            <br />
                            <p className="">
                                At WEEKENDUX the chief determination is to clear the minds of our <br />
                                students about their goals, while making them consistent in their ambitions <br />
                                and pushing them to be confident for their journey towards the course of <br />
                                time
                            </p>
                            <br />
                            <br />

                            <p className="">
                                You will find every little thing on the internet in just a click of hand, but here <br />
                                we admire that without knowledge and practice the internet may even also <br />
                                fail you in your life.
                            </p>
                            <br />
                            <br />
                            <br />
                            <a href="" className="hover:bg-white-700 text-white font-bold" >
                                <button className="text-white bg-[#22B286] w-[137px] h-[52px] rounded-full ">
                                    <span className=" flex text-center ml-4">
                                        Learn More
                                        <MoveRight color="white" />
                                    </span>
                                </button>
                            </a>
                        </section>
                    </div>
                    <div className="flex flex-col justify-center mt-20">
                        {/* our */}
                        <div className="flex flex-col text-center">
                            <div className="">
                                <span className="text-[#22B286] font-semibold text-2xl">Our Benefics</span>
                                <br />
                                <br />
                                <span className="font-bold text-4xl">
                                    By Joining WEEKENS UX Platform, <br />
                                    One Can Avail a Lot Of Benefits.
                                </span>
                            </div>
                            <br />
                            <br />
                            <span className="desc1">
                                Install our top-rated dropshipping app to your e-commerce site and get
                                <br />
                                <p>access to US Suppliers, AliExpress vendors, and the best.</p>
                            </span>
                        </div>
                        <div className="mt-20 grid grid-cols-3 justify-items-center space-y-10">
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
    )
}