import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {RegMethodOne} from "./pages/RegMethodOne";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/reg1" element={<RegMethodOne/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
