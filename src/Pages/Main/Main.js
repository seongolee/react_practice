import React, {useState} from "react";
import "./Main.css";
import Header from "../Components/Header";
import Map from "../Components/Map";

const Main = () => {
    return (
        <main className="cp-main">
            <header className="main-header">
                <Header/>
                <div>
                    <p className="title first-title">솔직한 리뷰, 믿을 수 있는 평점!</p>
                    <h1 className="title">캠프 플레이트</h1>
                    <fieldset className="main-search">
                        <legend>전체 검색</legend>
                        <label className="search-word" htmlFor="main-search">
                            <span className="icon">검색 :</span>
                            <input id="main-search" className="homeSearchInput" name="main-search" type="text"
                                   maxLength="50"
                                   placeholder="지역, 식당 또는 음식" autoComplete="off"/>
                            <span className="clear-btn">초기화</span>
                        </label>
                        <input className="search-btn" type="submit" value="검색"/>
                    </fieldset>
                </div>
            </header>
            <Map/>
        </main>
    );
}

export default Main;