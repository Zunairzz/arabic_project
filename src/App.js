import logo from './logo.svg';
import './App.css';
import Footer from '../src/component/Footer';
import RegistrationForm from '../src/pages/RegistrationForm'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Footer/>}/>
            < Route path="/reg" element={<RegistrationForm/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
