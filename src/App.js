import './App.css';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profil from './components/pages/profil/Profil';
import Disciplina from './components/pages/disciplina/Disciplina';

function App() {
  return (
    <div>
      <Navigation />
      <div className='row'>
        <Menu/>
        <div className=''>
          <BrowserRouter>
            <Routes>
              <Route path='/profil' element={<Profil />} />
              <Route path='/disciplina' element={<Disciplina />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;