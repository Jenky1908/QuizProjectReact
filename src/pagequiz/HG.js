import { useNavigate } from "react-router-dom";

const HG = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <p>Ici le quiz d'Histoire-Géo</p>
            <button onClick={back} className="btnAccueil">Accueil</button>
        </>
    )
}

export default HG;