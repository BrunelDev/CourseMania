import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InputDemo from "@/components/input"
export default function Help1() {
    return (
        <div>
            <div className="flex flex-col px-0 py-0">
                <Navbar />
                <div className="  bg-gradient-to-tl from-[#FFFFFF]  from-10% to-[#5FDFB7] to-100% h-full shadow-gray-950">

                    <img src="Group 70.png" alt="" className="ml-[85%] mt-12" />
                    <div className="w-[800px] h-[700px] bg-white mt-[] ml-[300px] flex flex-col justify-center ">
                        <h1 className="text-center text-7xl font-bold">?Aide?</h1>
                        <br />
                        <InputDemo />
                        <br />
                        <textarea name="" id="" placeholder="Votre probleme " className="w-[422px]  h-32 ml-52 border-gray-50 ">
                        </textarea>
                        <br />
                        <div className="ml-52">
                            <a href="" className="hover:bg-white-700 text-white font-bold " >
                                <button className="text-white bg-[#00A991] w-[422px] h-[52px]  ">
                                    <span className=" text-center">
                                        Envoyer
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <img src="Group 70.png" alt="" className="ml-[200px] mt-[-80px]" />
                </div>
                <div className="flex flex-row justify-between  w-full h-auto -mt-36">
                    <img src="Group 81.png" alt="" />
                    <img src="Group 82.png" alt="" />
                </div>
                <div className="-mt-16">
                    <Footer />
                </div>
            </div>
        </div>

    )
}