import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Icone from "@/components/icone";

export default function UpdateProfileStudent() {
  return (
    <main className="flex flex-col items-center bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("/backconnexion.jpg")' }}>
      <header className="w-full mb-24">
        <Navbar />
      </header>
      <div className="bg-white bg-opacity-75 p-8 shadow-md rounded-lg w-full max-w-lg">
        <div>
            <div>
                <div>
                    <h3>Salut name 👋</h3>
                    <p>Apprenons quelque chose de nouveau aujourd'hui !</p>
                </div>
                <div className="relative">
                <input
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="search"
                  placeholder="Search..."
                />
                <Icone
                icone={"iconeSearch.png"}
                />
              </div>

            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
  
      </div>

      <footer className="w-full mt-24">
        <Footer />
      </footer>
    </main>
  );
}
