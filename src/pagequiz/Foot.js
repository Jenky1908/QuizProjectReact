import { useNavigate } from "react-router-dom";
import Quiz from "../component/Quiz";

const Foot = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <Quiz/>
            <button onClick={back} className="btnAccueil">Accueil</button>
        </>
    )
}

export default Foot;