import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./containers/Home/Home"
import Grupales from './containers/Mentorias grupales/Grupales';


function App() {
  return (
    <div className="App">
      ÑasManagement
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grupales" element={<Grupales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
