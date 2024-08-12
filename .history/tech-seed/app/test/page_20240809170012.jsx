"use client";
import { useState } from "react";

export default function Test() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, prenom, password: pwd }), // Corrected here
    })
      .then((response) => response.json()) // Handle response
      .then((data) => {
        console.log(data); // Log the data returned from the server
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-black"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="border border-black"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <br />
        <input
          type="password" // Changed to password type
          className="border border-black"
          placeholder="Mot de passe"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <br />
        <input type="submit" value="Soumettre" />
      </form>
    </div>
  );
}
