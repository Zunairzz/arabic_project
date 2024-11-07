import './App.css';
import Footer from '../src/component/Footer';
import RegistrationForm from '../src/pages/RegistrationForm';
import RegistrationForm1 from '../src/pages/RegistrationForm1'
import RegistrationForm2 from '../src/pages/RegistrationForm2'
import BoxesDetails from './pages/BoxesDetails'
import Calendar from '../src/pages/Calendar'
import ConferencePage from '../src/pages/ConferencePage'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                < Route path="/" element={<Footer/>}/>
                < Route path="/reg" element={<RegistrationForm/>}/>
                < Route path="/reg1" element={<RegistrationForm1/>}/>
                < Route path="/reg2" element={<RegistrationForm2/>}/>
                < Route path="/box" element={<BoxesDetails/>}/>
                <Route path="/cal" element={<Calendar/>}/>
                <Route path="/con" element={<ConferencePage/>}/>
                <Route path="/zuni" element={<HomeComponentOne/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
