import '../styles/PageAdmin.css';

const PageAdmin = ({ isShowing }) => {
    return (
        <>
            {
                (isShowing) ?
                    <form className='modal'>
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
                    :
                    <p></p>
            }
        </>
    )
}

export default PageAdmin;