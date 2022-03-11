import React, {useState} from "react";
import "./Main.css";
import Header from "../Components/Header";
import Map from "../Components/Map";

const Main = () => {
    return (
        <main className="cp-main">
            <header className="main-header">
                <Header/>
            </header>
        </main>
    );
}

export default Main;