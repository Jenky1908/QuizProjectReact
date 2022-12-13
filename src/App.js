import './styles/App.css';
import { useState } from "react";
import Title from './component/Title';
import Connexion from './component/Connexion';
import Theme from './component/Theme';
import ConnexionAdmin from './component/ConnexionAdmin';
import PageAdmin from './component/PageAdmin';

function App() {

  const[isConnected, setConnected] = useState(false);
  const[name, setName] = useState("");
  const [isShowing, setShowing] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <ConnexionAdmin isConnected={isConnected} isShowing={isShowing} setShowing={setShowing}/>
        <PageAdmin isShowing={isShowing}/>
        <Title name={name} isConnected={isConnected}/>
        <Theme isConnected={isConnected}/>
        <Connexion isConnected={isConnected} setConnected={setConnected} setName={setName} name={name}/>
      </header>
    </div>
  );
}

export default App;
