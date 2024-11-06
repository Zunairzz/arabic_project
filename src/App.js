import logo from './logo.svg';
import './App.css';
import Footer from '../src/component/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
