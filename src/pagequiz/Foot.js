import { useNavigate } from "react-router-dom";
import Quiz from "../component/Quiz";

const Foot = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <button onClick={back} className="btnAccueil">Accueil</button>
            <Quiz path="foot"/>
        </>
    )
}

export default Foot;