import '../styles/PageAdmin.css';

const PageAdmin = ({ isShowing, onClose }) => {

    if(!isShowing) return null

    return (
        <>
                    <form className='modal'>
                        <p className="closeBtn" onClick={onClose}>X</p>
                        <div className='adm'>
                            <label className="adminName">Identifiant Admin : </label>
                            <input/>
                        </div>
                        <div className='adm'>
                            <label className="adminPassword">Mot de passe Admin : </label>
                            <input type="password"/>
                        </div>
                        <button className="btnCxAdmin" type="submit">Connecter</button>
                    </form>

        </>
    )
}

export default PageAdmin;