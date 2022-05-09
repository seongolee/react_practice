import React, {useState} from "react";
import "./Main.css";
import Header from "../components/Header";
import Map from "../components/Map";

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