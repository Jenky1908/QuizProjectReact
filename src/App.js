import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foot from './pagequiz/Foot';
import Genshin from './pagequiz/Genshin';
import HG from './pagequiz/HG';
import Manga from './pagequiz/Manga';
import Accueil from './Page/Accueil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />}></Route>
            <Route path="/foot" element={<Foot />}></Route>
            <Route path="/genshin" element={<Genshin />}></Route>
            <Route path="/manga" element={<Manga />}></Route>
            <Route path="/hg" element={<HG />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;