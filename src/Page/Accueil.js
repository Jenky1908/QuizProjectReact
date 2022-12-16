import Connexion from "../component/Connexion";
import ConnexionAdmin from "../component/ConnexionAdmin";
import PageAdmin from "../component/PageAdmin";
import Title from "../component/Title";
import Theme from "../component/Theme";
import { useState } from "react";
import Foot from "../pagequiz/Foot";

const Accueil = () => {

    const [isConnected, setConnected] = useState(false);
    const [name, setName] = useState("");
    const [isShowing, setShowing] = useState(false);

    return (
        <>
            <ConnexionAdmin isConnected={isConnected} isShowing={isShowing} setShowing={setShowing} />
            <PageAdmin isShowing={isShowing} />
            <Title name={name} isConnected={isConnected} />
            <Theme isConnected={isConnected} />
            <Connexion isConnected={isConnected} setConnected={setConnected} setName={setName} name={name} />
        </>
    )
}

export default Accueil;