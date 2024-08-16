import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Icone from "@/components/icone";

export function Profil() {
  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <Icone
            icone={"avatarStudent.png"}
            className="w-32 h-32 rounded-full"
          />
        </div>

        <h3 className="text-2xl font-semibold text-center mb-6">
          Editez votre profile
        </h3>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Nom:
            </label>
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
              type="text"
              id="first-name"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Prénom:
            </label>
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
              type="text"
              id="last-name"
            />
          </div>

          <div>
            <label
              htmlFor="language-select"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Langue:
            </label>
            <select
              name="language"
              id="language-select"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
            >
              <option value="English" selected>
                English
              </option>
              <option value="French">French</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Décrivez-vous..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <input
              className="bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer"
              type="submit"
              value="Sauvegarder les modifications"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
