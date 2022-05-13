import React, {useState} from "react";
import "./Main.css";

const Main = () => {
    const regionList = {
        1: "서울",
        2: "인천",
        3: "대전",
        4: "대구",
        5: "광주",
        6: "부산",
        7: "울산",
        8: "세종특별자치시",
        31: "경기도",
        32: "강원도",
        33: "충청북도",
        34: "충청남도",
        35: "경상북도",
        36: "경상남도",
        37: "전라북도",
        38: "전라남도",
        39: "제주도"
    };
    const cityList = [""];
    const inoutList = ["실내, 실외"];

    const [regionSelected, setRegionSelected] = useState("지역선택");

    // for(let key of Object.keys(regionList)){
    //     const regionListOptions = <>
    //         <option value={regionList[key]}></option>
    //     </>
    // }

    const handleRegion = (e) => {
        setRegionSelected(e.target.value);
    }


    return (
        <div className="cp-main">
            <div className="main-container">
                <div className="main-wrapper">
                    <h1>현재 날씨 및 가고싶은 장소를 찾고 싶으신가요..?</h1>
                </div>
                <div className="main-search-select-wrapper">
                    <div className="combo-box-wrapper">
                        <label>지역</label>
                        <select title="지역선택" onChange={handleRegion} value={regionSelected}>
                            {/*<option value selected="selected">지역선택</option>*/}
                            {Object.keys(regionList).map((items, index) => {
                                <option key={index}>{items}</option>
                            })}
                        </select>
                        {/*<select title="시군구 선택">*/}
                        {/*    <option value selected="selected">시군구 선택</option>*/}
                        {/*</select>*/}
                        {/*<select title="실내외 선택">*/}
                        {/*    <option value selected="selected">실내외 선택</option>*/}
                        {/*</select>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;