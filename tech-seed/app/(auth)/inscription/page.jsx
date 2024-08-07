"use client "
import "./inscription.css"
export default function Inscription(){
  return (
    <div className="inscription">
        <div className="element">
        <div className="elmt">
          <label for="nom">Nom:</label> <br />
          <input type="text" required></input>
          <br />

          <label for="Prenom">Prenom :</label><br />
          <input type="text" required></input>
          <br />
          <label for="email">Adresse électronique :</label><br />
          <input type="email" id="email" name="email" required></input>
          <br />
          <label for="mots de passe">Mots de passe:</label><br />
          <input type="password"  required></input>
          <br />
          <label for="niveau">Niveau d'etude :</label><br />
          <input type="text" required></input>
          <br />
          <span><button className="inscription_button mr-[-50px]">S'inscrire</button></span>
          <div>
          <p className="compte">Vous avez deja un compte ? <a href="/connexion">Se connecter</a></p>
        </div>
        </div>
        
    </div>
    <div className="picture">
      <ul>
         <li><button>Accueil</button></li>
         <li><button>A propos</button></li>
         <li><button>Contact</button></li>
         <li><button>FAQs</button></li>
         <li><h4>Learnt+</h4></li>
      </ul>
      <img src="" alt="" />
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Reprehenderit praesentium laboriosam, iure voluptas <br />
         impedit provident, incidunt voluptates molestiae <br /> 
         nostrum adipisci voluptatibus cum. Maiores amet suscipit animi obcaecati ex illo doloremque. <br />
      </p>
      <div className="logo">
        <ul>
          <li><img src="" alt="Facebook" /></li>
          <li><img src="" alt="Linkedin" /></li>
          <li><img src="" alt="Instagram" /></li>
        </ul>
      </div>
      <span className="droit mr-5">Tout droit reserver</span>
    </div>
    </div>
    
    
  )
}


// nom 
// prenom
// niveau d'étude
// email
// mot de passe 
