import '../styles/Connexion.css';

const Connexion = ({isConnected, setConnected, setName}) => 
{
    const handleSubmit = (e) =>
    {
        e.preventDefault(); // Pour éviter que la page se recharge
        console.log(e);
        const form = e.target; // Tableau avec les input
        const user = form[0].value; // valeur du 1er input dans form
        console.log(user);
        if(user === "")
        {
            alert('Identifiant invalide !');
        }
        else
        {
            setName(user);
            setConnected(!isConnected);
        }
        form[0].value = "";
    }

    const Deconnecter = () =>
    {
        setConnected(false)
        setName("");
    }
    
    return (
        <div>
            {
                (isConnected)? 
                <button className="decx" onClick={Deconnecter}>Deconnexion</button>
                :
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className="conx bar" id="name"/>  
                        <button className="conx btnConx" type="submit">Connecter</button>
                    </div>
                </form>
            }   
        </div>
    )
}

export default Connexion;