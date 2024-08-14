import Lateralnavmentor from "../../components/lateralenavmentor";
import CourProgrammeM from "../../components/courProgrammeM";
import AllCours from "../../components/allCours";
import UpcomingEvent from "../../components/upcomingEvent";

export default function CalendrierMentor(){
return(
    <main className="flex flex-col items-center bg-[#eafaff] ">
        <div>
           <Lateralnavmentor/>
           <AllCours/>
           <UpcomingEvent/>

        </div>
        
        <div>
           <CourProgrammeM/>
        </div>
    </main>
);
}