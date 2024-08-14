import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import InputDemo from "@/components/Input";
export default function Help1() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="  bg-gradient-to-tl from-[#FFFFFF] from-10% to-[#5FDFB7] to-100% h-full">

                <img src="Group 70.png" alt="" className="ml-[85%] mt-12" />
                <div className="w-[800px] h-[700px] bg-white mt-[] ml-[300px]">
                </div>
                <img src="Group 70.png" alt="" className="ml-[200px] mt-[-80px]" />
            </div>
            <div className="flex flex-row justify-between bg-slate-800">
                <img src="Groupe 81.png" alt="" />
                <img src="Groupe 82.png" alt="" />

            </div>
        </div>

    )
}