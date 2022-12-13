import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Theme.css';

const Theme = ({ isConnected }) => {
    const navigate = useNavigate();
    const [item, setItem] = useState(0);

    const NavigateQuiz = () => {
        switch (item) {
            case "0":
                navigate("/");
                break;
            case "1":
                navigate("/foot");
                break;
            case "2":
                navigate("/genshin");
                break;
            case "3":
                navigate("/manga");
                break;
            case "4":
                navigate("/hg");
                break;
            default:
                break;
        }
    }


    return (
        <>
            {
                (isConnected) ?
                    <div>
                        <select onChange={e => setItem(e.target.value)} className="menuD">
                            <option value="0">Selectionner un thème</option>
                            <option value="1">Football</option>
                            <option value="2">Genshin Impact</option>
                            <option value="3">Anime/Manga</option>
                            <option value="4">Histoire/Géographie</option>
                        </select>
                        <button className='btnCommencer' onClick={NavigateQuiz}>
                            Commencer !
                        </button>
                    </div>
                    :
                    <p></p>
            }
        </>
    )
}

export default Theme;