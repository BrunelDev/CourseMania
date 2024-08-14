"use client";
<<<<<<< HEAD
import { useState } from "react";

=======
<<<<<<< HEAD
import { useState } from "react";
=======
import { MessageList } from "react-chat-elements";
>>>>>>> 68b4b9e4f058027638f347b217861b8510b4ddc2
>>>>>>> 36b0777846cbb00e617cacc09fd05653854e7ee9
export default function Test() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://192.168.1.106:8000/api/token/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
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
