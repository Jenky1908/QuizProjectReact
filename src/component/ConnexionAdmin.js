import '../styles/ConnexionAdmin.css';
import { useState } from 'react';

const ConnexionAdmin = ({ isConnected, isShowing, setShowing }) => {
    function Show() {
        setShowing(!isShowing);
    }

    return (
        <>
            {
                (!isConnected) ?
                    <div className='btnCA'>
                        <button className='btnAdmin' onClick={Show}>Connexion Admin</button>
                    </div>
                    :
                    <p></p>
            }
        </>
    )
}

export default ConnexionAdmin;