import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";

export function Rotas() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}