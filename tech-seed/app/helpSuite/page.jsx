
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InputDemo from "@/components/input"
import { Combobox } from "../../components/combobox";
export default function Help1() {
    return (
        <div>
            <div className="flex flex-col px-0 py-0">
                <Navbar />
                <div className="  bg-gradient-to-tl from-[#FFFFFF]  from-10% to-[#5FDFB7] to-100% h-full shadow-gray-950">

                    <img src="Group 70.png" alt="" className="hidden lg:block lg:ml-[85%] lg:mt-12" />
                    <div className="lg:w-[800px] h-[900px] bg-white max-md:w-screen mt-[]  lg:ml-[100px] xl:ml-[300px] flex flex-col justify-center max-sm:mb-[80px] z-10 ">
                        <h1 className="text-center text-7xl font-bold">?Aide?</h1>
                        <br />
                        <div className="w-[90%] max-w-[400px] text-center flex flex-col md:ml-52 mx-auto">
                            <label htmlFor="user">Entrez vos nom et prénoms</label>
                          <input
                            type="text"
                            id="user"
                            placeholder="Nom et Prénom"
                            className=" h-9 border-2 "
                            required
                          />
                          <br />
                          <label htmlFor="mentor">Choisissez un mentor en particulier (facultatif)</label>
                          <input
                            type="text"
                            id="mentor"
                            placeholder="Nom de votre  Mentor(Optionnel)"
                            className=" h-9 border-2 "
                          />
                          <br />
                          <label htmlFor="date">Entrez la date et l'heure voulue pour la séance</label>
                          <input type="datetime-local" id="date" required placeholder="Date voulue" className="h-9 border-2"/>
                          <br />
                          <label htmlFor="duree" className="left-1" >Entrez la durée voulue (en heure)</label>
                          <input type="number" id="duree" min={1} max={5} required className="h-9 border-2" placeholder=" La durée voulue (en heure)" />
                          <br />
                          <label htmlFor="notion">Entrez la thématique à aborder</label>
                          <Combobox title={"Notion à aborder"} className="h-9 border-2" />
                        </div>
                        <br />
                        <label htmlFor="requete" className="md:ml-52 mx-auto ">Donnez plus de précision pour votre requête</label>
                        <textarea name="" id="requete" placeholder="Votre problème... " className=" w-[90%] max-w-[400px] mx-auto h-32 md:ml-52 border-gray-50 ">
                        </textarea>
                        <br />
                        <div className="mx-auto md:ml-52 w-[95%] max-w-[400px] z-40">
                            
                                <button className="text-white bg-[#00A991] hover:bg-white-700 w-full font-bold h-[52px]  ">
                                    <span className=" text-center">
                                        Envoyer
                                    </span>
                                </button>
                            
                        </div>
                    </div>
                    <img src="Group 70.png" alt="" className="hidden lg:block lg:ml-[200px] lg:mt-[-80px]" />
                </div>
                <div className="flex flex-row justify-between  w-full h-auto -mt-36">
                    <img src="Group 81.png" alt="" className="w-[100px] sm:w-[221px] h-[150px] sm:h-[119px] " />
                    <img src="Group 82.png" alt="" className="w-[100px] sm:w-[221px] h-[150px] sm:h-[119px] " />
                </div>
                <div className="-mt-16 z-50">
                    <Footer />
                </div>
            </div>
        </div>

    )
}