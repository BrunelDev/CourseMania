import "./inscription.css"

export default function Register() {
    return (
        
        <>
        <main>
                    <nav class="navbar">
                    <img src="Musi.jpg" alt="Logo" class="logo"/>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div class="form-container">
                    <form class="register-form">
                        <h2>Inscription</h2>
                        <label for="nom">Nom</label>
                        <input type="text" id="nom" name="nom" required />
                        <label for="prenom">Prénom</label>
                        <input type="text" id="prenom" name="prenom" required />
                        <label for="email">Adresse Email</label>
                        <input type="email" id="email" name="email" required />
                        <label for="niveau">Niveau d'étude</label>
                        <input type="text" id="niveau" name="niveau" required />
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" required />
                        <div class="terms">
                            <input type="checkbox" id="terms" name="terms" required/>
                            <label for="terms">J'accepte les termes du contrat</label>
                        </div>
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
                    
                    
        
        </main>
        
        </>



    )
 }