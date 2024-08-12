import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Icone from "@/components/icone";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-cover bg-center">
      <header className="mb-24 w-full">
        <Navbar />
      </header>
      <div className="contact-big-container bg-white bg-opacity-20 p-8 shadow-lg rounded-lg w-full max-w-5xl">
        <div className="w-full flex flex-col items-center mb-12">
          <h1 className="text-3xl font-bold flex items-center justify-center">
            Contactez-nous !
          </h1>
        </div>
  
        <div className="contact-container flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="formulaireContact flex-1 bg-opacity-0 p-4 rounded-lg">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Entrez votre nom:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              type="text"
              id="name"
              required
              minLength="4"
            />
  
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Entrez votre adresse e-mail:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              type="email"
              id="email"
              pattern=".+@example\\.com"
              required
            />
  
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Entrez votre message:
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              rows="6"
              placeholder="Entrez votre message ici..."
            ></textarea>
  
            <div className="flex justify-center">
              <input
                className="submit bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer"
                type="submit"
                value="Envoyer"
              />
            </div>
          </div>
  
          <div className="contact-info flex-1 flex flex-col items-center justify-center bg-opacity-0 p-4 rounded-lg text-center">
            <p>Bourjon Holding Investment</p>
            <p>04 BP 157, Cotonou, Gbegamey</p>
            <p>+229 55202020</p>
            <div className="contact-icons flex justify-center space-x-4 mt-2 mb-9">
              <Icone icone={"iconeFacebook.png"} />
              <Icone icone={"iconeYoutube.png"} />
              <Icone icone={"iconeLinkedln.png"} />
              <Icone icone={"Xicone.png"} />
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2090116749814!2d2.4052335747842273!3d6.366991324962737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355493eb64b13%3A0x3a9d1c176632a1a6!2sHOLDING%20BOURJON%20INVESTMENT!5e0!3m2!1sfr!2sbj!4v1723452938960!5m2!1sfr!2sbj"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="w-full mt-24">
        <Footer />
      </footer>
    </main>
  );
}
