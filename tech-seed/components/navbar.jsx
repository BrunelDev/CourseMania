import Button from "./button";
import SearchBar from "./searchbar";
export default function Navbar() {
  return (
    <div className="flex w-full fixed top-0 left-0 items-center justify-between py-6 px-12">
      <SearchBar />
      <ul className="flex space-x-4 text-[#101828] font-medium">
        <li className="text-[#1A906B] font-semibold">Accueil</li>
        <li>A propos</li>
        <li>Cours</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>
      <div>
        <span className="mr-4">Sign in</span>
        <Button title={"Créer un compte gratuitement"} />
      </div>
    </div>
  );
}
