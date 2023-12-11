import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Paginas/Home";
import Sobre from './Paginas/Sobre';
import './App.css';

function App() {
  return (
  
    <div className="App">
      <h1>Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;

