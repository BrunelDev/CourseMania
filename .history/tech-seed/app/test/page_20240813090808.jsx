"use client";
import { useState } from "react";

export default function Test() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://192.168.1.106:8000/api/token/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        USERNAME: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-black"
          placeholder="Nom"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <br />
        <input
          type="password" // Changed to password type
          className="border border-black"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Soumettre" onSubmit={handleSubmit} />
      </form>
    </div>
  );
}
