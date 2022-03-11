import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="Header Header-transparent">
            <a href="/" className="Header-logo">
                <img className="Header-logo-icon" src={process.env.PUBLIC_URL + "/icon-logo.png"}
                     style={{width: "61px", margin: "0 25px"}} alt="메인 아이콘"/>
            </a>
            <div className="main-search-wrap">
                <fieldset className="main-search">
                    <legend>전체 검색</legend>
                    <label className="search-word" htmlFor="main-search">
                        <span className="icon">검색 :</span>
                        <input id="main-search" className="homeSearchInput" name="main-search" type="text"
                               maxLength="50"
                               placeholder="음식" autoComplete="off"/>
                        <span className="clear-btn">초기화</span>
                    </label>
                    <input className="search-btn" type="submit" value="검색"/>
                </fieldset>
            </div>
            <ul className="Header-menu-list">
                <li className="Header-menu-item">
                    <a href="" className="Header-map-link">
                        <img className="Header-map-link-icon" src={process.env.PUBLIC_URL + "/map.png"} alt="헤더 지도 아이콘"/>
                    </a>
                </li>
            </ul>
            <ul className="Header-icon-button-list">
                <li className="Header-icon-button-item">
                    <button className="user-profile-button">
                        <i className="user-profile-button-person-icon"/>
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;