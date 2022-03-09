import React, { useState } from "react";
import "./Main.css";

const Main = () => {
    return(
      <header className="main-header">
          <div>
              <p className="title">솔직한 리뷰, 믿을 수 있는 평점!</p>
              <h1 className="title">Camp Place</h1>
              <fieldset className="main-search">
                  <legend>전체 검색</legend>
                  <label className="search-word" for="main-search">
                      <span className="icon">검색 :</span>
                      <input id="main-search" className="homeSearchInput" name="main-search" type="text" maxLength="50"
                             placeholder="지역, 식당 또는 음식" autocomplete="off" onclick="trackEvent('CLICK_SEARCH_MAIN')" />
                      <span className="clear_btn">초기화</span>
                  </label>
              </fieldset>
          </div>
      </header>
    );
}

export default Main;