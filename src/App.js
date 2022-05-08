import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import "./Reset.css"
import Practice from "./practice/Practice";

const App = () => {

    return (
        // <Router>
        //     <Routes>
        //         <Route exact path="/" element=<Main/>/>
        //         <Route exact path="/signup" element=<SignUp/>/>
        //     </Routes>
        // </Router>
        <div className="App">
            <Practice></Practice>
        </div>
    );
}

export default App;