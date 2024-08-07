import React from "react";
export default function Inscription() {
  return (
    <main className="inscription">
      <div className="formulaire">
        <label htmlFor="Nom">Nom :</label>
        <input type="text" id="nom" name="nom" required /> <br />
        <label htmlFor="Nom">Prenom :</label>
        <input type="text" id="Prenom" name="Prenom" required /> <br />
        <label htmlFor="Nom">Niveau d'étude</label>
        <input type="text" id="niveau" name="niveau" required /> <br />
        <label htmlFor="Nom">E-mail</label>
        <input type="text" id="email" name="email" required /> <br />
        <label htmlFor="Nom">Mots de passe</label>
        <input type="text" id="password" name="password" required /> <br />
        <label htmlFor="Nom">Repeter le mots de passe</label>
        <input type="text" id="pass" name="password" required /> <br />
        <br />
        <label type="checkbox" name="terms" required>
          J'accepte les termes et conditions
        </label>
        <br />
        <input type="S'inscrire" value="S'inscrire"></input>
      </div>
      <div className="illustration">
        <img src="" alt="Image d'écolier" />
      </div>
    </main>
  );
}
