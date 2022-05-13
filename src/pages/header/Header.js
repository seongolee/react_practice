import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header-logo-link">
                <img className="header-logo-icon" src={process.env.PUBLIC_URL + "/icon-logo.png"}
                     alt="header-logo-icon"/>
            </a>
            <ul>
                <li>
                    <a href="/map" className="header-map-link">
                        <img className="header-map-icon" src={process.env.PUBLIC_URL + "/map.png"}
                             alt="header-map-icon"/>
                    </a>
                </li>
                <li>
                    <a href="/user"  className="header-user-link">
                        <img className="header-user-icon" src={process.env.PUBLIC_URL + "/user.png"}/>
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;