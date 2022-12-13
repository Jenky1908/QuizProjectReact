import '../styles/Theme.css';

const Theme = ({ isConnected }) => {
    return (
        <>
            {
                (isConnected) ?
                    <div>
                        <select className="menuD">
                            <option value="0">Selectionner un thème</option>
                            <option value="1">Football</option>
                            <option value="2">Genshin Impact</option>
                            <option value="3">Anime/Manga</option>
                            <option value="4">Histoire/Géographie</option>
                        </select>
                        <button className='btnCommencer'>Commencer !</button>
                    </div>
                    :
                    <p></p>
            }
        </>
    )
}

export default Theme;