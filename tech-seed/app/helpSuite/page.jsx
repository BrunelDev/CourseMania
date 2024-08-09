import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./help1.css"
export default function Help1() {
    return (
        <div className="container">
            <header className="mb-24">
                <Navbar />
            </header>
            <img src="Group 70.png" alt="..." className="deco" />
            <div className="form">
                <h1 className="text-center mt-80 font-bold  text-[80px]">Help</h1>
                <div className="formulaire">
                    <label className="mt-[-20px]" for="nom">Nom</label><br /><br />
                    <input type="text" id="nom" name="nom" required />
                    <br />
                    <br />
                    <input type="text" id="nom" name="nom" required />
                    <textarea name="description" id=""> </textarea>
                    <input className="soumettre" type="submit" name="Send" id="" /> 
                </div>
                
            </div>
            <div className="decoration">
                <img src="Group 81.png" alt="" className="green" />
                <img src="Group 82.png" alt="" className="green2" />
            </div>
            <Footer />

        </div>
    )
}