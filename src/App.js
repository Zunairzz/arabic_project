import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeComponentOne} from "./component/HomeComponentOne";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                < Route path="/" element={<HomeComponentOne/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
