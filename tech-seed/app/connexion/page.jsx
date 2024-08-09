"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ButtonNew from "@/components/ButtonNew";

export default function Connexion() {
  return (
    <main className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/backconnexion.jpg')" }}>
      <header className="w-full mb-8">
        <Navbar />
      </header>
      
      <div className="bg-white bg-opacity-80 p-8 mx-auto mt-20 mb-8 shadow-md rounded-lg max-w-sm w-full">
        <h3 className="text-2xl font-semibold text-center mb-4">Welcome back!</h3>
        
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Enter your email:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          type="email"
          id="email"
          pattern=".+@example.com"
          required
        />

        <label htmlFor="pass" className="block text-gray-700 font-bold mb-2">Enter your password:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          type="password"
          id="pass"
          pattern="[0-9a-fA-F]{4,8}"
          name="password"
          minLength="8"
          required
        />

        <input
          className="bg-green-600 text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 cursor-pointer w-full"
          type="submit"
          value="Login"
        />

        <h4 className="text-center my-4">Or</h4>

        <div className="flex flex-col gap-4">
          <ButtonNew
            title="Continue with Facebook"
            bgColor="#3b5998"
            textColor="white"
            icone="iconeFacebook.png"
          />
          <ButtonNew
            title="Continue with X"
            bgColor="black"
            textColor="white"
            icone="iconeX.png"
          />
          <ButtonNew
            title="Continue with LinkedIn"
            bgColor="#0077B5"
            textColor="white"
            icone="iconeLinkedln.png"
          />
        </div>
      </div>

      <footer className="w-full mt-8">
        <Footer />
      </footer>
    </main>
  );
}
