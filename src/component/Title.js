import '../styles/Title.css';

const Title = ({ name, isConnected }) => {
    return (
        <div calssName="container">
            {(isConnected) ?
                <h1 className="effect">Es-tu prêt {name} ?</h1>
                :
                <h2 class="title">
                  <span class="title-word title-word-1">Qui </span>
                  <span class="title-word title-word-2">es </span>
                  <span class="title-word title-word-3">tu </span>
                  <span class="title-word title-word-4">?</span>
                </h2>
            }
        </div>
    )
}

export default Title;