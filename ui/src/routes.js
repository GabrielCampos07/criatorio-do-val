import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/base/_reset.css'

import Home from "./pages/Home";
import Chickens from "./pages/Chickens";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Chickens />} path="chickens" exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;