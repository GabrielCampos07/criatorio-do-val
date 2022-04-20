import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/base/_reset.css'

import Home from "./pages/Home";
import Chickens from "./pages/Chickens";
import Eggs from "./pages/Eggs";
import Contacts from "./pages/Contact";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Chickens />} path="chickens" exact />
                <Route element={<Eggs />} path="eggs" exact />
                <Route element={<Contacts />} path="Contacts" exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;