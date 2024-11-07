import './App.css';
import RegistrationForm from '../src/pages/RegistrationForm';
import RegistrationForm1 from '../src/pages/RegistrationForm1'
import RegistrationForm2 from '../src/pages/RegistrationForm2'
import BoxesDetails from './pages/BoxesDetails'
import Calendar from '../src/pages/Calendar'
import ConferenceSection from '../src/pages/ConferenceSection'
import ConferencePage from '../src/pages/ConferencePage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeComponentOne} from "./component/HomeComponentOne";
import {Home} from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                < Route path="/" element={<Home/>}/>
                < Route path="/reg" element={<RegistrationForm/>}/>
                < Route path="/reg1" element={<RegistrationForm1/>}/>
                < Route path="/reg2" element={<RegistrationForm2/>}/>
                < Route path="/box" element={<BoxesDetails/>}/>
                <Route path="/cal" element={<Calendar/>}/>
                <Route path="/con" element={<ConferencePage/>}/>
                <Route path="/" element={<HomeComponentOne/>}/>
                <Route path="/conf" element={<ConferenceSection/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
