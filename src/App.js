import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
import "./Reset.css"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element=<Main/>/>
                <Route exact path="/signup" element=<SignUp/>/>
            </Routes>
        </Router>
    );
}

export default App;