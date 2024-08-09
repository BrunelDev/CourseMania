import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AvatarDemo from "@/components/avatarDemo";

export default function UpdateProfileStudent() {
  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      <header className="w-full mb-24">
        <Navbar />
      </header>
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <AvatarDemo className="w-32 h-32 rounded-full" />
        </div>
        
        <h3 className="text-2xl font-semibold text-center mb-6">Edit my profile</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="first-name" className="block text-gray-600 text-sm font-medium mb-2">First Name:</label>
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
              type="text"
              id="first-name"
            />
          </div>
  
          <div>
            <label htmlFor="last-name" className="block text-gray-600 text-sm font-medium mb-2">Last Name:</label>
            <input
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
              type="text"
              id="last-name"
            />
          </div>
  
          <div>
            <label htmlFor="language-select" className="block text-gray-600 text-sm font-medium mb-2">Language:</label>
            <select
              name="language"
              id="language-select"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
            >
              <option value="English" selected>English</option>
              <option value="French">French</option>
            </select>
          </div>
  
          <div>
            <label htmlFor="description" className="block text-gray-600 text-sm font-medium mb-2">Description:</label>
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
              value="Save Changes"
            />
          </div>
        </div>
      </div>

      <footer className="w-full mt-24">
        <Footer />
      </footer>
    </main>
  );
}
