import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./containers/Home/Home"
import Grupales from './containers/Mentorias grupales/Grupales';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App appDesign">
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grupales" element={<Grupales />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
