import './styles/App.css';
import { useState } from "react";
import Title from './component/Title';
import Connexion from './component/Connexion';
import Quizzz from './component/Quizzz';
import ConnexionAdmin from './component/ConnexionAdmin';

function App() {

  const[isConnected, setConnected] = useState(false);
  const[name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <ConnexionAdmin isConnected={isConnected}/>
        <Title name={name} isConnected={isConnected}/>
        <Connexion isConnected={isConnected} setConnected={setConnected} setName={setName} name={name}/>
        <Quizzz isConnected={isConnected}/>
      </header>
    </div>
  );
}

export default App;
