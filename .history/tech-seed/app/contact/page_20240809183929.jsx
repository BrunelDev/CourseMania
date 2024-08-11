import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Icone from "@/components/icone";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/backconnexion.jpg')" }}>
      <header className="mb-24 w-full">
        <Navbar />
      </header>
      
      <div className="contact-container bg-white bg-opacity-20 p-8 shadow-lg rounded-lg w-full max-w-5xl flex justify-between">
        
        <div className="formulaireContact flex-1 bg-opacity-0 p-4 rounded-lg">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Enter your name:</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" type="text" id="name" required minlength="4" />
          
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Enter your email:</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" type="email" id="email" pattern=".+@example\\.com" required />
          
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Enter your message:</label>
          <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" rows="6" placeholder="Entrez votre message ici..."></textarea>
          
          <div className="flex flex-col items-center">
            <input
              className="submit bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer"
              type="submit"
              value="Envoyer"
            />
          </div>

        </div>
        
        <div className="contact-info flex-1 flex flex-col items-center justify-center bg-opacity-0 p-4 rounded-lg text-center">
          <p>Bourjon Holding Investment</p>
          <p>04 BP 157, Cotonou, gbegamey</p>
          <p>+229 55202020</p>
          <div className="contact-icons flex justify-center space-x-4 mt-4">
            <Icone icone={"iconeFacebook.png"} />
            <Icone icone={"iconeYoutube.png"} />
            <Icone icone={"iconeLinkedln.png"} />
            <Icone icone={"Xicone.png"} />
          </div>
        </div>
      </div>
      
      <footer className="w-full mt-24">
        <Footer />
      </footer>
    </main>
  );
}
