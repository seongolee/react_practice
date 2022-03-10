import React from "react";
import "./Header.css";

const Header = () => {
    return(
    <header className="Header Header-transparent">
        <a href="/" className="Header-logo">
            <img className="Header-logo-icon" src={ process.env.PUBLIC_URL + "/icon-logo.png" } style={{ width: "61px", margin: "0 25px"}} alt="메인 아이콘"/>
        </a>
    <ul className="Header-menu-list">
        <li className="Header-menu-item">
            <a href="" className="Header-menu-link">
                <span className="Header-menu-text">맛집 리스트</span>
            </a>
        </li>
    </ul>
    <ul className="Header-icon-button-list">
        <li className="Header-icon-button-item">
            <button className="user-profile-button">
                <i className="user-profile-button-person-icon" />
            </button>
        </li>
    </ul>
    </header>
    );
}

export default Header;