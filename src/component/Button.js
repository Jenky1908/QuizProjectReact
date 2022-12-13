import { useNavigate } from "react-router-dom";
import '../styles/ButtonAccueil.css'

export const BackBtn = () => 
{
    /*
        Le Hook utilise le useNavigate() nous permet de naviguer à travers les routes
        Rediriger l'utilisateur vers une URL spécifique
     */

    const navigate = useNavigate();
    console.log(navigate);

    // Nous permet de nous rediriger vers la page précédemment visitée
    const back = () => navigate("/");

    return <button onClick={back} className="btnAccueil">Accueil</button>
}