import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Header } from "./pages"

const App = () => {
    return (
        <BrowserRouter>
            <header className="main-header">
                <Header/>
            </header>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/*">Not Found</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;