import React from "react";
export default function InputDemo() {
  return (
    <div className="text-center flex flex-col md:ml-52 ">
      <input
        type="text"
        placeholder="Nom et Prenom"
        className="w-[90%] max-w-[400px] h-9 border-2 max-md:mx-auto"
      />
      <br />
      <input
        type="text"
        placeholder="Nom de votre  Mentor(Optionnel)"
        className="w-[90%] max-w-[400px] h-9 border-2 max-md:mx-auto"
      />
    </div>
  );
}
