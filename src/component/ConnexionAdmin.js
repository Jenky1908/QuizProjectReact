import '../styles/ConnexionAdmin.css';
import { useState } from 'react';
import PageAdmin from './PageAdmin';

const ConnexionAdmin = ({ isConnected}) => {

    const [isShowing, setShowing] = useState(false);

    return (
        <>
        {
            (!isConnected)?
            <div className='btnCA'>
                <button className='btnAdmin' onClick={()=> setShowing(true)}>Connexion Admin</button>
                <PageAdmin isShowing={isShowing}  onClose={()=>setShowing(false)}/>
            </div>
            :
            <p></p>
        }
        </>
    )
}

export default ConnexionAdmin;