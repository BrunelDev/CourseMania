import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Icone from "@/components/icone";

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
      <header className="mb-8 w-full">
        <Navbar />
      </header>
      
      <div className="flex flex-col items-center max-2xl:mt-20 px-4 py-8 mx-auto w-full max-w-7xl">
        <div className="text-center mb-12 xl:max-2xl:pt-8">
          <h1 className="text-3xl font-bold pt-6">Contactez-nous !</h1>
        </div>
  
        <div className="w-full max-w-4xl flex flex-col md:flex-row md:space-x-8">
          {/* Formulaire de Contact */}
          <div className="flex-1 bg-white bg-opacity-80 p-6 rounded-lg shadow-md mb-8 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Entrez votre nom:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              type="text"
              id="name"
              required
              placeholder="Votre nom..."
              minLength="4"
            />
  
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Entrez votre adresse e-mail:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              type="email"
              id="email"
              pattern=".+@example\\.com"
              required
              placeholder="Votre adresse e-mail..."
            />
  
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Entrez votre message:</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              rows="6"
              placeholder="Entrez votre message ici..."
            ></textarea>
  
            <div className="flex justify-center">
              <input
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer"
                type="submit"
                value="Envoyer"
              />
            </div>
          </div>
  
          {/* Informations de Contact */}
          <div className="flex-1 bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
            <p className="text-center mb-4">Bourjon Holding Investment</p>
            <p className="text-center mb-4">04 BP 157, Cotonou, Gbegamey</p>
            <p className="text-center mb-4">+229 55202020</p>
            <div className="flex justify-center space-x-4 mb-4">
              <Icone icone={"iconeFacebook.png"} />
              <Icone icone={"iconeYoutube.png"} />
              <Icone icone={"iconeLinkedln.png"} />
              <Icone icone={"Xicone.png"} />
            </div>
            <div className="w-full">
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
      </div>

      <footer className="w-full mt-8">
        <Footer />
      </footer>
    </main>
  );
}
