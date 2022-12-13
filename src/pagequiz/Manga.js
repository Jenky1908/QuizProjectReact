import { useNavigate } from "react-router-dom";

const Manga = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <p>Ici le quiz de Manga et Anime</p>
            <button onClick={back} className="btnAccueil">Accueil</button>
        </>
    )
}

export default Manga;