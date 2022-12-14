import '../styles/Title.css';

const Title = ({ name, isConnected }) => {
    return (
        <div>
            {(isConnected) ?
                <h1 className="title">Choisis ton thème {name}</h1>
                :
                <h2 className="title">
                  QUI ES TU ?
                </h2>
            }
        </div>
    )
}

export default Title;