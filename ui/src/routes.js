import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;