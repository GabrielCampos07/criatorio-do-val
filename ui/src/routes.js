import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/base/_reset.css'

import Home from "./pages/Home";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;