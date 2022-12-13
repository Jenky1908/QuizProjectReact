import { useNavigate } from "react-router-dom";

const Foot = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <p>Ici le quiz de Foot</p>
            <button onClick={back} className="btnAccueil">Accueil</button>
        </>
    )
}

export default Foot;