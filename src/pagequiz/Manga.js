import { useNavigate } from "react-router-dom";
import Quiz from "../component/Quiz";

const Manga = () => 
{
    const navigate = useNavigate();

    const back = () => navigate("/");
    return (
        <>
            <button onClick={back} className="btnAccueil">Accueil</button>
            <Quiz path="manga/"/>
        </>
    )
}

export default Manga;