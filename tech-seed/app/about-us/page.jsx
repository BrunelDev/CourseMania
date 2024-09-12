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
                                <span className="text-[#FF9B26]">IZISKILL</span> offre les <br />
                                meilleures opportunités aux <br />
                                étudiants et professionnels du monde entier
                            </p>
                        </section>
                        <br />
                        <section>
                            <p>
                            IZISKILL est une académie en ligne dédiée à l'apprentissage et au perfectionnement des compétences professionnelles. Fondée pour répondre aux besoins croissants des étudiants et des professionnels dans un monde en perpétuelle évolution, IZISKILL propose des formations de qualité en design, développement et gestion de projets. Nous nous engageons à vous fournir les outils et les connaissances nécessaires pour exceller dans votre domaine et atteindre vos objectifs professionnels.
                            </p>
                        </section>
                        <br />
                        <a href="" className="hover:bg-white-700 text-white font-bold mb-5 lg:mb-0">
                            <button className="text-white bg-[#22B286] w-fit h-[52px] rounded-full">
                                <span className="flex text-center ml-4">
                                     Rejoignez-nous
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
                {/* Fin de la partis header */}
                <div className="flex flex-col mt-20 px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row justify-center lg:max-xl:mt-[125px]">
                        <div className="bg-[#F2F2F2] w-full lg:w-[474px] h-[474px] rounded-md">
                            <img src="Section Img.png" alt="" className="w-full lg:w-[434px] h-auto lg:h-[461px] mt-10 lg:ml-4" />
                        </div>
                        <section className="lg:ml-64 mt-10 lg:mt-0 lg:w-1/2">
                            <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl text-[#1A906B]">Nos Caractéristiques</h1>
                            <p className="font-bold text-2xl sm:text-3xl lg:text-5xl">
                                Nous travaillons constamment
                                pour vous offrir les meilleures
                                fonctionnalités dans tous
                                les aspects de l'apprentissage.
                            </p>
                            <br />
                            <p>
                                Chez IZISKILL, notre objectif principal est de clarifier vos objectifs professionnels tout en vousaidant à rester motivé et concentré sur votre parcours de formation. Nous nous efforçons de rendre l'apprentissage accessible et enrichissant, en vous offrant les meilleures ressources et un soutien continu.
                            </p>
                            <br />
                            <p>
                            Internet regorge de contenus disponibles à tout moment, mais sans un apprentissage structuré et une pratique régulière, même les meilleures ressources en ligne peuvent ne pas suffire. Chez IZISKILL, nous croyons en l'importance d'un apprentissage pratique et guidé pour réussir dans votre carrière.
                            </p>
                            <br />
                            <a href="" className="hover:bg-white-700 text-white font-bold">
                            <a href="" className="hover:bg-white-700 text-white font-bold">
                                <button className="text-white bg-[#22B286] w-fit h-[52px] rounded-full">
                                    <span className="flex text-center ml-4">
                                        En savoir plus
                                        <MoveRight color="white" />
                                    </span>
                                </button>
                            </a>
                        </section>
                    </div>
                    <div className="flex flex-col justify-center mt-20">
                        {/* Our Benefics */}
                        <div className="flex flex-col text-center">
                            <span className="text-[#22B286] font-semibold text-xl sm:text-2xl">Nos Avantages</span>
                            <br />
                            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                               En rejoignant la plateforme IZISKILL, <br />
                               vous bénéficiez de nombreux avantages.
                            </span>
                            <br />
                            <span className="desc1">
                            Installez notre application de gestion des compétences sur votre appareil et obtenez <br />
                            <p>accès à des formations certifiées, des ressources pédagogiques de qualité et un réseau professionnel.</p>
                            </span>
                        </div>
                        <div className="mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center space-y-10 lg:space-y-5">
                            <ThemeCard
                                title={"O1"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Formation certifiée : Bénéficiez de formations certifiées par des experts reconnus, garantissant la qualité et la pertinence des compétences acquises... "
                                }
                            />
                            <ThemeCard
                                title={"O2"}
                                icon="Ellipse 8.png"
                                description={
                                    "Approche personnalisée : Accédez à des parcours d'apprentissage adaptés à vos besoins spécifiques pour une meilleure efficacité... "
                                }
                            />
                            <ThemeCard
                                title={"O3"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Ressources exclusives : Profitez de ressources pédagogiques de haute qualité pour approfondir vos connaissances et compétences... "
                                }
                            />
                            <ThemeCard
                                title={"O4"}
                                icon="Ellipse 8.png"
                                description={
                                    "Support expert : Recevez un soutien continu de la part de professionnels expérimentés pour répondre à vos questions et vous guider tout au long de votre formation... "
                                }
                            />
                            <ThemeCard
                                title={"O5"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Réseautage : Connectez-vous avec d'autres professionnels et étudiants pour échanger des idées et opportunités... s"
                                }
                            />
                            <ThemeCard
                                title={"O6"}
                                icon="Ellipse 8.png"
                                description={
                                    "Pratique immersive : Engagez-vous dans des projets pratiques pour appliquer vos compétences dans des scénarios réels... "
                                }
                            />
                        </div>
                    </div>
                </div>
                        <div className="mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center space-y-10 lg:space-y-5">
                            <ThemeCard
                                title={"O1"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Formation certifiée : Bénéficiez de formations certifiées par des experts reconnus, garantissant la qualité et la pertinence des compétences acquises... "
                                }
                            />
                            <ThemeCard
                                title={"O2"}
                                icon="Ellipse 8.png"
                                description={
                                    "Approche personnalisée : Accédez à des parcours d'apprentissage adaptés à vos besoins spécifiques pour une meilleure efficacité... "
                                }
                            />
                            <ThemeCard
                                title={"O3"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Ressources exclusives : Profitez de ressources pédagogiques de haute qualité pour approfondir vos connaissances et compétences... "
                                }
                            />
                            <ThemeCard
                                title={"O4"}
                                icon="Ellipse 8.png"
                                description={
                                    "Support expert : Recevez un soutien continu de la part de professionnels expérimentés pour répondre à vos questions et vous guider tout au long de votre formation... "
                                }
                            />
                            <ThemeCard
                                title={"O5"}
                                icon="Ellipse 8 (1).png"
                                description={
                                    "Réseautage : Connectez-vous avec d'autres professionnels et étudiants pour échanger des idées et opportunités... s"
                                }
                            />
                            <ThemeCard
                                title={"O6"}
                                icon="Ellipse 8.png"
                                description={
                                    "Pratique immersive : Engagez-vous dans des projets pratiques pour appliquer vos compétences dans des scénarios réels... "
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
    );
}
