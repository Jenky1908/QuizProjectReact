import { useNavigate } from "react-router-dom";

const Genshin = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <p>Ici le quiz de Genshin</p>
            <button onClick={back} className="btnAccueil">Accueil</button>
        </>
    )
}

export default Genshin;