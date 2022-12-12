const Quizzz = ({ isConnected }) => {
    return (
        <>
            {
                (isConnected) ?
                    <div>Ceci est le quiz</div>
                    :
                    <p></p>
            }
        </>
    )
}

export default Quizzz;